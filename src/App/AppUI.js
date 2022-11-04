import React from "react";
import { TodoContext } from "../TodoContext/index.js";
import { TodoCounter } from "../components/TodoCounter.jsx";
import { TodoSearch } from "../components/TodoSearch.jsx";
import { TodoList } from "../components/TodoList.jsx";
import { TodoItem } from "../components/TodoItem.jsx";
import { CreateTodoButton } from "../components/CreateTodoButton.jsx";
import { Modal } from "../modal"
import { TodoForm } from "../components/TodoForm.jsx"

// Esqueletos
import { TodosError } from "../components/TodosError.jsx"
import { TodosLoading } from "../components/TodosLoading.jsx"
import { EmptyTodos } from "../components/EmptyTodos.jsx"


function AppUI() {
    const {
        error, 
        loading, 
        searchedTodos, 
        completeTodo, 
        deleteTodo, 
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);


    return (
        <>
            <TodoCounter/>

            <TodoSearch/>
            
            <TodoList>
                {error && <TodosError error={error} />}
                {loading && <TodosLoading />}
                {(!loading && !searchedTodos.lenght) && <EmptyTodos/>}

                {searchedTodos.map(todo => (
            <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo)}
                onDelete={() => deleteTodo(todo.text)}
            />
            ))}
        </TodoList>  

        {openModal && (
            <Modal setOpenModal={setOpenModal}>
            <TodoForm/>
            </Modal>
        )}    
                

            <CreateTodoButton 
            setOpenModal={setOpenModal}
            openModal={openModal}/>
        </>
    )
}

export { AppUI}