
var systemJs = function(){
    var _modulesList = {};

    return{
        require: function(name) {
            if(_modulesList[name]){
                console.error('no such module')
            return;
        },
            return _modulesList[ name ].fabric();
        },
        define: function(name, createModule) {
            var moduleFabric,
                moduleLink

            if (typeof createModule === 'string'){
                moduleLink = createModule;
            }
            _modulesList[name] = createModule;
        }
    };
}();