app.controller('MainController', ['$scope', '$window', 'CryptoProceTrackerApp', function($scope, $window, CryptoProceTrackerApp) {

	$scope.minMaxValues = {
		'Bitcoin': {
			'minValue': 0,
			'maxValue': 10000
		}, 
		'Litecoin': {
			'minValue': 0,
			'maxValue': 10000
		}, 
		'Ethereum': {
			'minValue': 0,
			'maxValue': 10000
		}, 
		'XRP': {
			'minValue': 0,
			'maxValue': 10000
		}, 
		'Stellar': {
			'minValue': 0,
			'maxValue': 10000
		}
	};

  $scope.$on('got new data!', function(event, args) {
    var requiredCryptoCurrencies = ['Bitcoin', 'Litecoin', 'Ethereum', 'XRP', 'Stellar']
  	var latestPrice = {};
  	var data = args.data;
  	for(var key in data.data) {
  		if(requiredCryptoCurrencies.indexOf(data.data[key].name) != -1) {
  			latestPrice[data.data[key].name] = data.data[key];
				if(data.data[key].quotes.USD.price > $scope.minMaxValues[data.data[key].name].maxValue
					|| data.data[key].quotes.USD.price < $scope.minMaxValues[data.data[key].name].minValue) {
					$window.alert("Value of " + data.data[key].name + " i.e. " + data.data[key].quotes.USD.price +" is not in range");
				}
			}
  	}
    $scope.cryptoCurrenciesPrice = latestPrice;
  });
}]);
