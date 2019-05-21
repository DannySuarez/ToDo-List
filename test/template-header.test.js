import templateHeader from '../src/template-header.js';
const test = QUnit.test;

test('html template for header', assert => {
    //arrange
    const expected = /*html*/` 
    <h1>Danny's ToDo List</h1>
    `;
   
    //act
    const html = templateHeader();


    //assert
    assert.htmlEqual(html, expected);

});
