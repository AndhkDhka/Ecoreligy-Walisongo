import { createFileRoute } from '@tanstack/react-router'
import { DestinationsPage } from '@/pages'

export const Route = createFileRoute('/destinations/')({ component: DestinationsPage })
