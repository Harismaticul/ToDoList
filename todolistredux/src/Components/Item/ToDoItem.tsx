import { ToDoDataProp } from "../../Types/ToDoItemProp";
import { Card, Grid, Box, Typography, makeStyles, Button, Checkbox } from '@material-ui/core';
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  changeItemSelection,
} from "../../features/todoitems/todolistSlice";


export function ToDoItem(props:ToDoDataProp){

    const accordionStyle  = makeStyles((theme?: any) => ({
        root: {
          minWidth: 275,
        },
        bullet: {
          display: 'inline-block',
          margin: '0 2px',
          transform: 'scale(0.8)',
        },
        title: {
          fontSize: 14,
        },
        pos: {
          marginBottom: 12,
        },
      }));

    const classes = accordionStyle();
    
    const dispatch = useAppDispatch();

    return (
     <Card raised={true} key={props.todoitemid} color="primary" variant="outlined">
         <Box border={1} borderRadius={12} m={1} p={1} color="primary">
         <Checkbox
            checked={props.isSelectedForDelete}
            onChange={(e:React.FormEvent<HTMLInputElement>) => dispatch(changeItemSelection({itemid:props.todoitemid, isSelected:e.currentTarget.checked}))}
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
         <Grid container xs={12} color="primary">
            <Grid item xs={3}>
                <Typography variant="h5" component="h2">
                Description: 
                </Typography>
            </Grid>
            <Grid item xs={9}>
                {props.description}
            </Grid>
            <Grid item xs={3}>
                State:
            </Grid>
            <Grid xs={3}>
                {props.state}
            </Grid>
            <Grid xs={3}>
            Created at:
            </Grid>
            <Grid xs={3}>
                {props.created}
            </Grid>
        </Grid>
        </Box>
     </Card>
 );
}

function useStyles() {
    throw new Error("Function not implemented.");
}
