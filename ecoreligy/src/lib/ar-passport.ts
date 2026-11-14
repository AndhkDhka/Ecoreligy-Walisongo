const STORAGE_KEY = 'ejg_ar_experience_records'

export type ARExperienceRecord = {
  experienceId: string
  destinationId: string
  completedAt: string
  status: 'experience-completed'
  onSiteVisitVerified: false
}

export function readARExperienceRecords(): ARExperienceRecord[] {
  try {
    const value: unknown = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    if (!Array.isArray(value)) return []
    return value.filter((record): record is ARExperienceRecord =>
      record && typeof record === 'object' &&
      typeof record.experienceId === 'string' &&
      typeof record.destinationId === 'string' &&
      typeof record.completedAt === 'string' &&
      record.status === 'experience-completed' &&
      record.onSiteVisitVerified === false,
    )
  } catch { return [] }
}

export function saveARExperienceRecord(experienceId: string, destinationId: string): boolean {
  try {
    const existing = readARExperienceRecords()
    const next = [
      { experienceId, destinationId, completedAt: new Date().toISOString(), status: 'experience-completed' as const, onSiteVisitVerified: false as const },
      ...existing.filter((record) => record.experienceId !== experienceId),
    ]
    const serialized = JSON.stringify(next)
    localStorage.setItem(STORAGE_KEY, serialized)
    return localStorage.getItem(STORAGE_KEY) === serialized
  } catch { return false }
}
