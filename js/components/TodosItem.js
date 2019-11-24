import {renderStringToHTML} from "../help/render StringToHTML";
import {changeTodoItemDoneStatusAction} from "../actions/changeTodoItemDoneStatusAction";
import {removeTodoItemAction} from "../actions/removeTodoItemAction";

export class TodosItem{
    constructor(itemData) {
        this._itemData = itemData;
        this.root = this._renderDom(itemData);
        this.root.querySelector('.todos__item-checkbox-false')
            .addEventListener('change', this._mangeReadyArea.bind(this));
        this.root.querySelector('.todos__item-delete')
            .addEventListener('click', this._deleteItem.bind(this));
    }

    _mangeReadyArea(e) {
        const checkbox = e.target;
        const isDone = checkbox.checked;
        changeTodoItemDoneStatusAction(this._itemData.id, isDone);
    }

    _deleteItem() {
        removeTodoItemAction(this._itemData.id);
    }

    _renderDom(itemData) {
        const resultHTML = `<div class="todos__item">
                  <input class="todos__item-checkbox-false" id="${itemData.id}" type="checkbox" ${itemData.isDone ? 'checked=""' : ''}
        aria-label="Mark todo as ${itemData.isDone ? 'unready' : 'ready'}" />
                  <label for="${itemData.id}" class="todos__item-checkbox">
                  </label>
                  <div contenteditable="true" class="todos__item-description todo-${itemData.isDone ? 'not-active"' : 'active'}">${itemData.value}</div>
                <button aria-label="todos__item" class="todos__item-delete"></button>
               </div>`;

        return renderStringToHTML(resultHTML);

    }
}