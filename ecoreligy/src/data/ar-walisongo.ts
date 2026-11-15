import { DESTINATIONS } from '@/data'

/** Prompt order is also the target compiler's stable index order. */
export const WALI_SONGO_TARGETS = [
  { destinationId: 'sunan-drajat', portraitAsset: '/assets/ar/portraits/sunan-drajat.jpg', compiledIndex: 0, legacyMindTarget: null },
  { destinationId: 'sunan-bonang', portraitAsset: '/assets/ar/portraits/sunan-bonang.jpg', compiledIndex: 1, legacyMindTarget: null },
  { destinationId: 'sunan-giri', portraitAsset: '/assets/ar/portraits/sunan-giri.jpg', compiledIndex: 2, legacyMindTarget: '/assets/ar/sunan-giri.mind' },
  { destinationId: 'sunan-ampel', portraitAsset: '/assets/ar/portraits/sunan-ampel.jpg', compiledIndex: 3, legacyMindTarget: null },
  { destinationId: 'malik-ibrahim', portraitAsset: '/assets/ar/portraits/maulana-malik-ibrahim.jpg', compiledIndex: 4, legacyMindTarget: null },
  { destinationId: 'sunan-gunung-jati', portraitAsset: '/assets/ar/portraits/sunan-gunung-jati.jpg', compiledIndex: 5, legacyMindTarget: null },
  { destinationId: 'sunan-muria', portraitAsset: '/assets/ar/portraits/sunan-muria.jpg', compiledIndex: 6, legacyMindTarget: null },
  { destinationId: 'sunan-kalijaga', portraitAsset: '/assets/ar/portraits/sunan-kalijaga.jpg', compiledIndex: 7, legacyMindTarget: null },
  { destinationId: 'sunan-kudus', portraitAsset: '/assets/ar/portraits/sunan-kudus.jpg', compiledIndex: 8, legacyMindTarget: null },
] as const

/** AR panels read from the canonical destination records; profile text is not duplicated here. */
export const WALI_SONGO_AR_PROFILES = WALI_SONGO_TARGETS.flatMap(({ destinationId }) => {
  const profile = DESTINATIONS.find((item: any) => item.id === destinationId && item.kind === 'walisongo')
  return profile ? [profile] : []
})

/** Index 0 is the sole target in the currently compiled legacy site-image file. */
export const AR_LEGACY_TARGET_BY_INDEX = ['sunan-giri'] as const
