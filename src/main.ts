import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import {
	FastifyAdapter,
	NestFastifyApplication
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create<NestFastifyApplication>(
		AppModule,
		new FastifyAdapter({
			logger: true
		})
	);
	const configService = app.get(ConfigService);
	await app.listen(configService.getOrThrow('PORT'));
}
bootstrap();
