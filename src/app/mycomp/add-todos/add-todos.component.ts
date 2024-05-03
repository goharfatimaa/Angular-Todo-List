import { Component,EventEmitter,Output } from '@angular/core';
import { Todos } from 'src/app/Todos';

@Component({
  selector: 'app-add-todos',
  templateUrl: './add-todos.component.html',
  styleUrls: ['./add-todos.component.css']
})
export class AddTodosComponent {
 title!:string
 desc!: string;
 @Output() addTodo:EventEmitter<Todos>=new EventEmitter();

 onSubmit(){
  const todo:Todos={
    sno:5,
    title:this.title,
    desc:this.desc,
    active:true
  }
  this.addTodo.emit(todo)
 }
}
