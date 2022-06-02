import { Component, OnInit } from '@angular/core';
import { LocalStorage } from '../local-storage.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {

  myForm
  getItem
  setItem
  // key
  // key0
  key
  value

  constructor(private service: LocalStorage) {}

  ngOnInit() {
      this.myForm = this.service.myForm
      this.getItem = this.service.getItem
      this.setItem = this.service.setItem
  }

  submit(){
    this.service.collisionCheck()
  }

  clear() {
    localStorage.clear();
  }
}
