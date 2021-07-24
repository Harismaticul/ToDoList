import React from "react";
import { ToDoDataProp } from "../Types/ToDoItemProp";
import { ToDoItem } from "./ToDoItem";

export interface ToDoItemListProps{
    ToDoItems:ToDoDataProp[]
}

export class ToDoItemList extends React.Component<ToDoItemListProps> {

    constructor(props:ToDoItemListProps){
        super(props);
    }

    render(){
        return(
            this.props.ToDoItems.map(
                (itemProp:ToDoDataProp) =>
                <ToDoItem key={itemProp.todoitemid} todoitemid={itemProp.todoitemid} created={itemProp.created} description={itemProp.description}
                 state={itemProp.state} isSelectedForDelete={itemProp.isSelectedForDelete}/>
                 )
            );
    }
}