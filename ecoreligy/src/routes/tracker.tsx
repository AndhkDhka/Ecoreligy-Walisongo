import { createFileRoute } from '@tanstack/react-router'
import { TrackerPage } from '@/pages'

export const Route = createFileRoute('/tracker')({
  validateSearch: (search: Record<string, unknown>) => ({ journey: typeof search.journey === 'string' ? search.journey : undefined }),
  component: TrackerPage,
})
