let books = JSON.parse(localStorage.getItem("books")) || [];
let editIndex = -1;

// Add
document.getElementById("addBookBtn").addEventListener("click", function () {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const year = document.getElementById("year").value;
  const genre = document.getElementById("genre").value;

  if (title && author && year && genre) {
    const book = { title, author, year, genre };

    if (editIndex === -1) {
      books.push(book);
    } else {
      books[editIndex] = book;
      editIndex = -1;
      document.getElementById("addBookBtn").textContent = "Add Book"; // Change button text back to "Add Book"
    }

    saveBooksToLocalStorage();
    displayBooks();
    clearInputFields();
  } else {
    alert("Please fill in all fields");
  }
});

// Display
function displayBooks() {
  const bookList = document.getElementById("bookList");
  bookList.innerHTML = "";

  books.forEach((book, index) => {
    const li = document.createElement("li");
    li.className = "book-item";
    li.innerHTML = `
            <span> <strong>${book.title}</strong> by ${book.author} (${book.year}, ${book.genre})</span>
            <button onclick="editBook(${index})">Edit</button>
            <button onclick="deleteBook(${index})">Delete</button>
        `;
    bookList.appendChild(li);
  });
}

function editBook(index) {
  const book = books[index];
  document.getElementById("title").value = book.title;
  document.getElementById("author").value = book.author;
  document.getElementById("year").value = book.year;
  document.getElementById("genre").value = book.genre;

  editIndex = index;
  document.getElementById("addBookBtn").textContent = "Update Book";
}

// Delete
function deleteBook(index) {
  books.splice(index, 1);
  saveBooksToLocalStorage();
  displayBooks();
}

function clearInputFields() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("year").value = "";
  document.getElementById("genre").value = "";
}

document.getElementById("viewAllBooks").addEventListener("click", function () {
  displayBooks();
});

function saveBooksToLocalStorage() {
  localStorage.setItem("books", JSON.stringify(books));
}

