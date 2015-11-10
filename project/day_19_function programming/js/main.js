// чистые фундкции
function bar(x, y){
    var z;
    foo(x);
    return [y, z];
    function foo(x) {
      y++;
      z = x * y;
    }
}

//bar (20, 5);
//bar (25, 5);

/*
var y = 5, z;
foo(20);
z;          //120

foo(25);
z;          //175
*/

// композиция - вызываем функции и отдаем результат другой функции в качестве параметров
// ручная композиция - повторяющиеся веци объединяем в фундкцию
// slice - вернет то что содержит массив

// неизменній 'immutable'
// var, const, let(аналлог var - блочный, область видимости, )
//const w = Object.freeze([4,5,6]) - неизменяемый объект

//Замыкания - функция запоминает переменные с наружни даже если она вызывается ниже(не дает удалить переменные = замыкает их на себе)
/*
Объявите foo(..) так что бы она возвращала функцию, которая запоминвает только первые два аргумента,
которые были переданы в foo(..), и всенда складывает их вместе.
*/

function foo(a, b) {
    return function() {
        return a + b
    }
}

var x = foo(3, 4);

//x(); // 7
//x(); // 7

// рекурсия - функция, которая вызывыает саму себя. Место выхода, вызов самой себя
//apply ???

function mult (x, y, z) {
  var args =[].slice.call(arguments);
    if (args.length <= 2) {
        return args[0] * args[1]
    }
    return (
        args[0] + mult.apply(null, args.slice(1))
    );
}

//console.log(mult(3, 4, 5)); // 60
//console.log(mult(3, 4, 5, 6)); // Oops

//Изменение списка -  map - возвращает новый массив
//Исключение из списка
// map, reduce, filter, for Each (методы массива) - спрашивают на собеседовании
function one(){
    return 1
}

function two() {
    return 2
}

function add(x, y) {
    return x + y
}

console.log(add(one(),two()));

function add2(fn1, fn2){

    return
}
