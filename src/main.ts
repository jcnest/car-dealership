import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function main() {
    const app = await NestFactory.create(AppModule);

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true, // Deja sólo los atributos esperados.
            forbidNonWhitelisted: true, // Verifica que sólo permita los atributos esperados.
        }),
    );

    await app.listen(3000);
}
main();
