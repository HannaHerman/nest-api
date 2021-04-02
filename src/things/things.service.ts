import { Injectable } from '@nestjs/common';
import * as uuid from 'uuid';
import { Thing, ThingMembership } from './thing.model';

@Injectable()
export class ThingsService {
    private things: Thing[] = [];

    getAllThings(): Thing[] {
        return this.things;
    }

    createThing(name: string, age: number): Thing {
        const thing: Thing = {
            id: uuid.v1(),
            name,
            age,
            membership: ThingMembership.ACTIVE
        }

        this.things.push(thing);
        return thing;
    }
}
