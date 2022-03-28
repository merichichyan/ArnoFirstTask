import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
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
