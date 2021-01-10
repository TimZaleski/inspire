import { ProxyState } from "../AppState.js";
import { api } from "../Services/AxiosService.js";
import Todo from "../Models/Todo.js";

let url = 'timzaleski/todos/'


class TodoService {
  async getTodos() {
    let res = await api.get(url);
    ProxyState.todos = res.data.map(s => new Todo(s));
  }

  async addTodo(todo) {
    console.log(todo);
    let res = await api.post(url, todo);
    ProxyState.todos = [...ProxyState.todos, new Todo(res.data)];
  }

  async toggleTodoStatus(todoId) {
    let todo = await ProxyState.todos.find(todo => todo.id == todoId);
    todo.completed = todo.completed ? false : true;

    let res = await api.put(url + todoId, todo);
    
    let oldToDoIndex = ProxyState.todos.findIndex(t=> t.id ==todoId);
  
    let temp = ProxyState.todos;
    temp.splice(oldToDoIndex,1,new Todo(res.data));
    ProxyState.todos = temp;
  }

  async removeTodo(todoId) {
    let res  = await api.delete(url+todoId);
    
    ProxyState.todos = ProxyState.todos.filter(todo => todo.id != todoId);
  }
}

const todoService = new TodoService();
export default todoService;