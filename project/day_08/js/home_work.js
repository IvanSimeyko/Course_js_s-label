// Practics

// Создадим заголовок для формы
var tagP = document.createElement('p');
tagP.align = 'center';
tagP.innerHTML = '<strong> Выбераем автора новой книги </strong>';
console.log( 'Создаем заголовок моей формы');
document.body.appendChild(tagP);

// Создаем массив для авторов
var authorApi = (function () {
    var author = [];

    // Создаем контейнер ul
    var ulObj = document.createElement('ul');

    // Конструктор для автора
    function Author (authorName, authorSurname) {
        this.name = authorName;
        this.surname = authorSurname;
    }

   /* // для определения строчных элементов сощдаем тег <span>
    function createSpan () {
		var spanObj = document.createElement('span');
    }
*/
    //Функция для добавления автора
    function renderAuthor (element, index, array) {
		var liObj = document.createElement('li'),
		// Создаем текстовы поля и кнопочку
        spanName = document.createElement('span'),
		spanSurname = document.createElement('span'),
		removeButton = document.createElement('button');
        // Заполняем эти поля значениями
        spanName.innerHTML = element.name + ', ';
		spanSurname.innerHTML = element.surname + '  ';
		removeButton.innerHTML = 'delete author';
        // Вешаем на кнопочку событие
		removeButton.addEventListener('click', removeBook.bind(null, element, index, liObj));
        // Добавлем автора в документ
        liObj.appendChild( spanName );
		liObj.appendChild( spanSurname );
		liObj.appendChild( removeButton );
		ulObj.appendChild( liObj );
        console.log('добавил автора', ulObj)
    }

    //Пишем функцию, которая будет удалять нашего автора
    function removeBook(book, index, bookLi) {
		author.splice(author.indexOf(author), 1);
		authorLi.parentNode.removeChild(authorLi);
	}

    function createInput(name, conteiner) {
		var input = document.createElement('input');
		input.setAttribute('type', 'text');
		input.setAttribute('maxlength', '20');
		input.setAttribute('name', name);
		input.setAttribute('placeholder', name);
		conteiner.appendChild(input);
		return input;
	}

        var formAuthor = document.createElement('form');

    	var nameInput = createInput('name', formAuthor);
		var surnameInput = createInput('surname', formAuthor);

		var newAuthorButton = document.createElement('button');
		newAuthorButton.innerHTML = 'Add author';

        formAuthor.appendChild(newAuthorButton);
		document.body.appendChild(formAuthor);

        formAuthor.addEventListener('submit', function (event) {
			var newAuthor = new Author(nameInput.value, surnameInput.value);
			renderAuthor(newAuthor);
			author.push(newAuthor);

			reset();

			event.preventDefault();
		});
    document.body.appendChild(ulObj);
})();