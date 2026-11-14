import { createFileRoute } from '@tanstack/react-router'
import { CulturalDiscoveryPage } from '@/pages'

export const Route = createFileRoute('/culture')({ component: CulturalDiscoveryPage })
