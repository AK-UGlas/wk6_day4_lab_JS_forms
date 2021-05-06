document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const title = document.querySelector('#new-item-form');
  title.addEventListener('submit', handleTitle);
  
  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('id', 'delete');
  deleteBtn.setAttribute('type', 'submit');
  deleteBtn.innerHTML = 'Delete all';
  deleteBtn.setAttribute('style', 'width: 100px; height: 50px');
  deleteBtn.addEventListener('click', handleDelete); 

  const heading = document.querySelector('h1');
  heading.appendChild(deleteBtn);

})

const handleTitle = function(event) {
  event.preventDefault();
  const readingItems = document.createElement('div')
  readingItems.setAttribute('class', 'item');
  const title = document.createElement('h1');
  const author = document.createElement('h3');
  const type = document.createElement('p');
  title.textContent = event.target.title.value;
  author.textContent = event.target.author.value;
  type.textContent = event.target.category.value
  readingItems.append(title);
  readingItems.append(author);
  readingItems.append(type);
  const form = document.querySelector('#new-item-form').reset();
  addItem(readingItems);
};

function addItem(readingItems){
  const listItems = document.createElement('li')
  listItems.setAttribute('style', 'list-style: none');
  listItems.appendChild(readingItems);
  const currentList = document.querySelector('#reading-list')
  currentList.appendChild(listItems);
}

const handleDelete = function() {
  const readingList = document.querySelector('#reading-list');
  while(readingList.firstChild){ 
    readingList.removeChild(readingList.lastChild);
  };
}