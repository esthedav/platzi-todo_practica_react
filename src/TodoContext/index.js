import React from "react";
import { useState } from "react";
import { useLocalStore } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStore('TODOS_V1', []);

    const [searchValue, setSearchValue] = useState('');
    const [openModal, setOpenModal] = useState(false);

    const completedTodos = todos.filter(todo => todo.completed).length;
    const totalTodos = todos.length;

    let searchedTodos = [];

    if (searchValue.length === 0) {
        searchedTodos = todos
    } else {
        searchedTodos = todos.filter(todo => {
            const todoText = todo.text.toLocaleLowerCase();
            const searchText = searchValue.toLocaleLowerCase();
            return todoText.includes(searchText);
        });
    }

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            completed: false,
            text
        });
        saveTodos(newTodos)
    }


    const completeTodo = (item) => {
        if (item.completed === false) {
            const todoIndex = todos.findIndex(todo => todo.text === item.text);
            const newTodos = [...todos];
            newTodos[todoIndex].completed = true;
            saveTodos(newTodos);
        } else {
            const todoIndex = todos.findIndex(todo => todo.text === item.text);
            const newTodos = [...todos];
            newTodos[todoIndex].completed = false;
            saveTodos(newTodos);
        }
    }

    const deleteTodo = (text) => {
        const deleteIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(deleteIndex, 1);
        saveTodos(newTodos);
    }
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };