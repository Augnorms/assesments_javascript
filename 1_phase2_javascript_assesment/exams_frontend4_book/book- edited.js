let books = [{
  id: 1,
  name: 'First book'
}];

let nextBookId = 2;

/*
  TODO: The existing code uses functions called `addBook` and `deleteBook`, implement them.
*/
function addBook(){

 var input = document.querySelector(".add-book-form__title-input");

 input.value;

 if(input.value == ""){
   

 }else{
  
  const obj = {
    id: nextBookId++,
    name: input.value
  }

  books.push(obj);

  input.value = "";

 }

 render();
}


function deleteBook(id){

  for (let i in books) {
   if (id == books[i].id){
    books.splice(i, 1)
   }
  }
  
  render(); 
}



function render() {
  const container = document.querySelector('.book-list');
  
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  books.forEach(book => {
    const bookNameElement = document.createElement('span');

    bookNameElement.className = 'book-list__title';
    bookNameElement.innerHTML = book.name;

    const deleteButtonElement = document.createElement('button');
    deleteButtonElement.className = 'book-list__delete-btn';
    deleteButtonElement.innerHTML = 'Delete';
    deleteButtonElement.onclick = () => deleteBook(book.id);

    const bookElement = document.createElement('div');
    bookElement.className = 'book-list__item';
    bookElement.appendChild(bookNameElement);
    bookElement.appendChild(deleteButtonElement);

    container.appendChild(bookElement);

  });

}

document.querySelector('.add-book-form').addEventListener('submit', (e) => {
  e.preventDefault();

  addBook();

});

render();
