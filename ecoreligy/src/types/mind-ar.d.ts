declare module 'mind-ar/dist/mindar-image-three.prod.js' {
  import type { Camera, Group, Scene, WebGLRenderer } from 'three'

  export class MindARThree {
    constructor(options: { container: HTMLElement; imageTargetSrc: string; uiLoading?: string; uiScanning?: string; uiError?: string })
    renderer: WebGLRenderer
    cssRenderer: { domElement: HTMLElement; render: (...args: unknown[]) => void; setSize: (width: number, height: number) => void }
    scene: Scene
    camera: Camera
    addAnchor: (index: number) => { group: Group }
    start(): Promise<void>
    stop(): void
  }
}
