import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggingInterceptor, setDefaultLanguage } from './common';

async function bootstrap() {
  const port = process.env.PORT ?? 3000;
  const app = await NestFactory.create(AppModule);
  app.use(setDefaultLanguage);
  app.useGlobalInterceptors(new LoggingInterceptor());
  await app.listen(port, () => {
    console.log(`Server Is Running On Port ::: ${port} 💕`);
  });
}
bootstrap();
