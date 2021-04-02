import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { ThingsModule } from '../src/things/things.module';
import { ThingsService } from '../src/things/things.service';


describe('Things', () => {
    let app: INestApplication;
    let testService = { getAllThings: () => ['test'],
                        createThing: (name: string, age: number) => ({ name, age })
                    };

    beforeAll(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [ThingsModule],
        })
            .overrideProvider(ThingsService)
            .useValue(testService)
            .compile();

        app = moduleRef.createNestApplication();
        await app.init();
    });

    it(`/GET things`, () => {
        return request(app.getHttpServer())
            .get('/things')
            .expect(200)
            .expect(testService.getAllThings());
    });

    it(`/POST things`, () => {
        return request(app.getHttpServer())
            .post('/things')
            .send({name: 'Helen', age: 25})
            .expect(201)
            .expect(testService.createThing('Helen', 25));
    });

    afterAll(async () => {
        await app.close();
    });
});
