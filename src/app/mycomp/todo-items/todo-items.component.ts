import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todos } from 'src/app/Todos';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent {
  @Input()
  todo!: Todos;
  @Output() todoDelete:EventEmitter<Todos>=new EventEmitter();

  onClick(todo:Todos){
   this.todoDelete.emit(todo)
  }
}
