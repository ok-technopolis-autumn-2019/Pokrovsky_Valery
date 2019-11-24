import {todosModel} from "../models/todosModel";

export function setTodosFilterAction(state) {
    todosModel.filter = state;
}