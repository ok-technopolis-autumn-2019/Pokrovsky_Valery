import {autorun} from "mobx";
import {TodosItem} from "./TodosItem";

export class TodosItemList{
    constructor(todosModel) {
        this._list = document.getElementById("todos-items")

        autorun(() => {
            const df = document.createDocumentFragment();
            todosModel.filteredItems.forEach(item => {
                const newItem = new TodosItem(item);
                df.appendChild(newItem.root);
            });
            this._list.innerHTML = '';
            this._list.appendChild(df);
        });
    }
}