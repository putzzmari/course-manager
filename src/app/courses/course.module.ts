import { NgModule } from '@angular/core';
import { CourseListComponent } from './course-list.component';
import { CoursesInfoComponent } from './courses-info.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReplacePipe } from '../pipe/replace.pipe';
import { CommonModule } from '@angular/common';
import { StarComponent } from '../star/star.component';

@NgModule({
    declarations: [
       CourseListComponent,
       CoursesInfoComponent, 
       ReplacePipe,
       StarComponent,
    ], 
    imports: [
        CommonModule,
        FormsModule,
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