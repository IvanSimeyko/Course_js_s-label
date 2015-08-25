/*
// Пример создания HTML элемента
var elem = document.createElement('p')
    content = document.createTextNode( 'Это динамический элемент' );

elem.appendChild( content );
wrappedP = document.getElementById('wrapper');
wrappedP.parentNode.appendChild(elem);
console.log( elem );
*/

// Работа в аудитории

// Функция копирования объектов
function copy(o) {
  var copy = Object.create(Object.getPrototypeOf(o));
  var propNames = Object.getOwnPropertyNames(o);

  propNames.forEach(function(name) {
    var desc = Object.getOwnPropertyDescriptor(o, name);
    Object.defineProperty(copy, name, desc);
  });
  return copy;
}

// Вызов функции
work = {
    work: 'engineering'
};
b = {
    name: 'Ivan'
};

var work_2 = copy(work);
var b_2 = b;

work_2.work = 'cook';
b_2.name = 'Anna';


// Получение объекта
var app = function(arg) {
  return document.querySelectorAll(arg)
};
