import React, { useRef } from 'react'


const TodoItem = (props) => {
    const {item, updateTodo, removeTodo, completedTodo} = props;
    
    const inputRef = useRef(true); 

    const changeFocus = () => {
        inputRef.current.disabled = false;
        inputRef.current.focus();
    };

    const update = (id,value,e) => {

        if(e.which === 13) {
            updateTodo({id, item:value });
            inputRef.current.disabled = true;
        }
    };

    return (
        <li key={item.id} className="card">
            <textarea 
            ref={inputRef} 
            disabled={inputRef} 
            defaultValue={item.item}
            onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
            />
            <div className="btn">
            <button onClick={() => changeFocus()}>Edit</button>
            <button onClick={() => completedTodo(item.id)}>Complete</button>
            <button onClick={() => removeTodo(item.id)}>Delete</button>{" "}
            </div>
            {item.completed && <span className="completed">done</span>}
        </li>
    )
}

export default TodoItem
