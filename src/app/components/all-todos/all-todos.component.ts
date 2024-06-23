import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { lastValueFrom } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-todos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-todos.component.html',
  styleUrl: './all-todos.component.scss'
})
export class AllTodosComponent implements OnInit {
  
  todos:any = [];
  error: string = '';
  
  constructor(private http: HttpClient) { }
  
  
  async ngOnInit() {
    try{
    this.todos = await this.loadTodos();
    console.log(this.todos);  
    }catch(e){
      this.error = 'Could not load todos';
      
    }  
  }

  loadTodos() {
    const url =  environment.baseUrl + '/todos/';
    return lastValueFrom(this.http.get(url));
  }

}
