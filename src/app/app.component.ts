import { Component } from '@angular/core';
     
@Component({
    selector: 'app-diary',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent { 
    colorBg = 'blue';

  onButtonClick($event: string): void {
    this.colorBg = $event;
  }
}