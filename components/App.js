import Header from './Header.js';
import Component from './Component.js';
import ToDoList from './ToDoList.js';
import todos from '../data/todo-data.js';
import AddToDo from '../components/AddToDo.js';

class App extends Component {

    render() {
        const dom = this.renderDom();
        const main = dom.querySelector('main');

        const header = new Header();
        const HeaderDOM = header.render();
        dom.insertBefore(HeaderDOM, main);
        
        const addToDo = new AddToDo({
            onAdd: (newToDo) => {
                //update the array
                todos.unshift(newToDo);
                //update list
                toDoList.update({ todos });
            }
        });

        const addToDoDom = addToDo.render();
        main.appendChild(addToDoDom);

        const toDoList = new ToDoList({ 
            todos,
            onRemove: (taskToRemove) => {
                const index = todos.indexOf(taskToRemove);
                todos.splice(index, 1);

                toDoList.update({ todos });
            }
        });

        const ToDoListDom = toDoList.render();    
        main.appendChild(ToDoListDom); 

        return dom;

    }

    renderTemplate() {
        return /*html*/`
        <div>
            <!-- Header goes here -->

            <main>
            <!-- List Item goes here -->
            </main>
        </div>
        `;
    }
}

export default App;