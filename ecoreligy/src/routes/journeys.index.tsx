import { createFileRoute } from '@tanstack/react-router'
import { JourneysPage } from '@/pages'

export const Route = createFileRoute('/journeys/')({ component: JourneysPage })
