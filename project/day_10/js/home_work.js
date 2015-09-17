// решение домашки

$(document).ready(function () {

   var container = $('.main ul');    // находим элемент куда будем вставлять новые данные

    //обработка ввода задачи
    $('.header').submit(function (e) {
        console.log( 'was enter');

        e.preventDefault();    // отмена действия браузера по-умолчанию
        var value = $.trim($('#foo').val());   // trim удаляет пустые места в начале и в конце строки

        if (value) {
            container.append('<li><label><input type="checkbox">' + value + '</label></li>');

            console.log( 'очищаем поле');
            $('#foo').val('');    // очистил поле формы
        }
    });

    // обработка клика на завершенные
    $("a[href$='complited']").click(function(e) {    // находим ссылку "завершенные" и ставим
        console.log( 'was click on "Завершенные"');      //   на нее событие

        e.preventDefault();

        $('input[type="checkbox"]:not(:checked)').each(function(index, element) {    // выполняем обход всех инпутов
                                                                                    // выполняем для каждого из
                                                                                    // них функцию function
        $(element).closest('li').hide();   // ищем ближайшую лишку и прячем ее
       });
    });

    // обработка клика на "на все"
    $('.selected').click(function(e) {
        console.log( 'was click on "Все"');

        e.preventDefault();

        $('input[type="checkbox"]').each(function(index, element) {
            $(element).closest('li').show();
        });
    });

    //обработка клика на "не завершенные"
    $("a[href$='active']").click(function(e) {    // находим ссылку "не завершенные" и ставим
        console.log( 'was click on "Не завершенные"');      //   на нее событие

        e.preventDefault();

        $('input[type="checkbox"]:checked').each(function(index, element) {    // выполняем обход всех инпутов
                                                                                    //  и выполняем для каждого из
                                                                                    // них функцию function
        $(element).closest('li').hide();   // ищем ближайшую лишку и прячем ее

        });
    });
});
