function template(todos) {
    const html = 
    `
    <li>
        <input type="checkbox" name="task">${todos.task}
    </li>
    ` ;
    return html;
}
export default template;