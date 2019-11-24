import {todosModel} from "../models/todosModel";

let idsCounter = 0;

export function addTodoAction(value){
    todosModel.items.push({
        id: idsCounter++,
        value: value.text,
        isDone: false
    })
}