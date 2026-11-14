import { createFileRoute } from '@tanstack/react-router'
import { VisitInformationPage } from '@/pages'

export const Route = createFileRoute('/visit')({ component: VisitInformationPage })
