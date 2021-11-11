import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodos, removeTodos, updateTodos, completedTodos } from '../redux/reducer'
import TodoItem from './TodoItem'


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

function DisplayTodos(props) {
    const [sort, setSort] = useState("active")
    return (
        <div className="displaytodos">
            <div className="buttons"></div>
            <button onClick={() => setSort("active")}>Active</button>
            <button onClick={() => setSort("completed ")}>completed</button>
            <button onClick={() => setSort("all")}>All</button>

            <ul>
                {
                    //active todos
                    props.todos.length > 0 && sort === "active" ?
                    props.todos.map(item => {
                        return (
                            item.completed === false &&
                            <TodoItem 
                                key={item.id}
                                item={item}
                                removeTodo={props.removeTodo}
                                updateTodo={props.updateTodo}
                                completedTodo={props.completedTodo}
                            />
                        )
                    }) : null
                }
                {/* for completed items */}
                {
                    props.todos.length > 0 && sort === "completed" ?
                    props.todos.map(item => {
                        return (
                            item.completed === true &&
                            <TodoItem 
                                key={item.id}
                                item={item}
                                removeTodo={props.removeTodo}
                                updateTodo={props.updateTodo}
                                completedTodo={props.completedTodo}
                            />
                        )
                    }) : null
                }
                {/* for all item */}
                {
                   props.todos.length > 0 && sort === "all" ?
                   props.todos.map(item => {
                       return (
                           <TodoItem 
                               key={item.id}
                               item={item}
                               removeTodo={props.removeTodo}
                               updateTodo={props.updateTodo}
                               completedTodo={props.completedTodo}
                           />
                       )
                   }) : null 
                }
            </ul>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);
