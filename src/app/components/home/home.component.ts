import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  parentVariable:string = "Data from Parent";


dataFromChild:string = '';
  getData(data:string){
    console.log(data);
    this.dataFromChild = data;
  }



  child1Color: string = '';
  getColor(s : string){
    this.child1Color = s;
  }
}
