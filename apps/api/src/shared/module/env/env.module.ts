import { Global, Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { factory } from './env.factory'
import { EnvService } from './services/env.service'

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [factory],
      isGlobal: true,
    }),
  ],
  providers: [EnvService],
  exports: [EnvService],
})
export class EnvModule {}
