// сощдаем общие переменные
var gameImgDir = 'images/';

var gTexts =  [];
gTexts['win1'] = 'Win ';
gTexts['win2'] = '!';
gTexts['playing'] = '...';
gTexts['start'] = 'Begin game!';

console.log(gTexts);
console.log(gTexts['start']);

var gField = [];    // переменная, отвечающая за размер игрового поля

// задаем размер игрового поля
function createField(w, h) {
    gField = new Array(w);    // создаем новый массив
    //console.log( gField );
    for ( i = 0; i < w; i++ ) gField[i] = new Array(h);
    //console.log(gField)

    console.log(createField(6, 2));
    console.log( gField );

    var hT = "<table cellpadding = '0' cellspacing = '0'>"; //заголовок тега таблицы
    for(j = 0; j < h; j++ ){
        hT += "<tr>";    // создание строки в таблице
        for (i = 0; i < w; i++) {    //вставляем ячейки в строку
            hT += "<td>";
            hT += "<img id = 'c"+i+"_"+j+"' stc = '"+gameImgDir+"c_null.gif' alt = '' onclick = 'onCellClk("+i+", "+j+")'>";
            hT += "</td>";
        }
        hT += "</tr>";    //конец строки
    }

    document.getElementById('game').innerHTML = hT + "</table>";    // вставка таблицы на страницу
    document.getElementById('gameinfo').innerText = gTexts['start'];    // отображаем сообщение
}
