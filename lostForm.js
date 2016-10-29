angular.module('portalApp')
.controller('lostFoundCtrl', ['$scope', function ($scope) {
    
    // Show main view in the first column as soon as controller loads
	$scope.portalHelpers.showView('lostFoundlostForm.html', 1);

}]);    