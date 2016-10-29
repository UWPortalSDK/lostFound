angular.module('portalApp')
.controller('lostFoundCtrl', ['$scope', function ($scope) {
	
	// mock data
	$scope.items = [
		{
			title:'Honda Car Keys',
			location: ['EIT', ,],
            date: [new Date(1477756681984)],
			details: 'Also comes with 6 other keys and a gorilla keychain'
		},
		{
			title:'Winter Coat',
			location: ['M3'],
            date: [new Date(1477756681984)],
			details: "Has a fur lined hood, and a patch that says something about Calgary. Also has 3 pockets on the inside."
		},
		{
			title:'Blue Metal Water Bottle',
			location: ['RCH'],
            date: [new Date(14777566819840)],
			details: 'Has a Waterloo Crest on it ...  and a lot of scratches on the bottom.'
		},
		{
			title:'Plastic Tupperware Bowl',
			location: ['E5'],
            date: [0],
			details: 'Proin sem quam, rutrum id ante id, scelerisque tempor quam. Curabitur pharetra turpis at sem placerat, non vehicula ligula tincidunt.'
		},
		{
			title:'Plaid Scarf',
			location: ['E5'],
            date: [0],
			details: 'Mauris nec ultricies metus. Cras et dictum justo. Nam a ullamcorper dolor. Cras fringilla metus vel facilisis vehicula.'
		},
		{
			title:'Waterloo Crested Binder',
			location: ['E5'],
            date: [0],
			details: 'Curabitur scelerisque lorem risus, in luctus orci hendrerit non. Praesent quis tellus dapibus dolor consectetur volutpat.'
		}
	];
	
	// Show main view in the first column as soon as controller loads
	$scope.portalHelpers.showView('lostFoundMain.html', 1);
	
	// This function gets called when user clicks an item in the list
	$scope.showDetails = function(item){
		// Make the item that user clicked available to the template
		$scope.detailsItem = item;		
		$scope.portalHelpers.showView('lostFoundDetails.html', 2);
	};
}]);