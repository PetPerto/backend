import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'
import { GlobalExceptionsFilter } from './shared/http/exceptions/global-exceptions.filter'
import { EnvService } from './shared/module/env/services/env.service'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalFilters(new GlobalExceptionsFilter())

  const envService = app.get(EnvService)

  await app.listen(envService.get('APP').PORT)
}
bootstrap()
