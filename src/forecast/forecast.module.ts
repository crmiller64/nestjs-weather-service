import { Module } from '@nestjs/common';
import { ForecastController } from './forecast.controller';
import { ForecastService } from './forecast.service';
import { OpenWeatherModule } from '../openweather/openweather.module';

@Module({
    imports: [OpenWeatherModule],
    controllers: [ForecastController],
    providers: [ForecastService],
})
export class ForecastModule { }