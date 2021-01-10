export default class Todo {
  constructor({ id, completed, description, user }) {
    this.id = id;
    this.completed = completed;
    this.description = description;
    this.user = user;
  }
}