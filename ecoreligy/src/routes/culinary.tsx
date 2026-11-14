import { createFileRoute } from '@tanstack/react-router'
import { CulinaryPage } from '@/pages'

export const Route = createFileRoute('/culinary')({ component: CulinaryPage })
