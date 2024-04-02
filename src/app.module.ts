import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ForecastModule } from './forecast/forecast.module';

@Module({
  imports: [ConfigModule.forRoot(), ForecastModule],
  controllers: [AppController], // TODO remove
  providers: [AppService],  // TODO remove
})
export class AppModule {}
