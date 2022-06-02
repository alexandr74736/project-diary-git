import { Component, OnInit } from '@angular/core';
import { LocalStorage } from '../local-storage.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  key
  value
  getItem
  setItem

  constructor(private service: LocalStorage) {}

  ngOnInit() {
    this.getItem = this.service.getItem
    this.setItem = this.service.setItem
    
  } 


  getItemByKey() {
    this.key = this.getItem.value.key;
    this.value = this.service.getItemByKey(this.getItem.value.key);
    return this.value

  }

  setItemByKey() {
    this.service.setItemByKey(this.setItem.value.key,this.setItem.value.value);
  }
}
