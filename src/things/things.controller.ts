import { Controller, Get, Post, Body } from '@nestjs/common';
import { ThingsService } from './things.service';
import { Thing } from './thing.model';

@Controller('things')
export class ThingsController {
    constructor(private thingsService: ThingsService) {}

    @Get()
    getAllThings(): Thing[] {
        return this.thingsService.getAllThings();
    }

    @Post()
    postNewThing(
            @Body('name') name: string,
            @Body('age') age: number
        ) {
        return this.thingsService.createThing(name, age);
    }
}
