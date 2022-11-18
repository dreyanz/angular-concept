import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from '../api.service';
import { UserInfo } from '../model/sample-model';

@Component({
  selector: 'component-one',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class Comp1Component implements OnInit {

  title = "My component one"

  userList : UserInfo[] = []
  
  constructor(private apiService : ApiService) { }

  ngOnInit(): void {
  }

  btnClick(data : string) {
    alert(data);
  } 

  callGetApi(){
    this.apiService.getWithReturnedValue().subscribe( data => {
      this.userList = data.data
      console.log("user list count "+this.userList.length)
    })
  }

}
