import { Injectable } from '@nestjs/common';
import { Realism } from 'src/realism/realism.entity';
import { Romanticism } from 'src/romanticism/romanticism.entity';
import { Naturalism } from 'src/naturalism/naturalism.entity';

@Injectable()
export class DatasourceService {
    private realism: Realism[] = [];
    private romanticism: Romanticism[] = [];
    private naturalism: Naturalism[] = [];

    getRealism(): Realism [] {
        return this.realism;
    }

    getRomanticism(): Romanticism [] {
        return this.romanticism;
    }

    getNaturalism(): Naturalism[] {
        return this.naturalism;
    }
    
}