import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { CoursesService } from './courses.service';

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
    create(@Body() body) {
        // create(@Body('name') name: string) {
        this.cousesService.create(Body)
        // return name;
    }

    @Patch()
    update(@Param('id') id: string, @Body() body) {
        return this.cousesService.update(id, body);
    }

    @Delete()
    remove(@Param('id') id: string) {
        return this.cousesService.delete(id)
    }

}
