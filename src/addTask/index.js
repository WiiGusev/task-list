import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Button }from "@material-ui/core";

export default function addTaskModal({ task, setTask, open, onClose, addTask}) {
    return (
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Добавить задачу</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Заполните форму для добавления задачи
          </DialogContentText>
          <div className="add-task">
            <TextField
              required
              className="add-task__field"
              variant="outlined"
              id="add-name-task" 
              label="Название задачи"
              value={task.name}
              onChange={event => setTask({ ...task, name: event.target.value})}
            />
            <TextField
              className="add-task__field"
              multiline
              variant="outlined"
              id="add-description-task" 
              label="Описание задачи"
              rowsMax="4"
              value={task.description}
              onChange={event => setTask({...task, description: event.target.value})} 
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button 
            className="add-task__button"
            color="primary" 
            onClick={onClose}
          >
            Отмена
          </Button>
          <Button 
            className="add-task__button"
            variant="contained" 
            color="primary" 
            onClick={addTask}
            disabled={!task.name}
          >
            Добавить задачу
          </Button>
        </DialogActions>
      </Dialog>
    )
};