import React, { useState } from "react";
import { ToDoDataProp } from "../../Types/ToDoItemProp";
import { ItemList } from "../ItemList/ItemList";
import { SearchPanel } from "../SearhPanel/SearchPanel";
import {NewTodoDialog} from "../NewTodoDialog"

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  selectToDoItems,
  deleteSelectedItems,
} from "../../features/todoitems/todolistSlice";
import { Button } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';

interface FilteredToDoState {
  filterText: string;
}

export function FilteredToDoList() {
  const [addNewItemOpen, setAddNewItemOpen] = React.useState(false);
  const [filterText, setFilterText] = useState("");
  const dispatch = useAppDispatch();

  const handleSearchTextChange = (newFilterText: string) => {
    setFilterText(newFilterText);
  };

  const globalItemList = useAppSelector(selectToDoItems);
  var filteredToDoList;
  if (filterText.length === 0) {
    filteredToDoList = globalItemList.todoitems;
  } else {
    filteredToDoList = globalItemList.todoitems.filter((item) =>
      item.description.includes(filterText)
    );
  }

  return (
    <div>
      <SearchPanel
        onFilterStringChanged={handleSearchTextChange}
        filterText={filterText}
      />
      <Button
         variant="outlined"
         color="primary"
         onClick={()=> setAddNewItemOpen(!addNewItemOpen) }>
        Add new item.
      </Button>
      <NewTodoDialog open={addNewItemOpen} onClose={()=> setAddNewItemOpen(!addNewItemOpen) }/>
      <ItemList ToDoList={filteredToDoList}></ItemList>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<DeleteIcon />}
        onClick={(e:any) => dispatch(deleteSelectedItems())}
      >
        Delete selected items
      </Button>
    </div>
  );
}
