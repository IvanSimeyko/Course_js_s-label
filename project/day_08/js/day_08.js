//Занятия 08

function Book (bookName, author, pages) {
	this.name = bookName;
	this.author = author;
	this.pages = pages;
}
var books = [];
books.push(new Book('Java Many Parts',
	'Crok', 1000));
books.push(new Book('Javascript Good Parts',
	'Crokfold', 300));
books.push(new Book('PHP Bad Parts',
	'Fold', 500));

books.push(new Book('HTML Good Parts',
	'Rokfold', 300));

function createSpan () {
	var spanObj = document.createElement('span');
}
// 0
// var appEnd = document.body.appendChild;
// var crEate = document.createElement;
//appEnd( nodeDiv )

//1
var ulObj = document.createElement('ul');

//2
function renderBook (element, index, array) {
	var liObj = document.createElement('li'),
		spanName = document.createElement('span'),
		spanAuthor = document.createElement('span'),
		spanPage = document.createElement('span'),
		removeButton = document.createElement('button');
	spanName.innerHTML = element.name + ', ';
	spanAuthor.innerHTML = element.author + ' - ';
	spanPage.innerHTML = element.pages;
	removeButton.innerHTML = 'x';
	removeButton.addEventListener('click', removeBook.bind(null, element, index, liObj));
	liObj.appendChild( spanName );
	liObj.appendChild( spanAuthor );
	liObj.appendChild( spanPage );
	liObj.appendChild( removeButton );
	ulObj.appendChild( liObj );
}

function removeBook(book, index, bookLi) {
	books.splice(books.indexOf(book), 1);
	bookLi.parentNode.removeChild(bookLi);
}

books.forEach(renderBook);

//3
document.body.appendChild( ulObj );

//4
var clickHandler = function clickHandler ( key ) {
	books.sort(function (a, b) {

		var first = a[ key ],
			second = b[ key ];

		if(key !== 'pages') {
			first = first[0].toLowerCase();
			second = second[0].toLowerCase();
		}
 	  if (first > second) {
	    return 1;
	  }
	  if (first < second) {
	    return -1;
	  }
	  return 0;
	});

	ulObj.innerHTML = '';

	books.forEach(renderBook);
}
function createButton (text, key, callback) {
	var button = document.createElement('button');
	button.innerHTML = text;
	var newCallback = callback.bind(null, key);
	button.addEventListener('click', newCallback);
	document.body.appendChild(button);
}

createButton('Sort By Author', 'author', clickHandler);
createButton('Sort By Name', 'name', clickHandler);
createButton('Sort By Page', 'pages', clickHandler);

//5
var formBook = document.createElement('form');

function createInput(name, conteiner) {
	var input = document.createElement('input');
	input.setAttribute('type', 'text');
	input.setAttribute('maxlength', '20');
	input.setAttribute('name', name);
	input.setAttribute('placeholder', name);
	conteiner.appendChild(input);
	return input;
}
var nameInput = createInput('name', formBook);
var authorInput = createInput('author', formBook);
var pagesInput = createInput('pages', formBook);

var newBookButton = document.createElement('button');
newBookButton.innerHTML = 'Add book';

function reset() {
	nameInput.value = '';
	authorInput.value = '';
	pagesInput.value = '';
}

formBook.addEventListener('submit', function (event) {
	var newBook = new Book(nameInput.value, authorInput.value, pagesInput.value);
	renderBook(newBook);
	books.push(newBook);

	reset();

	event.preventDefault();
});

formBook.appendChild(newBookButton);
document.body.appendChild(formBook);

// Practics
