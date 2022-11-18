import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CreateUser } from '../model/sample-model';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent {

  title = 'my-app';
  itemList = JSON.stringify(["item 1", "item 2", "item 3"])

  constructor(private apiService : ApiService) {
    
  }

  eventFromChild(data : string){
    alert("Event coming from child triggered. "+data)
    this.apiService.log(data)
  }

  createUser(){

    let userData = new CreateUser()
    userData.name = "test name"
    userData.job = "test job"

    this.apiService.createUser(userData).subscribe( data => {
      console.log(" Create user : " + data.name + " " + data.job)
    })
  }

  updateUser(){

    let userData = new CreateUser()
    userData.name = "test name update"
    userData.job = "test job update"

    this.apiService.updateData(userData)
  }

  deleteUser() {
    this.apiService.daleteData()
  }

}
