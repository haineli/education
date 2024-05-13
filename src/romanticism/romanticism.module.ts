import { Module } from '@nestjs/common';
import { RomanticismService } from './romanticism.service';
import { RomanticismController } from './romanticism.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';

@Module({
    imports: [DatasourceModule],
    controllers: [RomanticismController],
    providers: [RomanticismService],
})
export class RomanticismModule {}