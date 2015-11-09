// сощдаем общие переменные
// расположение графических элементов
var gameImgDir = 'images/';

var gTexts =  [];
gTexts['win1'] = 'Win ';
gTexts['win2'] = '!';
gTexts['playing'] = '...';
gTexts['start'] = 'Begin game!';

console.log(gTexts);
console.log(gTexts['start']);

var gField = [];    // переменная, отвечающая за размер игрового поля

// функция создания нового игрового поля с размером w на h
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

//функция которая будет ставить в клетку с координатами [x, y] значение t
function setCell(x, y , t) {
    gField[x][y] = t;    //запомнить t в массиве
    var imgsrc = gameImgDir + 'c_null.gif';   // изображение по умолчанию
    if (t == 'x') imgsrc = gameImgDir + 'c_x.gif';    // ставим крестик ...
    if (t == 'o') imgsrc = gamiImgDir + 'c_o.gif';    // ... или нолик
    var oName = 'c' + x + '_' + y;    //составление имени картинки
    document.getElementById('oName').src = imgsrc;    // замен изображения в Доме
    if (t!= null) document.getElementById('oName').alt = t;    //если картинки в браущере отключен, то игра будет
    // проходить в текстовом режиме
}

// функция для проверки кто победил
function isWin(){
    //проверка зоны 3 на 3...
    for ( stX=0; stX<=gField.length-3; stX++ ) for (stY= 0;
    stY<=gField[0].length-3; stY++) // Ксли размер поля больше трех
    {
        var lC = gField.length[stX][stY];    //проверка линии
        // если проверяемая кледка не содержит lC, то сбросить значние  lC
        if (lC != null) for ( i=0; i<3; i++ ) if ( gField[i+stX][i+stY] != lC ) lC = null;

        if ( lC != null ) return lC;   // если победа обнаружена
        lC = gField[2+stX][stY];
        if ( lC!=null) for ( i=0; i<3; i++ ) if ( gField[2-i+stX][i+stY]
            != lC ) lC = null;
        if ( lC!=null ) return lC;

        for (i = 0; i<3; i++ ) {    //проверка по вертикали
            lC = gField[stX+i][stY];
            if (lC!=null) for ( j=0; j<3; j++) if ( gField[i+stX][j+stY] !=
                lC ) lC = null;
            if ( lC != null ) return lC;
        }

        for ( j=0; j<3; j++ ) {    // проверка по горизонтали
            lC = gField[stX][stY+j];
            if (lC!=null) for ( i=0; i<3; i++ ) if ( gField[i+stX][j+stY]!=
            lC) lC = null;
            if (lC!=null) return lC;
        }
    }
    // TO DO - если все клетки заняты, но никто не победил, то ничья, но пока это условие не сделано.
    // Попробуйте сами доделать эту проверку
    return false;    // если никто не победил
}

// функция компьютерного игрока, который сначала методом перебора проверяет все вариантыб
//запуская isWin(), а ззатем делает ход, вызывая setCell(x, y, t)
function CompGame() {    // искусственный интелект :)
    var tx = null, ty = null, tp = 0;    //tp - приоритет выбранной целеврй клетки
    var stX = 0, stY = 0;
    for ( stX=0; stX<gField.length; stX++) for ( stY=0; stY<gField[0].length;
    stY++)    //для каждой клетки
    {
        var lC = gField[stX][stY];
        if ( (lC!='x') && (lC!='o')){    //только для пустых клеток
            gField[stX][stY]='x';
            if ( isWin()=='x' ) {    //пробуем победить
                tx = stX; ty = stY; tp = 3;
            } else if (tp<3) {
                gField[stX][stY]='o';
                if ( isWin()=='o' ) {    //пробуем помешать побудеить игроку
                    tx = stX; ty=stY; tp=2;

                } else if (tp<2) {    // или ...
                    var mini = -1, maxi = 1, minj = -1, maxj = 1;    // определяем четыре переменные
                    if (stX>=gField.length-1) maxi = 0; if (stY>=gField[0].length-1) maxj=0;
                    if (stX<1) mini=0; if (stY<1) minj=0;
                    // найти ближайший нолик...
                    for ( i=mini; i<maxi; i++ ) for ( j=minj; j<maxj; j++ )
                    if ( (i!=0) && (j!=0 ) ) {    //если есть своя занятая клетка - поближе к своим
                        if (gField[stX+i][stY=j]=='o') {
                            tx = stX; ty = stY;
                            tp=1;
                        }
                    }
                    if (tp<1) {    //или хотябы на свободную клеткупоставить
                        tx = stX; ty = stY;
                    }
                }
            }
            gField[stX][stY] = lC;
        }
    }
    if ( (tx!= null )&&( ty!= null ) ) {    //если целевая клетка выбрана
        setCell(tx, ty, 'o');    // поставимнолик в клетку
    }
}

//пишем логику прокраммы. Вызываем функцию по кликуб передаем ей координаты х,у.
//Вызываем isWin(), setCell(x,y,t) и CompGame(). Сообщаем информацию о победе.
function onCellClk(x, y) {

}