import { configSchema, type Env } from './env.schema'

export const factory = (): Env => {
  const result = configSchema.parse({
    APP: {
      PORT: process.env.PORT,
    },
    DATABASE: {
      DATABASE_URL: process.env.DATABASE_URL,
    },
  })

  return result
}
