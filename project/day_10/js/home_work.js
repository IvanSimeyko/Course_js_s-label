// решение домашки

$(document).ready(function () {

   var container = $('.main ul');    // находим элемент куда будем вставлять новые данные

   $('.header').submit(function (e) {
       console.log( 'was enter');

       e.preventDefault();    // отмена действия браузера по-умолчанию
       var value = $.trim($('#foo').val());   // trim удаляет пустые места в начале и в конце строки

       if (value) {
           container.append('<li><label><input type="checkbox">' + value + '</label></li>');
           console.log( 'очищаем поле');
           $('#foo').val('');    // очистил поле
       }
   });

   $("a[href$='complited']").click(function(e) {    // находим ссылку "завершенные" и ставим
       console.log( 'was click on "Завершенные"');                          // на нее событие

       e.preventDefault();
   })
});
