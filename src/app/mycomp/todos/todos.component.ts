import { Component } from '@angular/core';
import { Todos } from 'src/app/Todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos!: Todos[];
  constructor(){
    this.todos=[{
      sno:1,
      title:"first todo",
      desc:"description",
      active:true
    },
    {
      sno:2,
      title:"Second todo",
      desc:"description",
      active:true
    },
    {
      sno:3,
      title:"Third todo",
      desc:"description",
      active:true
    }]
  }
  deleteTodo(todo:Todos){
   const index=this.todos.indexOf(todo)
   this.todos.splice(index,1)
  }
  addTodo(todo:Todos){
    this.todos.push(todo)
   }
}
