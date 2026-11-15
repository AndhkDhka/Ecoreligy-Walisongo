import { AR_TARGET_BUNDLE, WALI_SONGO_TARGETS } from '@/data/ar-walisongo'

export type ARExperienceDefinition = {
  id: string
  destinationId: string
  title: string
  subtitle: string
  markerImage: string
  markerTarget: string
  markerStatus: 'ready' | 'pending'
  sceneStatus: 'panel-overlay' | 'documented-model'
  reconstructionNote: string
  contentStatus: 'source-linked' | 'needs-review'
}

export const AR_EXPERIENCES: ARExperienceDefinition[] = WALI_SONGO_TARGETS.map((target) => ({
  id: target.destinationId === 'sunan-giri' ? 'giri-kedaton-pilot' : `portrait-${target.destinationId}`,
  destinationId: target.destinationId,
  title: target.name,
  subtitle: 'Portrait image-tracked heritage panel',
  markerImage: target.portraitAsset,
  markerTarget: AR_TARGET_BUNDLE,
  markerStatus: 'ready',
  sceneStatus: 'panel-overlay',
  reconstructionNote: 'A source-linked 2D heritage panel is shown. The supplied portrait is an illustration used as a scan target, not a verified historical likeness.',
  contentStatus: 'source-linked',
}))
