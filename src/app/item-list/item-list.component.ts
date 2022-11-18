import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  @Input() list = ''
  @Output() eventOutput = new EventEmitter()

  arrayItem = []

  shouldShow = false

  constructor() { }

  ngOnInit(): void {

    if (this.list != "") {

      console.log("list value " + this.list)
      console.log("list array " + JSON.parse(this.list))
    
      this.arrayItem = JSON.parse(this.list)
    }
    
  }

  sendDataToParent(){

    this.eventOutput.emit('sample data from child')
  
  }

}
