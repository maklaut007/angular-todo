import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Todo } from '../models/Todo';
@Component({
  	selector: 'app-todo-item',
 	templateUrl: './todo-item.component.html',
  	styleUrls: ['./todo-item.component.sass']
})
export class TodoItemComponent implements OnInit {
	@Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo>= new EventEmitter();

  	constructor() { }

  	ngOnInit() {
  	}
  	setClasses(){
  		let classes = {
  			todo: true,
  			"is-complete": !this.todo.completed
  		}
  	return classes;
  	}
  	onToggle(todo){
  		todo.completed = !todo.completed
  	}
  	onDelete(todo:Todo){
      this.deleteTodo.emit(todo);
  	}
}	
