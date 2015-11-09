// разбор  и Function Expression

// пример Function Declaration
sayHi('John');   // вызов функции

function sayHi(name){             // объявление функции
    console.log( 'Hello, ' + name );   // (возможно после вызова)
}

// пример Function Declaration

sayHello = function() {             // объявлени функции происходит
    console.log( 'Hello, Ivan' );   // до ее вызова
};

sayHello();

// перезапись переменной (следим за переменнйо sayHi)
var age = prompt('Сколько вам лет?');

var sayHi;
console.log( sayHi );

if (age >= 18) {
  sayHi = function() {
    alert( 'Прошу Вас!' );
  }
} else {
  sayHi = function() {
    alert( 'До 18 нельзя' );
  }
}

sayHi();
console.log( sayHi );


