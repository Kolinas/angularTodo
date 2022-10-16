import { Component, OnInit } from '@angular/core';

interface ToDo {
    task: string;
    isCheck: boolean;
}

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})

export class CounterComponent {

    counter: number = 0
    value: string = ''
    hide: boolean = true

    toDolist: ToDo[] = []
    newToDo: string = ''


    // ngOnInit() {
    //     fetch("https://swapi.dev/api/people/")
    //     .then(response => response.json())
    //     .then(res => this.result = res.results);
    // }

    addnewToDo() {
        if (this.newToDo) {
            this.toDolist.push({task: this.newToDo, isCheck: false})
            this.newToDo = ''
        }
    }

    deleteToDo(i:number){
        this.toDolist.splice(i, 1)
    }

    clearToDoList(){
        this.toDolist.length = 0
    }

    toggle(item: ToDo){
        item.isCheck = ! item.isCheck
    }

    get finishedTasks() {
        return this.toDolist.filter(toDo => toDo.isCheck).length
    }

    get activeTasks() {
        return this.toDolist.filter(toDo => !toDo.isCheck).length
    }


    incr() {
      this.counter++
  
    }
    decr() {
        this.counter--
    }

    rnd() {
        this.counter = this.counter * Math.floor(Math.random() * 10)
    }

    setValue(event: Event) {
        this.value = (event.target as HTMLInputElement).value;
    }
}
