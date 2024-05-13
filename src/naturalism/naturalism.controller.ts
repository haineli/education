import { Controller, Get, Put, Post, Delete, Param, Body } from '@nestjs/common';
import { Naturalism } from './naturalism.entity';
import { NaturalismService } from './naturalism.service';
@Controller('naturalism')

export class NaturalismController {
    constructor(private readonly naturalismService: NaturalismService) {}

    @Get()
    findAll() {
        return this.naturalismService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.naturalismService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updatenaturalism: Naturalism) {
        return this.naturalismService.update(+id, updatenaturalism);
    }

    @Post()
    create(@Body() createnaturalism: Naturalism) {
        return this.naturalismService.create(createnaturalism);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.naturalismService.remove(+id);
    }
}