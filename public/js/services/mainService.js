// MAIN SERVICE
function mainService() {

	var service = {

		word : [],

		get : function() {
			return service.word;
		},
		create : function(data) {
			service.word = data;
		},
	}
	return service;
};
