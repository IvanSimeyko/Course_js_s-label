// Занятие № 7
//Констурктор
function Book (bookName, author, pages) {
	this.name = bookName;
	this.author = author;
	this.pages = pages;
}

// Создаем пустой массив
var books = [];

// Добавляем элементы в массив c помощью метода push. Теперь в нашем массиве 4 элемента - объекта
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

//1 - создаем элемент-тег "ul"
var ulObj = document.createElement('ul');
//2 Пишем функцию для метода forEach
function renderBook (element, index, array) {
	// создаем элемент-тег "li"
    var liObj = document.createElement('li'),
		// создаем элемент-тег  "span"
        spanName = document.createElement('span'),
		spanAuthor = document.createElement('span'),
		spanPage = document.createElement('span');
	/// вставляем в элемент "span" значения (имя, автора, количество страниц))
    spanName.innerHTML = element.name;
	spanAuthor.innerHTML = element.author;
	spanPage.innerHTML = element.pages;
    // добавляет spanName spanAuthor spanPage в качестве дочернего по отношению к узлу liObj
    liObj.appendChild( spanName );
	liObj.appendChild( spanAuthor );
	liObj.appendChild( spanPage );

	// добавляет liObj в качестве дочернего по отношению к узлу ulObj
    ulObj.appendChild( liObj );
}

// вызываем метод forEach для массива books, который заполняет элемент-тег ulObj значениями,
// которые он берет из своих элементов-объектов
books.forEach(renderBook);

//3 выводим получившийся список на страницу браузера
document.body.appendChild( ulObj );

//4 объявляем переменную в которую заносим функцию
var clickHandler = function clickHandler ( key ) {
	console.log('clickHandler 1', books, key);
	//вызываем метод sort массива books
    books.sort(function (a, b) {

	// объявляем переменные для сортировки
        var first = a[ key ],
			second = b[ key ];

		// если не сравниваем страницы, то приводим имена авторов или
        // название книг к одинаковому регистру
        if(key !== 'pages') {
			first = first[0].toLowerCase();
			second = second[0].toLowerCase();
		}

        // условие, если первый элемент больше второго
 	    if (first > second) { //b[ 'name' ]
	      return 1;
	    }

        // условие, если второй элемент будет больше второго
	    if (first < second) {
	      return -1;
	  }
        // условие если  они одинаковы
	    return 0;
	});
	console.log('clickHandler 2', books, key);


	ulObj.innerHTML = '';

    // переписываем список в браузере
	books.forEach(renderBook);
};

// создаем кнопки и вешаем на них действие, которое будет происходить при нажатии
function createButton (text, key, callback) {
	// объявляем переменную, которая создает кнопку
    var button = document.createElement('button');
	// добавляем название кнопки
    button.innerHTML = text;

    // объявляем переменную на которую вешаем функцию
	var newCallback = callback.bind(null, key);
	button.addEventListener('click', newCallback);
	// добавляем кнопочку на страницу
    document.body.appendChild(button);
}

// создаем кнопки непосредственно в браузере
createButton('Sort By Author', 'author', clickHandler);
createButton('Sort By Name', 'name', clickHandler);
createButton('Sort By Page', 'pages', clickHandler);
