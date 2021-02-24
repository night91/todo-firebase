import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input, List } from "@material-ui/core";
import Todo from './components/Todo'
import firebase from 'firebase/app';
import 'firebase/firestore';
import db from './firebase';

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
    })
  }, []);

  const addTodo = (event) => {
    event.preventDefault()
    setInput('')
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
  }

  return (
    <div className="app">
      <div className='app__todoContainer'>
        <form>
          <FormControl>
            <InputLabel>Write a Todo</InputLabel>
            <Input value={input} onChange={event => (setInput(event.target.value))} />
          </FormControl>

          <Button type='submit' disabled={!input} onClick={addTodo} variant='contained' color='primary'>
            Add Todo
          </Button>
        </form>

        <List className='todo__list'>
          {
            todos.map(todo => (
              <Todo id={todo.id} text={todo.todo} />
            ))
          }
        </List>
      </div>
    </div>
  );
}

export default App;
