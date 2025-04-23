const myLibrary = [];

function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);

    myLibrary.push(newBook);
}

function renderBooksTable(array) {
    array.forEach(book => {
        let bookRow = document.createElement('tr');

        let bookId = document.createElement('td');
        let bookTitle = document.createElement('td');
        let bookAuthor = document.createElement('td');
        let bookPages = document.createElement('td');
        let bookStatus = document.createElement('td');

        bookId.textContent = book.id;
        bookTitle.textContent = book.title;
        bookAuthor.textContent = book.author;
        bookPages.textContent = book.pages;
        bookStatus.textContent = book.read;

        bookRow.appendChild(bookId);
        bookRow.appendChild(bookTitle);
        bookRow.appendChild(bookAuthor);
        bookRow.appendChild(bookPages);
        bookRow.appendChild(bookStatus);

        table.appendChild(bookRow);
    });
}

const table = document.querySelector('table');
const bookDialog = document.querySelector('#newBookDialog');
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

renderBooksTable(myLibrary);