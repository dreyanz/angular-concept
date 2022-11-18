import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { ReactiveFormComponent } from './reactive-form.component';

describe('ReactiveFormComponent', () => {
  let component: ReactiveFormComponent;
  let fixture: ComponentFixture<ReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormComponent ],
      providers: [FormBuilder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormComponent);
    component = fixture.componentInstance;
    component.ngOnInit()
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.heroForm.valid).toBeFalsy()
  })

  it('email is valid', () => {
    let error : any = {}
    let email = component.heroForm.controls["email"]
    email.setValue("test@gidl.com")
    error = email.errors || {}
    expect(error['required']).toBeFalsy()
  })

  it('email is invalid format', () => {
    let error : any = {}
    let email = component.heroForm.controls["email"]
    email.setValue("test")
    error = email.errors || {}
    expect(error['pattern']).toBeTruthy()
   
  })

  it('email is invalid no value', () => {
    let error : any = {}
    let email = component.heroForm.controls["email"]
    email.setValue("")
    error = email.errors || {}
    expect(error['required']).toBeTruthy()
   
  })


});
