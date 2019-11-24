import {addTodoAction} from "../actions/addTodoAction";

export class TodosAdd{
    constructor(){
        const form = document.querySelector("#todos-add");
        form.addEventListener("submit", this._onSubmit.bind(this).bind(this));

    }

    _onSubmit(event){
        event.preventDefault();
        const inputElement = document.getElementById("todos__add-input");
        const addValue = inputElement.value;
        if (addValue !== ""){
            addTodoAction({
                text: addValue
        })
            inputElement.value = '';
        }
    }


}