import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../../services/todo.service';

import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  //Set Dynamic Classes

  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    };
    return classes;
  }
  onToggle(todo) {
    // console.log('toggle');
    //Toggle in UI
    todo.completed = !todo.completed;
    //Toggle on Server
    this.todoService
      .toggleCompleted(todo)
      .subscribe(todo => console.log('THIS IS THE TODO', todo));
  }

  onDelete(todo) {
    console.log('delete');
  }
}
