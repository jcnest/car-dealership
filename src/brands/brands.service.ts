import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateBrandDto, UpdateBrandDto } from './dto';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {
    private brands: Brand[] = [
        {
            id: uuid(),
            name: 'Kia',
            createdAt: new Date().getTime(),
        },
    ];

    findAll() {
        return this.brands;
    }

    findOne(id: string) {
        const brand = this.brands.find((b) => b.id === id);
        if (!brand)
            throw new NotFoundException(`Brand with id '${id}' not found.`);
        return brand;
    }

    create(createBrandDto: CreateBrandDto): Brand {
        const brand = {
            id: uuid(),
            createdAt: new Date().getTime(),
            ...createBrandDto,
        };
        this.brands.push(brand);
        return brand;
    }

    update(id: string, updateBrandDto: UpdateBrandDto) {
        const brandDB = {
            ...this.findOne(id),
            ...updateBrandDto,
            updatedAt: new Date().getTime(),
        };
        this.brands = this.brands.map((b) => (b.id === id ? brandDB : b));
        return brandDB;
    }

    remove(id: string) {
        this.findOne(id);
        this.brands = this.brands.filter((b) => b.id !== id);
    }
}
