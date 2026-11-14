export type ARExperienceDefinition = {
  id: string
  destinationId: string
  title: string
  subtitle: string
  markerImage: string
  markerTarget: string
  markerStatus: 'ready' | 'pending'
  sceneStatus: 'interpretive-placeholder' | 'documented-model'
  reconstructionNote: string
  contentStatus: 'source-linked' | 'needs-review'
}

export const AR_EXPERIENCES: ARExperienceDefinition[] = [
  {
    id: 'giri-kedaton-pilot',
    destinationId: 'sunan-giri',
    title: 'Giri Kedaton · Pilot',
    subtitle: 'Image-tracked heritage interpretation',
    markerImage: '/assets/Document/Makam Sunan Giri.png',
    markerTarget: '/assets/ar/sunan-giri.mind',
    markerStatus: 'ready',
    sceneStatus: 'interpretive-placeholder',
    reconstructionNote: 'The 3D object is an abstract digital interpretation. It is not a reconstruction of Giri Kedaton or a historical artefact.',
    contentStatus: 'source-linked',
  },
]
