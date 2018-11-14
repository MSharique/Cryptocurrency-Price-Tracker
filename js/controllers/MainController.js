app.controller('MainController', ['$scope', 'CryptoProceTrackerApp', function($scope, CryptoProceTrackerApp) {

  $scope.$on('got new data!', function(event, args) {
    var requiredCryptoCurrencies = ['Bitcoin', 'Litecoin', 'Ethereum', 'XRP', 'Stellar']
  	var latestPrice = {};
  	var data = args.data;
  	for(var key in data.data) {
  		if(requiredCryptoCurrencies.indexOf(data.data[key].name) != -1) {
  			latestPrice[data.data[key].name] = data.data[key];
  		}
  	}
    $scope.cryptoCurrenciesPrice = latestPrice;
  });
}]);
