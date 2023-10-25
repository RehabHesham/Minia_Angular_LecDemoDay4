import { Component } from '@angular/core';
import { IStudent } from 'src/app/Interfaces/istudent';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {

  students: IStudent[] =[
    {name:'ali',address:'giza',school:'boys',age:17},
    {name:'mona',address:'cairo',school:'girls',age:16},
    {name:'ahmed',address:'giza',school:'boys',age:18},
    {name:'Noha',address:'giza',school:'girls',age:17},
  ]
}
