import {todosModel} from "../models/todosModel";

export function removeTodoItemAction(id) {
    todosModel.items = todosModel.items.filter(item => item.id !== id);
}