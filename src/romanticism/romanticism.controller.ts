import { Controller, Get, Put, Post, Delete, Param, Body } from '@nestjs/common';
import { Romanticism } from './romanticism.entity';
import { RomanticismService } from './romanticism.service';
@Controller('romanticism')

export class RomanticismController {
    constructor(private readonly romanticismService: RomanticismService) {}

    @Get()
    findAll() {
        return this.romanticismService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.romanticismService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateromanticism: Romanticism) {
        return this.romanticismService.update(+id, updateromanticism);
    }

    @Post()
    create(@Body() createromanticism: Romanticism) {
        return this.romanticismService.create(createromanticism);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.romanticismService.remove(+id);
    }
}