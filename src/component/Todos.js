import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodos, removeTodos, updateTodos, completedTodos } from '../redux/reducer'
import { GoPlus } from "react-icons/go"

const mapStateToProps = (state) => {
    return {
        todos: state,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addTodo : (obj) => dispatch(addTodos(obj)),
        removeTodo : (id) => dispatch(removeTodos(id)),
        updateTodo : (obj) => dispatch(updateTodos(obj)),
        completedTodo : (id) => dispatch(completedTodos(id))
    }
}

const Todos = (props) => {
    const [todo, setTodo] = useState("")

    const handleChange = (e) => {
        setTodo(e.target.value)
    }

    console.log("props from store", props)
    return (
        <div className="addTodos">
            <input type="text" className="todo-input" onClick={handleChange}/>
            <button className="add-btn" onClick={() => props.addTodo({
                id: Math.floor(Math.random()*1000),
                item:todo,
                completed:false 
            })}>
                <GoPlus />
            
            </button>
            <br />
        </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(Todos);
