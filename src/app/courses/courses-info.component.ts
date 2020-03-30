import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from './course.service';
import { Course } from './course';

@Component({
    templateUrl: './courses-info.component.html'
})
export class CoursesInfoComponent implements OnInit {

    course: Course;

    constructor(
        private activatedRoute: ActivatedRoute, 
        private courseSevice: CourseService) {}
    
    ngOnInit(): void {
        this.courseSevice.retrieveById(+this.activatedRoute.snapshot.paramMap
        .get('id')).subscribe({
            next: course => this.course = course,
            error: err => console.log('Error', err)
        });
    }

    save(): void {
        this.courseSevice.save(this.course).subscribe({
            next: course => console.log('Saved with success', course),
            error: err => console.log('Error', err)
        });
    }  
}