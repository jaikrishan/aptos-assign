import { Component, OnInit } from '@angular/core';
import { Options } from './model/option.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  selectedoption(event: Options) {
    console.log(`selected option is ${event.label}`)
  }
  
}
