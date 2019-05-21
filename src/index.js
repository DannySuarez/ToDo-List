import template from './template.js';
import htmlToDOM from './html-to-DOM.js';
import todos from '../data/todo-data.js';
import templateHeader from '../src/template-header.js';

const list = document.getElementById('todo-list');
const header = document.getElementById('header');

todos.forEach(todos => {
    const html = template(todos);
    const dom = htmlToDOM(html);
    list.appendChild(dom);
});

const html = templateHeader();
const dom = htmlToDOM(html);
header.appendChild(dom);