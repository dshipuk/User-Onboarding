import React, { useState, useEffect } from "react";
import Form from "./Components/Form";

const initialFormVals = {
  name: "",
  email: "",
  password: "",
  tos: false,
}


function App() {
  const [values, setValues] = useState(initialFormVals)

  const onChange = (name, value) => {
    setValues({ ...values, [name]: value })
  }

  const onSub = () => {
    setValues(initialFormVals)
  }

  return (
    <div className="App">
      <h1>Form</h1>
      <Form 
        values={values}
        change={onChange}
        submit={onSub}
      />
    </div>
  );
}

export default App;
