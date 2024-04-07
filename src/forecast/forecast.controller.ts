import { BadRequestException, Controller, Get, HttpException, HttpStatus, Query } from "@nestjs/common";
import { ForecastService } from "./forecast.service";

@Controller()
export class ForecastController {
    constructor(private readonly forecastService: ForecastService) { }

    @Get("/forecast")
    async getForecast(
        @Query('latitude') latitude: string,
        @Query('longitude') longitude: string): Promise<Object> {

        const latitudeNumber = Number(latitude);
        const longitudeNumber = Number(longitude);
        if (latitudeNumber && longitudeNumber) {
            return await this.forecastService.getForecast(latitudeNumber, latitudeNumber);
        } else {
            throw new BadRequestException;
        }
    }
}