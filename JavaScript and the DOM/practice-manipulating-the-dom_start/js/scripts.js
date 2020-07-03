// 1: Set the text of the <h1> element
const header = document.getElementsByTagName('H1')[0];
header.textContent = "This Is My To Do List";


// 2: Set the color of the <h1> to a different color
header.style.color = 'green';

// 3: Set the content of the '.desc' paragraph
// The content should include at least one HTML tag
const desc = document.querySelector('.desc');
desc.innerHTML = `I love working with <em>JavaScript</em>`;


// 4: Set the class of the <ul> to 'list'
const ul = document.querySelector('ul');
ul.className = 'list';
// 5: Create a new list item and add it to the <ul>
const item = document.createElement('li');
item.innerHTML = '<input> Learn JavaScript';
ul.appendChild(item);


// 6: Change all <input> elements from text fields to checkboxes
const inputChange = document.getElementsByTagName('INPUT');
for (let i = 0; i < inputChange.length; i++) {
    inputChange[i].type = 'checkbox';
}

// 7: Create a <button> element, and set its text to 'Delete'
// Add the <button> inside the '.extra' <div>

const extra = document.getElementsByClassName('extra')[0];
const newButton = document.createElement('button');
newButton.textContent = "Delete";
extra.appendChild(newButton);


// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button
newButton.addEventListener('click', useButton);

function useButton() {
    extra.remove();
}
