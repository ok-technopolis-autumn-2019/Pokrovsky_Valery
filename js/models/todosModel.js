import {observable} from "mobx";
import {tososFilterStates as todosFiltersStates} from "./tososFiltesStates";

export const todosModel = observable({
    filter: "ALL",
    items: [],
    get filteredItems() {
        return this.items
            .filter(item => {
                switch (this.filter) {
                    case todosFiltersStates.ALL:
                        return true;
                    case todosFiltersStates.READY:
                        return item.isDone;
                    case todosFiltersStates.NOT_READY:
                        return !item.isDone;
                }
            });
    }});