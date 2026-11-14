import { createFileRoute } from '@tanstack/react-router'
import { EventsPage } from '@/pages'

export const Route = createFileRoute('/events')({ component: EventsPage })
