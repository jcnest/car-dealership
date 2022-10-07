import { v4 as uuid } from 'uuid';
import { Car } from '@cars/interfaces/car.interface';

export const CARS_SEED: Car[] = [
    {
        id: uuid(),
        brand: 'Toyota',
        model: 'Hilux',
    },
    {
        id: uuid(),
        brand: 'Kia',
        model: 'Rio',
    },
    {
        id: uuid(),
        brand: 'Jeep',
        model: 'Cherokee',
    },
    {
        id: uuid(),
        brand: 'Honda',
        model: 'Civic',
    },
];
