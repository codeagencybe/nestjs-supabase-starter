import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// below are used in example from Rokas Dam. ./common/common.module.ts is not in the repo
// import { CommonModule } from './common/common.module';
// projectsModule is replaced with users model.
// import { ProjectsModule } from './projects/projects.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    //ProjectsModule,
    //CommonModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
