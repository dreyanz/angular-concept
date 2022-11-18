import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ApiService } from './api.service';
import { CreateUser, UserInfo } from './model/sample-model';

describe('ApiService', () => {
  let service: ApiService;
  const httpClientSpy = jasmine.createSpyObj('HttpClient', ['post', 'get']);
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide : HttpClient, useValue : httpClientSpy }, HttpHandler]
    });
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call correct get api method', () => {
    let mockUserInfo = new UserInfo()
    mockUserInfo.avatar = "test avatar"
    mockUserInfo.first_name = "test first-name"
    mockUserInfo.last_name = "test last name"
    httpClientSpy.post.and.returnValue(of(mockUserInfo))
    httpClientSpy.get.and.returnValue(of({ status: 200, data: {}}))
    service.get().subscribe(data => {
      console.log(" response value " + JSON.stringify(data))
      expect(data.status).toBe(200)
    })
    let createUser = new CreateUser()
    service.createUser(createUser).subscribe( data => {
      console.log("post mock result "+JSON.stringify(data))
      expect(data.first_name).toBe(mockUserInfo.first_name)
    })
  })

});
