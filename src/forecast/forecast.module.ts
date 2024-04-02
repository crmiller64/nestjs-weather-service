import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ForecastController } from './forecast.controller';
import { ForecastService } from './forecast.service';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [ConfigModule, HttpModule],
    controllers: [ForecastController],
    providers: [ForecastService],
})
export class ForecastModule {}