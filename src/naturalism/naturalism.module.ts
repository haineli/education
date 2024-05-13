import { Module } from '@nestjs/common';
import { NaturalismService } from './naturalism.service';
import { NaturalismController } from './naturalism.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';

@Module({
    imports: [DatasourceModule],
    controllers: [NaturalismController],
    providers: [NaturalismService],
})
export class NaturalismModule {}