//Занятия 09

(function(global){

	// The `_` object constructor
	function simpleJSLibrary(id){

		var about = {
	      version: 0.1,
	      author: "Agatha Christie",
	      created: "September 2015",
	      updated: null
	   	};

	  /*TODO: 1. Добавить проверку параметра id.
			это можеть быть
				или '#main' - id
					в этом случае ничего не меняется
				или '.red' - class
					в этом случае вместо querySelector используем querySelectorAll
				или 'div' - tagName
					в этом случае вместо querySelector используем querySelectorAll

	  */
	   	if(document.getElementById(id) != null){
	  	this.e = document.getElementById(id);
	  }
	  else if(document.getElementsByClassName(id) != null ){
	  	this.e = document.getElementsByClassName(id);
	  }
	  else{
	  	this.e = document.getElementsByTagName(id);
	  }
	   	if (id) {
	   		if (global === this) {
		      return new simpleJSLibrary(id);
		    }

			  // Мы в верном контексте объекта(scope):
	      		// Сохранить найденный элемент в свойство
			  this.e = document.querySelector(id);
		    return this;
	   	} else {
	   		// Не указан параметр id - вернуть объект about
	   		return about;
	   	}
	}

	function showError (text) {
  	console.error(text);
	}
	function showNodeElementError () {
		showError('Can\'t find element node');
	}
	// our dot-operator methods
	simpleJSLibrary.prototype = {
		/*TODO: 2. Улучшить show/hide
			когда будет сделана задача №1
			в this.e возможно будет хранится массив или nodeList
			Нужно что бы для массива работали методы show/hide
			Для этого нужно будет по массиву или nodeList пройтись циклом
			и для каждого элемента выполнять изменения стиля
	  */
		show: function () {
		  // implementation
		  if (this.e) {
		  	this.e.style.display = 'inherit';
		  } else {
		  	showNodeElementError();
		  }
		  return this;
		},
		hide: function () {
		  // implementation
		  if (this.e) {
		  	this.e.style.display = 'none';
		  } else {
		  	showNodeElementError();
		  }
		  return this;
		}
		/*TODO: 3. Реализовать метод toggle()
			который будет вызывать то show(), то hide()
			в зависимости от стиля элемента
	  */

	  /*TODO: 4. Реализовать метод size(height, width)
			который будет принимать два параметра
			первый паарамер 'height', второй - 'width'

			Если параметры не указаны, то возвращать текущие значения высоты и ширины объекта
			Если параметры указаны, то меняем высоту и ширину элемента и возвращаем this
		*/

	  /*TODO: 5. Реализовать метод val()
	  Который возвращает значение 'this.e.value' или меняет его в зависимости от того есть парамет или нет
	  */

	  /*TODO: 6. Реализовать метод addClass()
	  который добавляет строку в аттрибут class
	  */

	  /*TODO: 7. Реализовать метод removeClass()
	  который удаляет строку из аттрибута class
	  */
	};

	var sLib = simpleJSLibrary;

	global['simpleJSLibrary'] = global['sLib'] = sLib;
})(window);

