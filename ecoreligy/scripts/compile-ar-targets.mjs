import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { loadImage } from 'canvas'
import { OfflineCompiler } from 'mind-ar/src/image-target/offline-compiler.js'

const scriptDir = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(scriptDir, '..')
const targetConfigPath = path.join(projectRoot, 'src', 'data', 'ar-walisongo-targets.json')
const targets = JSON.parse(await readFile(targetConfigPath, 'utf8'))
const outputPath = path.join(projectRoot, 'public', 'assets', 'ar', 'walisongo-portraits.mind')

if (targets.length !== 9 || targets.some((target, index) => target.compiledIndex !== index)) {
  throw new Error('Target config must contain exactly nine consecutive target indices, 0 through 8.')
}

const images = []
for (const target of targets) {
  const relativePath = target.portraitAsset.replace(/^\/assets\//, '')
  const absolutePath = path.join(projectRoot, 'public', 'assets', relativePath)
  const imageBytes = await readFile(absolutePath)
  if (imageBytes[0] !== 0xff || imageBytes[1] !== 0xd8 || imageBytes[2] !== 0xff) {
    throw new Error(`${target.name}: expected a valid JPEG at ${target.portraitAsset}`)
  }
  const image = await loadImage(absolutePath)
  if (!image.width || !image.height) throw new Error(`${target.name}: browser-compatible image decode failed.`)
  images.push(image)
  process.stdout.write(`${target.compiledIndex}: ${target.name} · ${image.width}×${image.height} · ${imageBytes.byteLength.toLocaleString()} bytes\n`)
}

const compiler = new OfflineCompiler()
let lastProgress = 0
const data = await compiler.compileImageTargets(images, (progress) => {
  const milestone = Math.floor(progress / 10) * 10
  if (milestone > lastProgress) {
    lastProgress = milestone
    process.stdout.write(`Compilation ${milestone}%\n`)
  }
})

if (data.length !== targets.length) throw new Error(`Compiler produced ${data.length} targets, expected ${targets.length}.`)
const payload = compiler.exportData()
const verifier = new OfflineCompiler()
const serialized = Uint8Array.from(payload).buffer
const verifiedData = verifier.importData(serialized)
if (verifiedData.length !== targets.length) throw new Error(`MindAR bundle round-trip contains ${verifiedData.length} targets, expected ${targets.length}.`)
verifiedData.forEach((entry, index) => {
  if (!entry.targetImage?.width || !entry.targetImage?.height || !entry.trackingData?.length || !entry.matchingData?.length) {
    throw new Error(`Compiled target ${index} is missing image or tracking/matching data.`)
  }
})

await writeFile(outputPath, Buffer.from(payload))
const result = await readFile(outputPath)
process.stdout.write(`Verified ${verifiedData.length} ordered targets; wrote ${path.relative(projectRoot, outputPath)} (${result.byteLength.toLocaleString()} bytes).\n`)
