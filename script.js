let myLibrary = [];

function Book(title, author, pages, read) {
    this.uuid = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.changeStatus = function() {
    return this.read = !this.read;
};

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);

    myLibrary.push(newBook);
}

function renderBooksTable(array) {
    array.forEach(book => {
        let bookRow = document.createElement('tr');

        bookRow.setAttribute('data-id', book.uuid);

        let bookTitle = document.createElement('td');
        let bookAuthor = document.createElement('td');
        let bookPages = document.createElement('td');
        let bookStatus = document.createElement('td');

        let updateBtn = document.createElement('button');
        updateBtn.classList.add('update-status');
        updateBtn.textContent = 'Update Read Status';

        let deleteBtn = document.createElement('button');   
        deleteBtn.classList.add('delete-book');  
        deleteBtn.textContent = 'Delete Book';  

        bookTitle.textContent = book.title;
        bookAuthor.textContent = book.author;
        bookPages.textContent = book.pages;
        bookStatus.textContent = book.read ? 'Read' : 'Not Read Yet';

        bookRow.appendChild(bookTitle);
        bookRow.appendChild(bookAuthor);
        bookRow.appendChild(bookPages);
        bookRow.appendChild(bookStatus);
        bookRow.appendChild(updateBtn);
        bookRow.appendChild(deleteBtn);

        tableBody.appendChild(bookRow);
    });
}

const tableBody = document.querySelector('tbody');
const bookDialog = document.querySelector('#newBookDialog');
const deleteBtn = document.querySelector('#deleteBook');
const dialogBtn = document.querySelector('#showDialog');
const confirmBtn = document.querySelector('#confirm');
const cancelBtn = document.querySelector('#cancel');

dialogBtn.addEventListener('click', () => {
    bookDialog.showModal();
});

confirmBtn.addEventListener('click', (event) => {
    event.preventDefault();

    let title = document.querySelector('#title');
    let author = document.querySelector('#author');
    let pages = document.querySelector('#pages');
    let status = document.querySelector('#status');

    addBookToLibrary(title.value, author.value, pages.value, status.value);

    bookDialog.close();
    renderBooksTable(myLibrary);
});

cancelBtn.addEventListener('click', (event) => {
    event.preventDefault();
    bookDialog.close();
});

tableBody.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-book')) {
        let row = event.target.closest('tr');
        let rowId = row.getAttribute('data-id');

        myLibrary = myLibrary.filter((book) => book.uuid !== rowId);
        tableBody.innerHTML = '';
    }; 
    
    if (event.target.classList.contains('update-status')) {
        let row = event.target.closest('tr');
        let rowId = row.getAttribute('data-id');

        myLibrary.forEach(book => {
            if (book.uuid === rowId) {
                book.changeStatus();
            };  
        });

        tableBody.innerHTML = '';
    };

    renderBooksTable(myLibrary);
});