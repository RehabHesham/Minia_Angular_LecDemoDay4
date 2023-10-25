import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { IStudent } from 'src/app/Interfaces/istudent';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  


  myData:string = "Data from child";

  @Output()
  myEvent:EventEmitter<string> = new EventEmitter<string>();


  SendData(e:Event){
    console.log("send data");
    
    this.myEvent.emit(this.myData);
  }


  ngOnInit(): void {
    console.log("send data");
    
    this.myEvent.emit(this.myData);
  }




  @Input()color:string = '';
}
