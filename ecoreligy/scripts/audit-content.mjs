import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { CULINARY, DESTINATIONS, PRODUCTS } from '../src/data.js'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'public/assets/MANIFEST.json'), 'utf8'))
const destinations = DESTINATIONS.filter((item) => item.kind === 'walisongo')
const errors = []
const warnings = []
const uniqueIds = (items, label) => {
  const seen = new Set()
  for (const item of items) {
    if (seen.has(item.id)) errors.push(`Duplicate ${label} ID: ${item.id}`)
    seen.add(item.id)
  }
  return seen
}
const destinationIds = uniqueIds(destinations, 'destination')
const culinaryIds = uniqueIds(CULINARY, 'culinary')
const productIds = uniqueIds(PRODUCTS, 'product')
uniqueIds(manifest.assets, 'manifest asset')

const resolveLocalAsset = (assetPath, source) => {
  if (!assetPath) return
  if (!assetPath.startsWith('/assets/')) {
    errors.push(`${source} image is not a local /assets path: ${assetPath}`)
    return
  }
  if (!fs.existsSync(path.join(root, 'public', assetPath.slice(1)))) errors.push(`${source} image file is missing: ${assetPath}`)
  if (!manifest.assets.some((asset) => asset.path === assetPath)) errors.push(`${source} image is not listed in MANIFEST.json: ${assetPath}`)
}

for (const asset of manifest.assets) resolveLocalAsset(asset.path, `Manifest asset ${asset.id}`)
for (const item of [...CULINARY, ...PRODUCTS]) {
  resolveLocalAsset(item.cover, `${item.id}`)
  const links = item.destinationIds || (item.destinationId ? [item.destinationId] : [])
  for (const id of links) if (!DESTINATIONS.some((destination) => destination.id === id)) errors.push(`${item.id} links to unknown destination: ${id}`)
  if (!item.cover) warnings.push(`${item.id} has no image; UI fallback is expected`)
  if (!item.sourceUrl && !item.imageSource && !item.source) warnings.push(`${item.id} has no recorded information or image source`)
}

let missingFoodRelations = 0
let missingProductRelations = 0
let unsupportedClaimCount = 0
for (const place of destinations) {
  for (const id of place.nearbyCulinary || []) if (!culinaryIds.has(id)) errors.push(`${place.id} references unknown culinary item: ${id}`)
  for (const id of place.nearbyProducts || []) if (!productIds.has(id)) errors.push(`${place.id} references unknown product: ${id}`)
  if (!(place.nearbyCulinary || []).length) { missingFoodRelations++; warnings.push(`${place.id} has no culinary relation`) }
  if (!(place.nearbyProducts || []).length) { missingProductRelations++; warnings.push(`${place.id} has no product relation; empty state should explain the gap`) }
  for (const fact of place.facts || []) {
    const linkedSources = (fact.refs || []).map((index) => place.references?.[index]).filter((source) => source && typeof source === 'object' && /^https?:\/\//.test(source.url || ''))
    if (!linkedSources.length) {
      unsupportedClaimCount++
      warnings.push(`${place.id} historical claim lacks a linked URL: ${String(fact.id || fact.en || fact.type).slice(0, 90)}`)
    }
  }
  for (const photo of place.gallery || []) {
    const photoPath = typeof photo === 'string' ? photo : photo.path
    resolveLocalAsset(photoPath, `${place.id} gallery`)
  }
}

const summary = {
  destinations: destinations.length,
  culinaryItems: CULINARY.length,
  products: PRODUCTS.length,
  manifestAssets: manifest.assets.length,
  culinaryPhotos: CULINARY.filter((item) => item.cover).length,
  productPhotos: PRODUCTS.filter((item) => item.cover).length,
  destinationsWithoutFood: missingFoodRelations,
  destinationsWithoutProducts: missingProductRelations,
  historicalClaimsWithoutLinkedUrl: unsupportedClaimCount,
  errors: errors.length,
  warnings: warnings.length,
}
console.log(JSON.stringify(summary, null, 2))
if (warnings.length) console.log('\nWarnings:\n' + warnings.map((message) => `- ${message}`).join('\n'))
if (errors.length) {
  console.error('\nErrors:\n' + errors.map((message) => `- ${message}`).join('\n'))
  process.exitCode = 1
} else console.log('\nContent integrity check passed. Missing images and claim sources remain visible as warnings for follow-up.')
