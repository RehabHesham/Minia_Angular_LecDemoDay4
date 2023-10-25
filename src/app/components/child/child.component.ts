import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  

@Input()
  childVariable:string = "";



  color : string = "red";

  @Output() childtoParent: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    this.childtoParent.emit(this.color);
  }
}
