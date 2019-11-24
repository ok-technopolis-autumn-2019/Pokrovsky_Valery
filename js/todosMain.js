import {TodosAdd} from "./components/TodosAdd";
import {TodosItemList} from "./components/TodosItemList";
import {todosModel} from "./models/todosModel";
import {TodosActions} from "./components/TodosActions";

window.addEventListener("DOMContentLoaded", function () {
    new TodosAdd();
    new TodosItemList(todosModel);
    new TodosActions(todosModel);
});

