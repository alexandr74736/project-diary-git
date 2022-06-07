import { Component, OnInit } from '@angular/core';
// import { error } from 'console';
// import { title } from 'process';
import { FormGroup, FormControl, Validators, } from '@angular/forms';
import { LocalStorage } from '../local-storage.service';


import { Task, TasksService  } from '../tasks.service'; //test



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {

  myForm
  getItem
  setItem

  key
  value

  //test
  form: FormGroup

  constructor(private service: LocalStorage,
              private tasksService: TasksService) {}

  ngOnInit() {
      this.myForm = this.service.myForm
      this.getItem = this.service.getItem
      this.setItem = this.service.setItem
      //test
      this.form = new FormGroup({
        title: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required)
      })
  }

  //test
  submitTest() {
    const {title} = this.form.value
    const {description} = this.form.value
    console.log(title)
    
    const task: Task = {
      title,
      description,
    };

    this.tasksService.create(task).subscribe( 
      task => { 
        console.log('New task', task)
        this.form.reset() },
      err => console.log(err)),
      () => console.log('HTTP request completed.')
  }

  submit(){
    this.service.collisionCheck();
  }

  clear() {
    localStorage.clear();
  }
}
