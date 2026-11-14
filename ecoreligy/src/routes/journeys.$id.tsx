import { createFileRoute } from '@tanstack/react-router'
import { JourneyDetailPage } from '@/pages'

export const Route = createFileRoute('/journeys/$id')({ component: JourneyDetailPage })
