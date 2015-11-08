var systemJs = (function() {

	var _modulesList = {};

	function _addScript(url) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        document.getElementsByTagName('head')[0].appendChild(script);
        //script.onload = callback;
    }

	return {
		requier: function( name){

			if( !_modulesList[ name ].loaded ) {
				_addScript(_modulesList[ name ].link);
			}
			return _modulesList[ name ].fabric();
		},
		define: function(name, createModule) {
			var moduleFabric,
				moduleLink;

			if (typeof createModule === 'string') {
				moduleLink = createModule;
			} else if(typeof createModule === 'function') {
				moduleFabric = createModule;
			} else {
				console.error('Second parameter should be string or function');
				return;
			}

			_modulesList[ name ] = {
				link: moduleLink,
				fabric: moduleFabric,
				loaded: typeof createModule === 'function'
			};
		}
	};

})();