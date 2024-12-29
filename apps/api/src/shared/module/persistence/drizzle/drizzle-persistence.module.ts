import { DrizzlePostgresModule } from '@knaadh/nestjs-drizzle-postgres'
import { DynamicModule, Module } from '@nestjs/common'

import { EnvModule } from '../../env/env.module'
import { EnvService } from '../../env/services/env.service'

export const DB_TOKEN = 'DB_POSTGRES'

@Module({})
export class DrizzlePersistenceModule {
  static forRoot(schema: Record<string, unknown> = {}): DynamicModule {
    return {
      module: DrizzlePersistenceModule,
      imports: [
        DrizzlePostgresModule.registerAsync({
          tag: DB_TOKEN,
          imports: [EnvModule],
          inject: [EnvService],
          useFactory: (envService: EnvService) => ({
            postgres: {
              url: envService.get('DATABASE').DATABASE_URL,
            },
            config: { schema: { ...schema }, logger: false },
          }),
        }),
      ],
    }
  }
}
