import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { LocalStorage } from '../local-storage.service';

@Component({
  selector: 'task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit {

  id: string;
  key: string;
  name: string;
  value: string;

  constructor(
    private route: ActivatedRoute,
    private service: LocalStorage
    ) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
    this.key = this.id;
    this.value = this.service.getItemByKey(this.key);
  }

}
