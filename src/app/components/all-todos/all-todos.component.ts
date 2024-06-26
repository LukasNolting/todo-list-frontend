import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoServiceService } from '../../services/todo-service.service';

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
  
  constructor(public ts: TodoServiceService) { }
  
  
  async ngOnInit() {
    try{
    this.todos = await this.ts.loadTodoService();
    console.log(this.todos);  
    }catch(e){
      this.error = 'Could not load todos';
      
    }  
  }

  createTodo(){
    let todo = {
      title: 'New Todo',
      description: 'New Todo Description',
      checked: false
    }

    this.ts.createTodoService(todo);
  }



}