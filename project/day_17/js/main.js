systemJs.define( 'main', function() {

    var timer = systemJs.require("timer");

    function _render() {
        var text = timer.now();
        document.body.innerHTML = text;
    }

    return{
        init: function(){
            setInterval(_render,1000);
        }
    }
});
main.init();sd
d