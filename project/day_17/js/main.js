define( "unit",
        ['jQuery'],
        function( jQuery ){
          return { foo : "bar" };
        }
);

//загрузка модуля
require(["util"], function(util) {
    alert("это выполнится только тогда, когда файл util.js будет загружен");
});