
import { autorun } from 'mobx';
import {cleanAllTodosAction} from "../actions/cleanAllTodosAction";
import {setTodosFilterAction} from "./setTodosFilterAction";


export class TodosActions {

    constructor(todosModel) {
        this._bindEvents();

        autorun(() => {
            const counter = document.getElementById('todos-counter');
            const itemsCount = todosModel.items.length;
            const filteredItemsCount = todosModel.filteredItems.length;
            const newCounterString = `${filteredItemsCount}/${itemsCount}`;
            counter.innerText = newCounterString;
        });
    }

    _bindEvents() {
        document.getElementById('todos-all')
            .addEventListener('click', this._onFilter.bind(this));

        document.getElementById('todos-active')
            .addEventListener('click', this._onFilter.bind(this));

        document.getElementById('todos-completed')
            .addEventListener('click', this._onFilter.bind(this));

        document.getElementById('todos__all-completed')
            .addEventListener('click',this._onCleanAll.bind(this));
    }

    _onFilter(e) {
        const button = e.target;
        const filterValue = button.getAttribute('value');
        setTodosFilterAction(filterValue);
    }

    _onCleanAll() {
        cleanAllTodosAction();
    }



}