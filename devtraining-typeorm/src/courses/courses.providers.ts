import { DataSource } from 'typeorm';
import { Course } from './entities/course.entitiy';

export const coursesProviders = [
    {
        provide: 'COURSES_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Course),
        inject: ['DATA_SOURCE'],
    },
];