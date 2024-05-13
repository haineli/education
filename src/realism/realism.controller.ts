import { Controller, Get, Put, Post, Delete, Param, Body } from '@nestjs/common';
import { Realism } from './realism.entity';
import { RealismService } from './realism.service';
@Controller('realism')
export class RealismController {
    constructor(private readonly realismService: RealismService) {}

    @Get()
    findAll() {
        return this.realismService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.realismService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateRealism: Realism) {
        return this.realismService.update(+id, updateRealism);
    }

    @Post()
    create(@Body() createRealism: Realism) {
        return this.realismService.create(createRealism);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.realismService.remove(+id);
    }
}