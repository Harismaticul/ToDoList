import React from "react";
import { ToDoDataProp } from "../Types/ToDoItemProp";
import { SearchPanel } from "./SearchPanel";
import { ToDoItemList } from "./ToDoItemList";

interface FilteredToDoListProps{
    ToDoList:ToDoDataProp[]
}

interface FilteredToDoListState{
    FilterText:string
}

export class FilteredToDoList extends React.Component<FilteredToDoListProps, FilteredToDoListState>{

    constructor(props:FilteredToDoListProps){
        super(props);
        this.state = {FilterText:""};
        this.handleSearchTextChanged = this.handleSearchTextChanged.bind(this);
    }

    handleSearchTextChanged(newFilterText:string){
        this.setState({FilterText:newFilterText});
    }

    render(){
        var filteredToDoList;
        if (this.state.FilterText.length === 0){
            filteredToDoList = this.props.ToDoList;
        }
        else{
            filteredToDoList = this.props.ToDoList.filter(item => item.description.includes(this.state.FilterText));
        }

        return(
            <div>
                <SearchPanel filterText={this.state.FilterText} onFilterStringChanged={this.handleSearchTextChanged}/>
                <ToDoItemList ToDoItems={filteredToDoList}/>
            </div>
        );
    }
}