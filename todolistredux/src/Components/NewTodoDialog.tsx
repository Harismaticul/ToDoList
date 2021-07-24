import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import {ToDoDataProp} from "../Types/ToDoItemProp";
import {CreateNewItemData} from '../features/todoitems/todolistSlice'
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { addNewItem } from "../features/todoitems/todolistSlice";
import { TextField } from '@material-ui/core';

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

export interface NewTodoDialogProps {
  open: boolean;
  onClose: () => void;
}

export function NewTodoDialog(props: NewTodoDialogProps) {
  const classes = useStyles();
  const open = props.open;
  const onClose = props.onClose;
  const dispatch = useAppDispatch();

  const [itemUnderConstruction, setItemUnderConstruction] = useState({description:""});

  const handleClose = () => {
    
  };

  const handleListItemClick = (value: string) => {
    dispatch(addNewItem(itemUnderConstruction.description));
    onClose();
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Add new todo</DialogTitle>
      <TextField id="outlined-basic" label="Add new item description" variant="outlined"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>setItemUnderConstruction({description:e.currentTarget.value}) } />
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleListItemClick(itemUnderConstruction.description)}
      >Add</Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => onClose()}
      >Cancel</Button>
    </Dialog>
  );
}