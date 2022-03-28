import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  animations: [
    trigger('activePassive', [
      state('passive', style({
        opacity: 0.8,
        backgroundColor: '#E1E1E1'
      })),
      transition('active => passive', [
        animate('1s')
      ]),
      transition('passive => active', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class FormComponent implements OnInit {

  showPanel = false;
  task: string = ""
  tasks: string[] = []
  constructor() { }

  ngOnInit(): void {
    
  }

  addTask() {
    this.tasks.push(this.task)
    this.task = ""
  }

  removeTask(i: number) {
    this.tasks.splice(i, 1)
  }
}
