import React from "react";
import "../styles/TodosLoading.css"

function TodosLoading () {
    return(
        <div className="LoadingTodo-container">
            <span className="LoadingTodo-completeIcon"></span>
            <p className="loadingTodo-text">Cargando TODOs</p>
            <span className="loadingTodo-deleteIcon"></span>
        </div>
    );
}
export { TodosLoading };