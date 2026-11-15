import { createFileRoute } from '@tanstack/react-router'
import { GuidedPage } from '@/pages'

export const Route = createFileRoute('/guided/$id')({ component: GuidedPage })
