import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-taskview',
  templateUrl: './taskview.component.html',
  styleUrls: ['./taskview.component.css']
})
export class TaskviewComponent implements OnInit {
  public tasks = Array();
  title = 'ToDo With Angular!';

  constructor(private _dataService: DataService) {
  }

  ngOnInit(): void {
    this.tasks = this._dataService.getAllTasks();
  }

  updateTask(id: number, data: JSON) {
    this._dataService.setTask(`${id}`, JSON.stringify(data));


  }

  delTask(id: number) {
    this._dataService.deleteTask(`${id}`);
    this.ngOnInit();
    this.alert('Task Deleted Successfully!');

  }

  setTask(todo: string) {
    const task = {
      'todo': todo,
      'isEditing': false,
      'isCompleted': false,
      'time': Date.now()
    }
    this._dataService.setTask(`${Date.now()}`, JSON.stringify(task));
    this.alert('Task Added Successfully!');
    this.ngOnInit();
  }
  alert(msg: string) {
    var overlay = document.getElementsByClassName('overlay')[0]

    overlay.classList.add('visible');
    overlay.innerHTML = msg;
    setTimeout(() => {
      overlay.classList.remove('visible');
    }, 1500);

  }
}
