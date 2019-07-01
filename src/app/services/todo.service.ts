import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/todos';
import { Observable } from 'rxjs';



const httpOptions = { 
   headers: new HttpHeaders({
      'Content-Type': 'application/json'
   }) 
}

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  
  selected = 'clean my room';
  todosUrl: string = 'https://jsonplaceholder.typicode.com/todos'
  limit: string = '?_limit=6'

  constructor(private http:HttpClient) { }
  
  // get todos
  getTodos ():Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}/${this.limit}`);
  }

  // toggle completed
  toggleCompleted (todo: Todo):Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);

  }

  //delete todo
  deleteTodo (todo: Todo):Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete(url, httpOptions);

  }

  //add todo
  addTodo (todo: any):Observable<any> {
    return this.http.post(this.todosUrl, todo, httpOptions);

  }
}
