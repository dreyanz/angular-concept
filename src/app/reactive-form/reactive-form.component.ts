import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Hero } from '../model/sample-model';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  heroForm: FormGroup;
  model: Hero; 
  submittedModel: Hero = new Hero(0, "", "", "")
  powers: string[];
  submitted: boolean = false;
  
  constructor(private formBuilder: FormBuilder) {
    this.model = new Hero(18, 'Dr IQ', 'Really Smart', 'Chuck Overstreet', '');
      
    this.powers = ['Really Smart', 'Super Flexible', 
                   'Hypersound', 'Weather Changer'];                     
                   
    this.heroForm = this.formBuilder.group({
      name:     [this.model.name, Validators.required],
      alterEgo: [this.model.alterEgo, Validators.required],
      email:    [this.model.email, [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]],
      power:    [this.model.power, Validators.required]
    });

    
  }
  
  ngOnInit() {
      console.log("ngOnInit executed")
      this.model = new Hero(18, '', '', '', '');
      
      this.powers = ['Really Smart', 'Super Flexible', 
                     'Hypersound', 'Weather Changer'];                     
                     
      this.heroForm = this.formBuilder.group({
        name:     [this.model.name, Validators.required],
        alterEgo: [this.model.alterEgo, Validators.required],
        email:    [this.model.email, [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]],
        power:    [this.model.power, Validators.required]
      });
  }

  onSubmit({ value, valid }: { value: Hero, valid: boolean }) {
    this.submitted = true;
    this.submittedModel = value;
  }
}
