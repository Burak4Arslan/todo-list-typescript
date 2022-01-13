import React, {useEffect, useState} from 'react';
import './App.css';
import TodoComponent from "./components/TodoComponent";
import _uniqueId from "lodash/uniqueId";

function App() {

    const [todoIdList, setTodoIdList] = useState<string[]>([]);

    const addTodoClicked = () => {
        setTodoIdList(todoIdList.concat([_uniqueId("todo-")]));
    };

    const deleteClicked = (idToDelete: string) => {
        setTodoIdList(todoIdList.filter(id => id !== idToDelete));
    };

    return (
        <div className="App">
            <div className={"todo-list-box"}>
                <h1>TODOS</h1>
                <button className={"add-todo-button"} onClick={() => addTodoClicked()}>Add To-do</button>
                {todoIdList.map((id) => {
                    return <TodoComponent id={id} deleteClicked={(idToDelete: string) => deleteClicked(idToDelete)}
                                          key={id}/>
                })
                }
            </div>
        </div>
    );
}

export default App;
