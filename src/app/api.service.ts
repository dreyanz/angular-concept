import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiData, CreateUser, UserInfo } from './model/sample-model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient : HttpClient) { }

  log(message: string) {
    console.log("message is "+message);
  }

  get() : Observable<any>{
    return this.httpClient.get("https://reqres.in/api/users?page=2")
  }

  getWithReturnedValue() : Observable<ApiData>  {
    return this.httpClient.get<ApiData>("https://reqres.in/api/users?page=2")
  }

  createUser(data : CreateUser) : Observable<UserInfo> {

    let headers = new HttpHeaders({
      'Content-Type' : "application/json"
      
    })

    return this.httpClient.post<UserInfo>("https://reqres.in/api/users", data, { headers: headers})
  }

  updateData(data : CreateUser) {
    this.httpClient.put("https://reqres.in/api/users/2", data).subscribe( data => {
      console.log("update request respone "+  JSON.stringify(data))
    })
  }

  daleteData(){
    this.httpClient.delete("https://reqres.in/api/users/2").subscribe( data => {
      console.log(" delete request response "+JSON.stringify(data))
    })
  }

}
