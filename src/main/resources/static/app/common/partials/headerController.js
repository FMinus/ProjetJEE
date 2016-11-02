define([ 'app' ], function(app) {
	app.controller('headerController', headerController);

	headerController.$inject = ['$scope'];

	function headerController($scope) {
		$scope.headerMessage = "Header";

	}
	

});
