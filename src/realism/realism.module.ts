import { Module } from '@nestjs/common';
import { RealismService } from './realism.service';
import { RealismController } from './realism.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';

@Module({
    imports: [DatasourceModule],
    controllers: [RealismController],
    providers: [RealismService],
})
export class RealismModule {}