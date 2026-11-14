import { createFileRoute } from '@tanstack/react-router'
import { DestinationDetailPage } from '@/pages'

export const Route = createFileRoute('/destinations/$id')({ component: DestinationDetailPage })
