// решение домашки

$(document).ready( function(){

    // Находим объекты
    $message = $('.form-control');
    console.log($message);

    //Вешаем событие на нажатие enter
    $message.submit(function( event ) {
        console.log( 'was clicked' );
        if ($message.val().length > 0) {
            event.preventDefault();
            var mes = $message.val();
            console.log( 'mes' );
        }
    })
});