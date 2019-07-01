import { Component, OnInit, Input, Output  } from '@angular/core';
import { Todo } from '../../models/todos';
import { TodoService } from '../../services/todo.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService:TodoService) { }

  ngOnInit() {
  }

  setClasses (){
    let classes = {
      todo: true,
      'is-complete': this.todo.completed,
    }

    return classes;
  }

  onToggle (todo) {
    todo.completed = !todo.completed
    this.todoService.toggleCompleted(todo).subscribe(todo => {
      console.log(todo)
    })
  }

  onDelete (todo: Todo) {
    // todo.completed = !todo.completed
    console.log('deleted')
    this.deleteTodo.emit(todo)
    
  }

}
