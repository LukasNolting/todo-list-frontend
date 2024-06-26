import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodoServiceService {
  constructor(private http: HttpClient) {}

  loadTodoService() {
    const url = environment.baseUrl + '/todos/';
    return lastValueFrom(this.http.get(url));
  }

  createTodoService(todo: any) {
    const url = environment.baseUrl + '/todos/';
    return lastValueFrom(this.http.post(url, todo));
  }

  deleteTodoService(id: number) {
    const url = environment.baseUrl + '/todos/' + id;
    return lastValueFrom(this.http.delete(url));
  }

  updateTodoService(todo: any) {
    const url = environment.baseUrl + '/todos/' + todo.id;
    return lastValueFrom(this.http.put(url, todo));
  }
}
