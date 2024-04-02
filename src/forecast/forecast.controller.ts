import { Controller, Get } from "@nestjs/common";
import { ForecastService } from "./forecast.service";

@Controller()
export class ForecastController {
    constructor(private readonly forecastService: ForecastService) {}

    @Get("/forecast")
    async getForecast(): Promise<Object> {
        return await this.forecastService.getForecast();
    }
}