import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ToDoState } from './Types/ToDoItemProp';
import {FilteredToDoList} from './Components/FilteredToDoList/FilteredToDoList';
import {MuiThemeProvider} from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });

  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
      <FilteredToDoList />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
