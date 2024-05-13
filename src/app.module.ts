import { Module } from '@nestjs/common';
import { NaturalismModule } from './naturalism/naturalism.module';
import { RealismModule } from './realism/realism.module';
import { RomanticismModule } from './romanticism/romanticism.module';
import { DatasourceModule } from './datasource/datasource.module';
@Module({
    imports: [NaturalismModule, RealismModule, RomanticismModule, DatasourceModule],
    controllers: [],
    providers: [],
})
export class AppModule {}