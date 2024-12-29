import { z } from 'zod'

export const databaseSchema = z.object({
  DATABASE_URL: z.string(),
})

export const appSchema = z.object({
  PORT: z.coerce.number().positive().int().default(3333),
})

export const configSchema = z.object({
  APP: appSchema,
  DATABASE: databaseSchema,
})

export type Env = z.infer<typeof configSchema>
