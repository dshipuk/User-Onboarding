import React from "react";


const Form = (props) => {


    const handleChange = evt => {
        const { name, value } = evt.target;

        props.change(name, value)
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        props.submit()
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Name:
                <input 
                    type="text"
                    value={props.values.name}
                    name="name"
                    onChange={handleChange}
                />
            </label>
            <label>Email:
                <input 
                    type="email"
                    value={props.values.email}
                    name="email"
                    onChange={handleChange}
                />
            </label>
            <label>Password:
                <input 
                    type="password"
                    values={props.values.password}
                    name="password"
                    onChange={handleChange}
                />
            </label>
            <label>TOS
                <input 
                    type="checkbox"
                    value={props.values.tos}
                    name="tos"
                    onChange={handleChange}
                />
            </label>
            <input type="submit" value="create team"/>
        </form>
    )
}

export default Form;