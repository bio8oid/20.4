import React from 'react';
import uuid from 'uuid';
import { hot } from 'react-hot-loader';
import style from './App.css';
import Title from '../components/Title.js';
import stylish from '../components/Title.css';
import TodoList from '../components/TodoList.js';
import todostyle from '../components/TodoList.css';


class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            data: [
            {
                id: 1,
                text: 'clean broom'
            }, 
            {
                id: 2,
                text: 'watch the dishes'
            }, 
            {
                id: 3,
                text: 'feed my cock'
            }
            ]
        };
    }

    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };

        let data = [...this.state.data, todo];
        this.setState({data});
    }

    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }

    render() {

        return (
                <div className={style.App}>
                    <div className={stylish.Title}>
                        <Title/><span >({this.state.data.length})</span>
                    </div>
                    <div>{this.state.data.map(item => (<TodoList className={todostyle.TodoList} key={item.id} text={item.text} /> ))}</div>
                </div>
        );
    }

}

export default hot(module)(App);


//Nie wiem jak zniknąc element listy