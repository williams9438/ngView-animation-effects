app.controller('indexController', ['$scope', '$route', function($scope, $route) {

	// All effects list
    $scope.effects = [
        {name: 'Slide', className: 'slide'},
        {name: 'Slidedown', className: 'slidedown'},
        {name: 'Slideup', className: 'slideup'},
        {name: 'Pop in/out', className: 'pop'},
        {name: 'Fade in/out', className: 'fade'}
    ];

    $scope.selectedEffect = $scope.effects[0].className;

	// Current menu item
	$scope.isActive = function(path) {
		return $route.current && $route.current.regexp.test(path);
	};
    
}]);