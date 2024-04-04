import { Controller, Get, HttpException, HttpStatus, Query } from "@nestjs/common";
import { ForecastService } from "./forecast.service";

@Controller()
export class ForecastController {
    constructor(private readonly forecastService: ForecastService) {}

    @Get("/forecast")
    async getForecast(@Query('latitude') latitude, @Query('longitude') longitude): Promise<Object> {
        if (Number(latitude) && Number(longitude)) {
            return await this.forecastService.getForecast(latitude, longitude);
        } else {
            throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
        }
    }
}