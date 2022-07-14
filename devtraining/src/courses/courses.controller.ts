import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('courses')
export class CoursesController {

    constructor(private readonly cousesService: CoursesService) { }

    @Get('list')
    findAll(@Res() response) {

        return response.status(HttpStatus.ACCEPTED).send(this.cousesService.findAll())
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.cousesService.findOne(id);
    }

    @Post()
    // @HttpCode(HttpStatus.NO_CONTENT)
    //@HttpCode(204)
    create(@Body() createCourseDto: CreateCourseDto) {
        // create(@Body('name') name: string) {
        this.cousesService.create(createCourseDto)
        return createCourseDto;
    }

    @Patch(":id")
    update(@Param('id') id: number, @Body() updateCourseDto: UpdateCourseDto) {
        return this.cousesService.update(String(id), updateCourseDto);
    }

    @Delete(":id")
    remove(@Param('id') id: string) {
        return this.cousesService.delete(id)
    }

}
