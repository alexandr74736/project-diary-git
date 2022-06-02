import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent  {

array
items: object

constructor() {
  this.items = JSON.parse(localStorage.getItem('Cases'));
            
        if ((this.items === undefined) || (this.items === null)) {
            this.array = []
        } else {
            this.array = Object.entries(this.items)
        }
  }
}
