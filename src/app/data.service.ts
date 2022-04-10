import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  setTask(time: string, task: string) {
    localStorage.setItem(time, task);
  }
  deleteTask(id: string) {
    localStorage.removeItem(id)
  }
  getAllTasks() {
    var keys = Object.keys(localStorage);
    keys.sort();
    var tasks = [];
    for (var i = 0; i < keys.length; i++) {
      tasks.push(JSON.parse(<string>localStorage.getItem(keys[i])));
    }
    return tasks;
  }
}
