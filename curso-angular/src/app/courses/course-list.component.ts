import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
})
export class CourseListComponent implements OnInit{

    courses: Course[] = [];

    ngOnInit() : void{
        this.courses  = [{
            id: 1,
            name: 'Customer Experience em 5 passos',
            imageUrl: './assets/images/cx.png',
            price:200,
            code: 'CX1-PRIMPAS',
            duration: 120,
            rating: 4.7,
            releaseDate: '2 de Dezembro de 2021',
        },
        {
            id: 2,
            name: 'Como detonar no Geoguess',
            imageUrl: './assets/images/geoguessr.png',
            price:50,
            code: 'GEO-DETONA',
            duration: 60,
            rating: 3.9,
            releaseDate: '4 de Dezembro de 2021',
        }]
    }


}