import { handlers } from './handlers'
import { setupWorker } from 'msw/browser'

export const server = setupWorker(...handlers)
