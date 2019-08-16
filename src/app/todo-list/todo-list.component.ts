import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todo';
import { TodoService} from '../services/todo.service';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent implements OnInit {
	todos:Todo[];
  constructor(private todoService:TodoService) { }

  ngOnInit() {
  	this.todos = this.todoService.getTodos()
  }
  deleteTodo(todo:Todo){
  	this.todos= this.todos.filter(t => t.id !==todo.id)
  	
  }
  addTodo(todo:Todo){
    this.todos.push(todo)
  }
}
