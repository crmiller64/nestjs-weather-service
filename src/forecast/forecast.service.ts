import { Injectable, Logger } from "@nestjs/common";
import { OpenWeatherService } from "../openweather/openweather.service";

@Injectable()
export class ForecastService {
    private readonly logger = new Logger(ForecastService.name);
    constructor(private readonly openWeatherService: OpenWeatherService) { }

    async getForecast(latitude: number, longitude: number): Promise<Object> {
        return await this.openWeatherService.getCurrentForecast(latitude, longitude);
    }
}