import template from '../src/template.js';
const test = QUnit.test;

QUnit.module('template');

test('test to return html', assert => {
    // Arrange
    const todos = {
        task: 'Learn templates',
        completed: true
    };
    const expected = /*html*/`
    <li>
        <input type="checkbox" name="task">Learn templates
    </li>
    `;
    // Act
    const html = template(todos);

    // Assert
    assert.htmlEqual(html, expected);
});
