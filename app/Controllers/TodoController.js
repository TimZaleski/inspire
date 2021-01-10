import todoService from "../Services/TodoService.js";
import { ProxyState } from "../AppState.js"

function _drawTodos() {
  let todos = ProxyState.todos;
  let completeCount = 0;
  let template = ''
  todos.forEach(todo => {
    template += todo.Template;
    if(todo.completed)
    {
      completeCount++;
    }
  })
  document.getElementById('todosDivList').innerHTML = template ;
  document.getElementById('completeDiv').innerHTML = `${completeCount}/${todos.length}`;
 }

export default class TodoController {
  constructor() {
    ProxyState.on("todos", _drawTodos);
    _drawTodos();
    this.getTodos();
  }

  getTodos() {
    try {
      todoService.getTodos()
    } catch (error) {
      console.error(error)
    }
  }

  addTodo() {
    window.event.preventDefault();
    let form = window.event.target
    var todo = {
      description: form['description'].value,
      completed: false,
      user: "timzaleski"
    };
    try {
      todoService.addTodo(todo);
    } catch (error) {
      console.error(error)
    }
     // @ts-ignore
     form.reset();
     // @ts-ignore
     $("#new-todo-modal").modal('hide');
  }

  /**
 * This method takes in an id of the Todo that should be togggled as complete
 * @param {string} todoId 
 */
  toggleTodoStatus(todoId) {
    try {
      todoService.toggleTodoStatus(todoId);
    } catch (error) {
      console.error(error)
    }
  }

  /**
   * This method takes in an id of the Todo that should be removed
   * @param {string} todoId 
   */
  removeTodo(todoId) {
    try {
      todoService.removeTodo(todoId);
    } catch (error) {
      console.error(error)
    }
  }
}