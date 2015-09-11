//Создание чата с помощью jQuery

$( function() {
    // Находим объекты
    var $send = $('#send'),
        $message = $('#message'),
        $list = $('#list');

    //Создаем действие на действие мыши
    $send.click(function() {
        console.log('was clicked');

        var mes = $message.val();
        $message.val('');
        console.log(mes);
        $list.append( '<li>' + mes + '</li>' );

    });
});