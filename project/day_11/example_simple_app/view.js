(function iife2(argument) {
	var view = {
		render1: function() {
			console.info('Render 1');
		},
		render2: function() {
			console.info('Render 2');
		}
	};
	
	window.App = window.App || {};
	window.App.view = view;
})();