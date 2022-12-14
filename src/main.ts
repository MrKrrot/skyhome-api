import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { PORT } from './config'
 
async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    app.useGlobalPipes(new ValidationPipe())

    const config = new DocumentBuilder()
        .setTitle('SkyHome API')
        .setDescription('The SkyHome API Documentation')
        .setVersion('1.0')
        .addTag('Auth')
        .addTag('Folder Management')
        .addTag('Folders')
        .addTag('Users')
        .build()

    const document = SwaggerModule.createDocument(app, config)

    SwaggerModule.setup('/', app, document)
    await app.listen(PORT)
}
bootstrap()
