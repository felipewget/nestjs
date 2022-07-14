import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Course } from './entities/course.entitiy';

@Injectable()
export class CoursesService {

    private courses: Course[] = [
        {
            id: 1,
            name: "Fundamentos do NestJS",
            description: "Descrição do curso",
            tags: ["node.js", "nestjs", "javascript"]
        }
    ];

    findAll() {
        return this.courses;
    }

    findOne(id: string) {
        let course = this.courses.find((course: Course) => course.id === Number(id))

        if (!course) {
            throw new HttpException(`Course ${id} not found`, HttpStatus.NOT_FOUND);
        }

        return course;
    }

    create(createCourseDTO: any) {
        this.courses.push(createCourseDTO)
    }

    update(id: string, updateCourseDTO: any) {

        let indexCourse = this.courses.findIndex((course: Course) => {
            return course.id === Number(id)
        });

        this.courses[indexCourse] = updateCourseDTO;

    }

    delete(id: string) {

        let indexCourse = this.courses.findIndex((course: Course) => course.id === Number(id));

        if (indexCourse >= 0) {
            this.courses.splice(indexCourse, 1);
        }

    }

}
