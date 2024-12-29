import { Module } from '@nestjs/common'

import { EnvModule } from './shared/module/env/env.module'

@Module({
  imports: [EnvModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
