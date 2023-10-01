const button = document.querySelector('button');
const input = document.querySelector('input');
const list = document.querySelector('ul');

button.addEventListener('click', addProduct);

function addProduct() {
    let inputvalue = input.value;
    let listItem = document.createElement('li');
    listItem.textContent = inputvalue;
    list.appendChild(listItem);
    input.value = '';
}