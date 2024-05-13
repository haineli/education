import { Injectable, HttpStatus } from "@nestjs/common";
import { Romanticism } from './romanticism.entity';
import { DatasourceService } from "src/datasource/datasource.service";
@Injectable()

export class RomanticismService {
    constructor(private readonly datasourceService: DatasourceService) {}
    
    create(romanticism: Romanticism) {
        this.datasourceService.getRomanticism().push(romanticism);
        return romanticism;
    }

    findOne(id: number) {
        return this.datasourceService
        .getRomanticism()
        .find((romanticism) => romanticism.id === id);
    }

    findAll(): Romanticism[] {
        return this.datasourceService.getRomanticism();
    }

    update(id: number, updatedromanticism: Romanticism) {
        const index = this.datasourceService
        .getRomanticism()
        .findIndex((romanticism) => romanticism.id === id);
        this.datasourceService.getRomanticism()[index] = updatedromanticism;
        return this.datasourceService.getRomanticism()[index];
    }

    remove(id: number) {
        const index = this.datasourceService
        .getRomanticism()
        .findIndex((romanticism) => romanticism.id === id);
        this.datasourceService.getRomanticism().splice(index, 1);
        return HttpStatus.OK;
    }
}