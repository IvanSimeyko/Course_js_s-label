// Решение домашки
// Прототип объектов
var proto = {
    background: 'pink',

    render: function() {
        console.log('Выводим фигуру на страницу');
        this.updateStyle();
        //document.body.appendChild(this.element);
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
    },

    run: function (where) {
       var delay = 3000;
       var i = 0;
       var obj = this;

       function startTimer() {
           setTimeout(handleTimeout, delay);
       }

       function handleTimeout() {
           obj.move(where);
           i++;
           console.log('Фигура передвинлась ' + i + ' раз');
           if (i < 10) startTimer();
       }

       startTimer();
    }
};

// Конструтор объекта треугольник
function Triangle() {
    this.width = '0';
    this.height = '0';
    this.borderLeft = '50px solid transparent';
    this.borderRight = '50px solid transparent';
    this.borderTop = '100px solid red';
    this.element = document.createElement('div');

    this.updateStyle = function () {
        var triangleDiv = this.element;

        triangleDiv.style.width = this.width;
        triangleDiv.style.height = this.height;
        triangleDiv.style.borderLeft = this.borderLeft;
        triangleDiv.style.borderRight = this.borderRight;
        triangleDiv.style.borderTop = this.borderTop;

        document.body.appendChild(triangleDiv)
    };
}

// Назначаем прототип
Triangle.prototype = proto;

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
    console.log('меняем цвет у всех фигур');

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
var triangle = new Triangle();

circle.render();
square.render();
triangle.render();

circle.move('right');
square.move('left');

circle.changeColor('red');
square.changeColor('red');

changeColorForAll('black');

square.run('right');
circle.run('right');
triangle.run('right');


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

