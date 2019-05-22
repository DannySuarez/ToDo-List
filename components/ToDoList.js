import Component from '../components/Component.js';
import ToDoItem from '../components/ToDoItem.js';

class ToDoList extends Component {
    render() {
        const list = this.renderDom();
        const todos = this.props.todos;
        const onRemove = this.props.onRemove;

        todos.forEach(todo => {
            const toDoItem = new ToDoItem({ todo, onRemove });
            const toDoItemDOM = toDoItem.render();
            list.appendChild(toDoItemDOM);
        });

        return list;
    }
    renderTemplate() {
        return /*html*/ `
            <ul id="todo-list"></ul>
        `;
    }

}

export default ToDoList;