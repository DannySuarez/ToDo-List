import Component from './Component.js';

class ToDoItem extends Component {
    
    render() {
        const listItem = this.renderDom();
        const onRemove = this.props.onRemove;
        const removeButton = listItem.querySelector('button');

        removeButton.addEventListener('click', () => {
            onRemove(this.props.todo);
        });

        return listItem;
    }
    
    renderTemplate() {
        const todo = this.props.todo;

        return /*html*/`
        <li>
        <input type="checkbox" name="task">${todo.task}
        <button class="remove-button">X</button>   
        </li> 
        `;
    }
}
export default ToDoItem;