systemJs.define('main', function() {
	
	var timer = systemJs.requier('timer');

	function _render() {
		document.body.innerHTML = timer.now();
	}

	return {
		init: function() {
				setInterval(_render, 1000);
		}
	}
});