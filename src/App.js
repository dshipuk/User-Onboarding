import './App.css'
import React, { useState } from 'react';
import Form from './Components/Form';
import schema from './validation/formSchema.js';
import * as yup from 'yup';
import axios from 'axios';

const initialFormValues = {
  username: '',
  password: '',
  email: '',
  tos: false
}

const initialFormErrors = {
  username: '',
  password: '',
  email: '',
  tos: ''
}


function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [users, setUsers] = useState([]);

  const validate  = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
      .finally(() => setFormValues(initialFormValues))
  }

  const onChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value })
  }

  const onSubmit = () => {
    axios.post('https://reqres.in/api/users', formValues)
      .then(res => {
        setUsers([ res.data, ...users ])
      })
      .catch(err => console.error(err))
  }

  return(
    <div className='App'>
      <Form 
        values={formValues}
        change={onChange}
        errors={formErrors}
        submit={onSubmit}
      />
      {users.map( (user, index) => {
        return(
        <div key={index}>
          <p>{user.createdAt}</p>
          <p>{user.email}</p>
        </div>
        )
      })}
    </div>
  )
}

export default App;