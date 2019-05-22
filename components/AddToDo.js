import Component from '../components/Component.js';

class AddToDo extends Component {

    render() {
        const form = this.renderDom();
        const onAdd = this.props.onAdd;

        form.addEventListener('submit', event => {
            event.preventDefault();

            const formData = new FormData(form);

            const newToDo = {
                task: formData.get('task'),
            };

            onAdd(newToDo);
            form.reset();
            
        });
        return form;
    }

    renderTemplate() {
        return /*html*/`
            <form>
                <label>Task: <input type="text" name="task"></label>
                <button>Add</button>
            </form>
        `;
    }
}

export default AddToDo;