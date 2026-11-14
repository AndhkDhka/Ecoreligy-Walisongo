import { createFileRoute } from '@tanstack/react-router'
import { TimelinePage } from '@/pages'

export const Route = createFileRoute('/timeline')({ component: TimelinePage })
