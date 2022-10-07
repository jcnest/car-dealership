import { Injectable } from '@nestjs/common';
import { CarsService } from '@cars/cars.service';
import { BrandsService } from '@brands/brands.service';
import { CARS_SEED, BRANDS_SEED } from './data';

@Injectable()
export class SeedService {
    constructor(
        private readonly carsService: CarsService,
        private readonly brandsService: BrandsService,
    ) {}

    generateData() {
        this.carsService.fillCarsWithSeedData(CARS_SEED);
        this.brandsService.fillBrandsWithSeedData(BRANDS_SEED);
        return 'Seed successfully executed.';
    }
}
