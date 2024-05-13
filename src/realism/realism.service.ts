import { Injectable, HttpStatus } from "@nestjs/common";
import { Realism } from './realism.entity';
import { DatasourceService } from "src/datasource/datasource.service";
@Injectable()

export class RealismService {
    constructor(private readonly datasourceService: DatasourceService) {}
    
    create(realism: Realism) {
        this.datasourceService.getRealism().push(realism);
        return realism;
    }

    findOne(id: number) {
        return this.datasourceService
        .getRealism()
        .find((realism) => realism.id === id);
    }

    findAll(): Realism[] {
        return this.datasourceService.getRealism();
    }

    update(id: number, updatedrealism: Realism) {
        const index = this.datasourceService
        .getRealism()
        .findIndex((realism) => realism.id === id);
        this.datasourceService.getRealism()[index] = updatedrealism;
        return this.datasourceService.getRealism()[index];
    }

    remove(id: number) {
        const index = this.datasourceService
        .getRealism()
        .findIndex((realism) => realism.id === id);
        this.datasourceService.getRealism().splice(index, 1);
        return HttpStatus.OK;
    }
}