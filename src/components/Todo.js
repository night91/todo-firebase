import React from 'react';
import { useState, useEffect } from 'react'
import { Button, ListItem, ListItemText, Dialog, DialogContent, TextField, DialogActions } from "@material-ui/core";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import EditIcon from '@material-ui/icons/Edit';
import db from '../firebase'

const Todo = ({ id, text }) => {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')

  const openEdit = () => {
    setInput(text)
    setOpen(true)
  }

  const updateTodo = () => {
    db.collection('todos').doc(id).update({todo: input})
    setOpen(false)
  }

  return (
    <ListItem>git
      <Dialog open={open} onClose={e => setOpen(false)}>
        <DialogContent>
          <TextField
            value={input}
            onChange={e => (setInput(e.target.value))}
            autoFocus
            margin="dense"
            id={id}
            label="Todo"
            type="text"
            fullWidth
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={updateTodo} color="primary">
            Edit
          </Button>
        </DialogActions>
      </Dialog>

      <ListItemText primary={text} secondary='Dummy deadline...' />

      <EditIcon onClick={openEdit} />
      <DeleteForeverIcon onClick={e => db.collection('todos').doc(id).delete()} />
    </ListItem>
  );
}

export default Todo;
