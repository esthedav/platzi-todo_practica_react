import React from "react";
import { TodoContext } from "../TodoContext"
import "../styles/TodoForm.css"

function TodoForm () {
    const  [newTodoValue, setNewTodoValue] = React.useState('')
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onCancel = () => {
        setOpenModal(false)
    }
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }
    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="">Escribe tu nuevo TODO</label>
            <textarea  
                cols="46" 
                rows="5" 
                placeholder="Cortar la cebolla para el almuerzo"
                value={newTodoValue}
                onChange={onChange}>

                </textarea>
            <div className="TodoForm-buttonContainer">

                <button type="button" onClick={onCancel}
                    className="TodoForm-button TodoForm-button--cancel">
                    Cancelar
                </button>

                <button type="submit"
                    className="TodoForm-button TodoForm-button--add">
                    Añadir
                </button>
            </div>
        </form>
    );
}
export { TodoForm }