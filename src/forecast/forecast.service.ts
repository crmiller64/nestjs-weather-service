import { HttpService } from "@nestjs/axios";
import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { AxiosError, AxiosRequestConfig } from "axios";
import { catchError, firstValueFrom } from "rxjs";

@Injectable()
export class ForecastService {
    private readonly logger = new Logger(ForecastService.name);
    constructor(private configService: ConfigService, private readonly httpService: HttpService) {}

    async getForecast(): Promise<Object[]> {
        // TODO change to use custom config YAML file instead of environment variables from .env file(s)
        // get an environment variable
        const apiKey = this.configService.get<string>('OPENWEATHER_API_KEY');

        const requestConfig: AxiosRequestConfig = {
            headers: {
                'Accept': 'application/json',
            },
            params: {
                lat: '40.7127281',
                lon: '-74.0060152',
                appid: apiKey
            }
          };

        const { data } = await firstValueFrom(
          this.httpService.get<Object[]>('https://api.openweathermap.org/data/2.5/weather', requestConfig).pipe(
            catchError((error: AxiosError) => {
              this.logger.error(error.response.data);
              throw 'An error happened!';
            }),
          ),
        );
        return data;
    }
}