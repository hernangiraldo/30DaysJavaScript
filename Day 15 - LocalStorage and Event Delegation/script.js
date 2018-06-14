let addItems;
let itemsList;
let items;

const domLoaded = () => {
    addItems = document.querySelector('.add-items');
    itemsList = document.querySelector('.plates');
    items = localStorage.getItem('items') && JSON.parse(localStorage.getItem('items')).length > 0 ? JSON.parse(localStorage.getItem('items')) : [];

    if (items.length > 0) {
        populateList(items, itemsList);
    }

    addItems.addEventListener('submit', addItem);
}

function addItem(e) {
    e.preventDefault();
    const text = this.querySelector('[name=item]').value;
    const item = {
        text,
        done: false
    };
    items.push(item);
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
    this.reset();
}

function changeCheckStatus(e) {
    console.log(e);
}

function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
        return `
            <li>
                <input type="checkbox" data-index="${i}" id="item${i}" ${plate.done ? 'checked' : ''} />
                <label for="item${i}">${plate.text}</label>
            </li>
        `;
    }).join('');

    platesList.addEventListener('click', changeCheckStatus);
}

document.addEventListener('DOMContentLoaded', domLoaded);