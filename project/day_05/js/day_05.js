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

// Решение домашки
// Прототип объектов
var proto = {
    background: 'pink',

    render: function() {
        console.log('Выводим фигуру на страницу');
        this.updateStyle();
        document.body.appendChild(this.element);
    },

    changeColor: function(color) {
       console.log('Меняем цвет у фигуры');
       this.element.style.background = color;
        //this.updateStyle();
    },

    move: function(where) {
        console.log('Перемещаем фигуру');
        var tempSize = 0;
        switch(where) {
          case 'down':
            tempSize =  parseInt(this.element.style.top, 10);
            tempSize = tempSize + 100;
            this.element.style.top = tempSize + 'px';
            break;
          case 'up':
            tempSize =  parseInt(this.element.style.top, 10);
            tempSize = tempSize - 100;
            this.element.style.top = tempSize + 'px';
            break;
          case 'left':
            tempSize =  parseInt(this.element.style.left, 10);
            tempSize = tempSize - 100;
            this.element.style.left = tempSize + 'px';
            break;
          case 'rigth':
          default:
            tempSize =  parseInt(this.element.style.left, 10);
            tempSize = tempSize + 100;
            this.element.style.left = tempSize + 'px';
        }
        //this.updateStyle();
    }
};

// Конструктоор объекта квадрат
function Square() {
    this.width = '100px';
    this.height = '100px';
    //this.color = 'red';
    this.position = 'absolute';
    this.top = '50px';
    this.left = '450px';
    this.element = document.createElement('div');

    this.updateStyle = function () {
        var squareDiv = this.element;

        squareDiv.style.width = this.width;
        squareDiv.style.height = this.height;
        squareDiv.style.background = this.background;
        squareDiv.style.color = this.color;
        squareDiv.style.position = this.position;
        squareDiv.style.top = this.top;
        squareDiv.style.left = this.left;

       document.body.appendChild(squareDiv)
    };
}

// Назначаем прототип
Square.prototype = proto;

//Конструктор объекта круг
function Circle() {
    this.width = '100px';
    this.height = '100px';
    this.border = '50px';
    this.position = 'absolute';
    this.top = '50px';
    this.left = '150px';
    this.id = 'circle';
    this.element = document.createElement( 'div' );

    this.updateStyle = function() {
        var circleDiv = this.element;

        circleDiv.style.width = this.width;
        circleDiv.style.height = this.height;
        circleDiv.style.background = this.background;
        circleDiv.style.borderRadius = this.border;
        circleDiv.style.position = this.position;
        circleDiv.style.top = this.top;
        circleDiv.style.left = this.left;
        circleDiv.style.id= this.id;

        document.body.appendChild(circleDiv)
    };
}

function changeColorForAll(color) {
    console.log('меняем цвет у двух фигур');

    shapes.forEach(function (shape) {
        shape.changeColor(color);
    });
}

//Назначаем прототип
Circle.prototype = proto;

//Создаем объекты
var square = new Square();
var circle = new Circle();
var shapes = [square, circle];

square.render();
circle.render();

circle.move('down');
square.move('down');

square.changeColor('red');
circle.changeColor('red');

changeColorForAll('black');
/*
//Анимация и таймеры (разбор темы)
var delay = 1000;
i = 0;

var startTimer = function() {
    if (i < 5) {
        console.log( 'функция startTimer сработала ' + i + ' раз' );
        setTimeout(startTimer, delay);
    }
    i++;
};

var timer = setTimeout(startTimer, delay); //вызываем функцию, 3000 - задержка 3 секудны

//alert('Alert!!!');

//clearTimeout(timer);  // останавливаем таймер

*/

