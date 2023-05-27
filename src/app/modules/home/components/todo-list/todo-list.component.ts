import { Component } from '@angular/core';
import { Model } from '../../model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  public taskList: Array<Model> = [
    { task: "Minha Nova task", checked: true},
    { task: "Minha Nova task 2", checked: true}
  ]
public deleteItemTaskList(event:number){
  this.taskList.splice(event, 1)
}

public deleteAllTask(){
  const confirm = window.confirm('Você tem certeza que deseja deletar tudo?')
  if(confirm){
    this.taskList = [];
  }
}


}
