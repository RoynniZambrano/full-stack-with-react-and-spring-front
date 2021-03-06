
import React, { Component } from 'react';
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'

class ListTodoComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todos:
                [
                  //  { id: 1, description: "Learn React 1", done: false, targetDate: new Date() },
                  //  { id: 2, description: "Learn React 2", done: false, targetDate: new Date() },
                  //  { id: 3, description: "Learn React 3", done: false, targetDate: new Date() },
                  //  { id: 4, description: "Learn React 4", done: false, targetDate: new Date() }
                ]
        }
    }


    componentDidMount(){
        let userName = AuthenticationService.getLoggedInUserName()
        TodoDataService.retrieveAllTodos(userName)
        .then(
            response => {
                this.setState({ todos: response.data})
            }
        )
    }


    render() {
        return <div>
            <h1>List Todos</h1>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>description</th>
                            <th>target date</th>
                            <th>is completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(
                                todo =>
                                    <tr key = {todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                        <td>{todo.done.toString()}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    }
}

export default ListTodoComponent