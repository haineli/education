import { Injectable, HttpStatus } from "@nestjs/common";
import { Naturalism } from './naturalism.entity';
import { DatasourceService } from "src/datasource/datasource.service";
@Injectable()

export class NaturalismService {
    constructor(private readonly datasourceService: DatasourceService) {}
    
    create(naturalism: Naturalism) {
        this.datasourceService.getNaturalism().push(naturalism);
        return naturalism;
    }
    
    findOne(id: number) {
        return this.datasourceService
        .getNaturalism()
        .find((naturalism) => naturalism.id === id);
    }

    findAll(): Naturalism[] {
        return this.datasourceService.getNaturalism();
    }

    update(id: number, updatednaturalism: Naturalism) {
        const index = this.datasourceService
        .getNaturalism()
        .findIndex((naturalism) => naturalism.id === id);
        this.datasourceService.getNaturalism()[index] = updatednaturalism;
        return this.datasourceService.getNaturalism()[index];
    }

    remove(id: number) {
        const index = this.datasourceService
        .getNaturalism()
        .findIndex((naturalism) => naturalism.id === id);
        this.datasourceService.getNaturalism().splice(index, 1);
        return HttpStatus.OK;
    }
}