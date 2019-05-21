function template(todos) {
    let checked = '';
    
    if(todos.completed) {
        checked = 'checked';
    }
    const html = 
    `
    <li>
        <input ${checked} type="checkbox" name="task">${todos.task}
    </li>
    ` ;
    return html;
}
export default template;