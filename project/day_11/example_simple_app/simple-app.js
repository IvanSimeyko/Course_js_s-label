(function iife() {
	var app = window.App || {};

	app.init = function() {
		console.log('Welcome to simple app');
		
		app.view.render1();
		app.view.render2();
	};

	window.App = app;
})();

