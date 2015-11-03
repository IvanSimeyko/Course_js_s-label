require.config({
    baseUrl: 'js/',
    path: {
        jquery: 'jquery-2.1.4.min'
    }
});

require(['jquery'], function(){
    $('body').css({background: '#23232'})
});

define('hello', ['jquery'], function(jq){

});

require(['hello'])