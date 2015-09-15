// решение домашки

$(document).ready(function () {

    var container = $('.main ul');
   $('.header').submit(function (e) {
       e.preventDefault();
       var value = $.trim($('#foo').val());
       if (value) {
           container.append('<div><label><input type="checkbox">' + value + '</label><div>');
       }
   });
});






