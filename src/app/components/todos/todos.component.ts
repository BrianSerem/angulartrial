import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todos';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    console.log(this.todoService.getTodos())

  this.todoService.getTodos().subscribe(todos => {
    this.todos = todos;
  }, error => {console.log(error.message)});
  } 
  
  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter(t => t.title !== todo.title);
    this.todoService.deleteTodo(todo).subscribe(todos => {
      console.log(todo.title, 'has been deleted')
    })
  }

  addTodo(todo: any) {
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo)
    })
  }

}
