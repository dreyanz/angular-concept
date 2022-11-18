import { Component, ViewEncapsulation } from '@angular/core';
import { ApiService } from './api.service';
import { CreateUser } from './model/sample-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = "my-app"

}
