import { Component } from '@angular/core';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent {


  stdName:string = '';
  stdAge:number = 0;


  isValidName(){
    return this.stdName != '' && this.stdName.length > 3
  }

  get isValidAge(){
    return this.stdAge >=18 && this.stdAge<=35
  }
}
