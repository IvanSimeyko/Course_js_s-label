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
//console.log(x());
//x(); //

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
// упраженение 4
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
    a = fn1();
    b = fn2();
    return add (a, b)
}
console.log(add2(one, two));

function returnValue(value){
    //a = value;
    return function() {
        return value
    }
}

var d = returnValue(5);
console.log(d());

function addnLoop(list){
    //var arrgs = [].slice.call(arguments);
    var total = 0;
    for (i=0; i<list.length; i++) {
        total = add2(list[i], returnValue(total));
   }
    return total
}
console.log(addnLoop([one, two]));

function addnRecur(list) {
    var listCopy = [].slice.call(list);
    console.log( listCopy[0] );
    if (listCopy.length <= 2) {
        return add2(listCopy[0], listCopy[1]);
    }
    return addnRecur(listCopy[0], listCopy.slice(1));
}

console.log( addnRecur( [one, two]) );
