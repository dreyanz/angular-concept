import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  customerForm: FormGroup;
  customer: any;
  message: string = ""
    constructor(private formBuilder: FormBuilder) {
      this.customer = {
        firstName: 'Tina Reactive',
        password: 'password'
    };

    this.customerForm = this.formBuilder.group({
        firstName: [this.customer.firstName, Validators.required ],
        password : [this.customer.password, Validators.required]
    });
     }

    ngOnInit() { 
      
    }

    onSubmit(form: FormGroup) {
      this.message = 'You typed: username ' + form.controls['firstName'].value + " " +  form.controls['password'].value;
    }
}
