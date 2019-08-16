import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }
  getTodos(){
  	return [
	  	{
	  		id: 1,
	  		text: '1',
	  		completed: true
	  	},
	  	{
	  		id: 2,
	  		text: '2',
	  		completed: false
	  	},
	  	{
	  		id: 3,
	  		text: '3',
	  		completed: true
	  	},
	  	{
	  		id: 4,
	  		text: '4',
	  		completed: false
	  	}
  	]
  }
}
