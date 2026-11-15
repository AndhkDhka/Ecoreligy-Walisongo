import { DESTINATIONS } from '@/data'
import targetConfig from '@/data/ar-walisongo-targets.json'
import sourceContent from '@/data/walisongo-ar-content.json'

export const AR_TARGET_BUNDLE = '/assets/ar/walisongo-portraits.mind'

/** Single ordered source for portrait assets, profile identity, and MindAR target indices. */
export const WALI_SONGO_TARGETS = targetConfig
export type WaliSongoTarget = (typeof WALI_SONGO_TARGETS)[number]

/** AR panels use the canonical destination records and the portrait map above. */
export const WALI_SONGO_AR_PROFILES = WALI_SONGO_TARGETS.flatMap((target) => {
  const profile = DESTINATIONS.find((item: any) => item.id === target.destinationId && item.kind === 'walisongo')
  const source = sourceContent.profiles.find((item) => item.id === target.destinationId)
  if (!profile || !source) return []

  const englishHistory = ['life', 'context', 'dakwah', 'methods', 'legacy']
    .flatMap((key) => profile.sections?.[key]?.en ?? [])
    .join('\n\n')
  const englishNotes = (profile.variants ?? []).map((note: any) => note.en).filter(Boolean).join('\n\n')
  const englishHeritage = profile.sections?.legacy?.en ?? []
  const heritageItems = source.heritageItems.map((item, index) => {
    const tradition = /tradisi|tembang|warisan dakwah|jaringan pendidikan|pendekatan/i.test(item.name)
    const collection = /museum|gamelan|bedug|keris|pusaka/i.test(item.name)
    return {
      ...item,
      type: tradition ? { id: 'Tradisi / warisan nonbenda', en: 'Tradition / intangible heritage' } : collection ? { id: 'Koleksi / artefak', en: 'Collection / artefact' } : { id: 'Situs / bangunan', en: 'Site / building' },
      certainty: tradition ? { id: 'Atribusi tradisi; rincian ada pada keterangan sumber.', en: 'Traditional attribution; see the source note.' } : { id: 'Tidak menyatakan kepemilikan pribadi tokoh.', en: 'No personal ownership by the figure is claimed.' },
      description: { id: item.description, en: englishHeritage[index] ?? item.description },
      name: { id: item.name, en: item.name },
    }
  })
  const arContent = {
    displayName: { id: source.name, en: target.name },
    aliases: { id: source.aliases, en: profile.titles ?? profile.nameFull ?? target.name },
    biography: { id: source.biography, en: profile.excerpt?.en ?? source.biography },
    history: { id: source.history, en: englishHistory || source.history },
    tombLocation: { id: source.tombLocation, en: profile.locationInfo?.address ?? source.tombLocation },
    heritageItems,
    historicalNotes: { id: source.historicalNotes.join('\n\n'), en: englishNotes || source.historicalNotes.join('\n\n') },
    sources: source.sources,
  }
  return [{ ...profile, portrait: target.portraitAsset, targetIndex: target.compiledIndex, arContent }]
})
