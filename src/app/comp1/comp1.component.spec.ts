import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1Component } from './comp1.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Type } from '@angular/core';
import { ApiData, UserInfo } from '../model/sample-model';
import { ApiService } from '../api.service';

describe('Comp1Component', () => {
  let component: Comp1Component;
  let fixture: ComponentFixture<Comp1Component>;
  let httpMock: HttpTestingController;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Comp1Component ],
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Comp1Component);
    component = fixture.componentInstance;
    httpMock = fixture.debugElement.injector.get<HttpTestingController>(HttpTestingController as Type<HttpTestingController>);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('test api call', () => {

    let apiData = new ApiData()


    let userInfo = new UserInfo()
    userInfo.avatar = "test avatar"
    userInfo.email = "email"
    userInfo.first_name = "first_name"
    userInfo.last_name = "last-name"

    apiData.data = [userInfo]

    let changeReutrnedValue = { data : apiData}

    component.callGetApi()
    const req = httpMock.expectOne('https://reqres.in/api/users?page=2');
    req.flush(apiData);

    expect(req.request.method).toBe('GET');
    console.log("app user list "+component.userList)
    expect(component.userList.length).toBe(1)
    //expect(component.userList[0].first_name).toEqual("first_name");
  })

});
