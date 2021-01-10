export default class Todo {
  constructor({ id, completed, description, user }) {
    console.log('[RAW TODO DATA]', id, completed, description, user);
    this.id = id;
    this.completed = completed;
    this.description = description;
    this.user = user;
  }

  get Template(){
    let checkStr = "";
    if (this.completed)
    {
      checkStr = `checked="true"`;
    }

    return /*html*/`
    <div>
    <h5>
    <input type="checkbox" id="${this.id}" ${checkStr} onchange="app.todoController.toggleTodoStatus('${this.id}')">
      <span class="text-center">${this.completed ? `<s>${this.description}</s>` :this.description}</span>
    <i class="fa fa-trash text-danger cursor-pointer rAlign" onclick="app.todoController.removeTodo('${this.id}')" aria-hidden="true"></i>
    </h5>
    </div>
    `
  }

}