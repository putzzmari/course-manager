import { NgModule } from '@angular/core';
import { CourseListComponent } from './course-list.component';
import { CoursesInfoComponent } from './courses-info.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StarModule } from '../shared/component/star/star.module';
import { AppPipeModule } from '../shared/pipe/app-pipe.module';

@NgModule({
    declarations: [
       CourseListComponent,
       CoursesInfoComponent, 
    ], 
    imports: [
        CommonModule,
        FormsModule,
        StarModule,
        AppPipeModule,
        RouterModule.forRoot([
            {
                path: 'courses',
                component: CourseListComponent
            },
            {
                path: 'courses/info/:id',
                component: CoursesInfoComponent
            },
        ])
    ]
})

export class CourseModule {

}