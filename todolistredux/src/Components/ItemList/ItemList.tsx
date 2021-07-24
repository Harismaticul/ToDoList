import React from 'react';
import { ToDoDataProp } from "../../Types/ToDoItemProp";
import {ToDoItem} from '../../Components/Item/ToDoItem';


export interface ItemListProps{
    ToDoList: ToDoDataProp[]
}

export class ItemList extends React.Component<ItemListProps, {}>{
    constructor(props: ItemListProps){
        super(props);
    }

    render() {
        return (
            this.props.ToDoList.map((item:ToDoDataProp) => <ToDoItem 
                                key={item.todoitemid}
                                todoitemid={item.todoitemid}
                                state={item.state}
                                description={item.description} 
                                created={item.created}
                                isSelectedForDelete ={item.isSelectedForDelete}  />));
    };
}
