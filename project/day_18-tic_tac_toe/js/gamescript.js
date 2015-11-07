// сощдаем общие переменные
var gameImgDir = 'data/';

var gTexts =  [];
gTexts['win1'] = 'Win ';
gTexts['win2'] = '!';
gTexts['playing'] = '...';
gTexts['start'] = 'Begin game!';

console.log(gTexts);
console.log(gTexts['start']);

var gField = [];    // игровое поле

// задаем размер игрового поля
function createField(w, h) {
    gField = new Array(w);    // создаем новый массив
    console.log( gField ); 
    for ( i=0; i<w; i++ ) gField[i] = new Array(h);
    console.log(gField)
}
createField(6, 2);
