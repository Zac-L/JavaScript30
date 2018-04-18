
const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = [];

function addItem (event) {
  event.preventDefault();

  const text = this.querySelector('[name=item]').value;

  const item = {
    text,
    done: false
  }
  items.push(item);
  populateList(items, itemsList);
  console.table(items);

  this.reset();
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, index) => {
    const checked = plate.done ? 'checked' : '';
    
    return `
      <li>
        <input type="checkbox" data-index=${index} id="item${index}" ${checked}/>
        <label for="item${index}">${plate.text}</label>
      </li>
    `;
  }).join('');
}

addItems.addEventListener('submit', addItem);