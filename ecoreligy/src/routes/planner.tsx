import { createFileRoute } from '@tanstack/react-router'
import { PlannerPage } from '@/pages'

export const Route = createFileRoute('/planner')({ component: PlannerPage })
