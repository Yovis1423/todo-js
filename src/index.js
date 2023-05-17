import  './style.css';

import { Todo, TodoList } from "./classes";
import { crearTodoHTML } from './js/componentes';


export const todoList = new TodoList();

todoList.todos.forEach( todo => crearTodoHTML (todo));

// const newTodo = new Todo('Aprender JavaScript');
// // todoList.nuevoTodo(newTodo);

// todoList.todos[0].imprimirClase();
// // newTodo.imprimirClase();

console.log('todos', todoList.todos);