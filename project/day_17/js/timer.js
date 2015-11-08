systemJs.define('timer', function() {
	return {
		//@return string, 12:45:23
		now: function() {
			var dateNow = new Date(),
				hours = dateNow.getHours(),
				minutes = dateNow.getMinutes(),
				seconds = dateNow.getSeconds();

			return hours + ':' + minutes + ':' + seconds;
		},
	};
});