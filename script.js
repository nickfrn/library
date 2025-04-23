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

addBookToLibrary('the bobinsons', 'bob', 278, 'read');
addBookToLibrary('the stevensons', 'steve', 301, 'not read');
addBookToLibrary('the book of books', 'michael jesus', 867, 'read');

const table = document.querySelector('table');

renderBooksTable(myLibrary);