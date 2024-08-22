const button = document.querySelector('button');
const input = document.querySelector('input');
const unorderedList = document.querySelector('ul');

button.addEventListener('click', addItem);

function addItem() {
    let inputValue = input.value;
    let unorderedListItem = document.createElement('li');
    unorderedListItem.textContent = inputValue;
    unorderedList.append(unorderedListItem);
    input.value = '';
}