import React, {useState, useEffect, useReducer} from 'react';
import { Container } from '@material-ui/core';
import {Context} from './context';
import reducer from './reducer';
import AddTaskModal from './addTask';
import TaskList from './taskList';
import Toolbar from './toolbar';


export default function App() {
  const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('todos')));
  const [todos, setTodos] = useState(state);
  const [task, setTask] = useState({name: '', description: ''});
  const [open, setOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state));
    setTodos(state);
  }, [state]);

  const handleClickAdd = () => {
    if (task.name) {
      dispatch({
        type: 'add',
        payload: task
      })
      setTask({name: '', description: ''});
      setOpen(false);
    }
  };

  const handleClickClose = () => {
    setTask({name: '', description: ''});
    setOpen(false);
  }

  const handleClickModal = () => {
    setOpen(true);
  }

  const handleChangeSearchInput = (event) => {
    const todosFilter = state.filter(item => item.title.includes(event.target.value));
    setTodos(todosFilter);
  }
  
  return (
    <Context.Provider value={{dispatch}}>
      <Container>
        <Toolbar onClick={handleClickModal} onChangeSearch={handleChangeSearchInput}/>
        <AddTaskModal
          task={task}
          setTask={setTask}
          open={open}
          onClose={handleClickClose}
          addTask={handleClickAdd}
        />
        <TaskList tasks = {todos} />
      </Container>
    </Context.Provider>
  );
}