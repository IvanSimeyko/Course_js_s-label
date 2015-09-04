// Practics

var authorApi = (function () {
    var author = [];
    var ulObj = document.createElement('ul');
    function Author (authorName, authorSurname) {
        this.name = authorName;
        this.surname = authorSurname;
    }

    function createSpan () {
		var spanObj = document.createElement('span');

    }
    function renderAuthor (element, index, array) {
		var liObj = document.createElement('li'),
			spanName = document.createElement('span'),
			spanSurname = document.createElement('span'),
			removeButton = document.createElement('button');
		spanName.innerHTML = element.name + ', ';
		spanSurname.innerHTML = element.surname + ' - ';
		removeButton.innerHTML = 'x';
		removeButton.addEventListener('click', removeBook.bind(null, element, index, liObj));
		liObj.appendChild( spanName );
		liObj.appendChild( spanSurname );
		liObj.appendChild( removeButton );
		ulObj.appendChild( liObj );
    }

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