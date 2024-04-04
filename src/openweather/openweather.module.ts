import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { OpenWeatherService } from './openweather.service';

@Module({
    imports: [ConfigModule, HttpModule],
    providers: [OpenWeatherService],
    exports: [OpenWeatherService]
})
export class OpenWeatherModule {}