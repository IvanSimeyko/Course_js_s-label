// Занятие № 7
//Констурктор
function Book (bookName, author, pages) {
	this.name = bookName;
	this.author = author;
	this.pages = pages;
}

// Создаем пустой массив
var books = [];

// Добавляем элементы в  массив c с помощью метода push
books.push(new Book('Java Many Parts',
	'Crok', 1000));

books.push(new Book('Javascript Good Parts',
	'Crokfold', 300));

books.push(new Book('PHP Bad Parts',
	'Fold', 500));

books.push(new Book('HTML Good Parts',
	'Rokfold', 300));


// функция, которая создает новый элемент "span"
function createSpan () {
	var spanObj = document.createElement('span');
}
// 0
// var appEnd = document.body.appendChild;
// var crEate = document.createElement;
//appEnd( nodeDiv )

//1 - создаем элемент "ul"
var ulObj = document.createElement('ul');

//2
function renderBook (element, index, array) {
	var liObj = document.createElement('li'),
		spanName = document.createElement('span'),
		spanAuthor = document.createElement('span'),
		spanPage = document.createElement('span');
	spanName.innerHTML = element.name;
	spanAuthor.innerHTML = element.author;
	spanPage.innerHTML = element.pages;
	liObj.appendChild( spanName );
	liObj.appendChild( spanAuthor );
	liObj.appendChild( spanPage );
	ulObj.appendChild( liObj );
}

books.forEach(renderBook);

//3
document.body.appendChild( ulObj );

//4
var clickHandler = function clickHandler ( key ) {
	console.log('clickHandler 1', books, key);
	books.sort(function (a, b) {

		var first = a[ key ],
			second = b[ key ];

		if(key !== 'pages') {
			first = first[0].toLowerCase();
			second = second[0].toLowerCase();
		}
 	  if (first > second) { //b[ 'name' ]
	    return 1;
	  }
	  if (first < second) {
	    return -1;
	  }
	  return 0;
	});
	console.log('clickHandler 2', books, key);

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
