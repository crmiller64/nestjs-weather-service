import { ModuleMocker, MockFunctionMetadata } from 'jest-mock';
import { Test } from '@nestjs/testing';
import { ForecastController } from './forecast.controller';
import { ForecastService } from './forecast.service';
import { BadRequestException } from '@nestjs/common';

const moduleMocker = new ModuleMocker(global);

describe('ForecastController', () => {
    let controller: ForecastController;
    let service: ForecastService;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            controllers: [ForecastController],
        })
            .useMocker((token) => {
                const results = { forecast: 'the forecast' };
                if (token === ForecastService) {
                    return { getForecast: jest.fn().mockResolvedValue(results) };
                }
                if (typeof token === 'function') {
                    const mockMetadata = moduleMocker.getMetadata(token) as MockFunctionMetadata<any, any>;
                    const Mock = moduleMocker.generateFromMetadata(mockMetadata);
                    return new Mock();
                }
            })
            .compile();

        controller = moduleRef.get(ForecastController);
    });

    describe('getForecast', () => {
        it('should return the forecast json', async () => {
            const result = { forecast: 'the forecast' };

            expect(await controller.getForecast('40', '-74')).toEqual(result);
        });
    });

    describe('getForecast', () => {
        it('should return 400 Bad Request when parameters are non-numeric', async () => {
            await expect(controller.getForecast('a', 'b')).rejects.toEqual(new BadRequestException());
        });
    });
});

