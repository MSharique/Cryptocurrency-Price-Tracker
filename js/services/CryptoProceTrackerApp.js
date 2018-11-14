app.service('CryptoProceTrackerApp', ['$http', '$rootScope', '$interval', function($http, $rootScope, $interval) { 
  
  function fetchApiData() {
    return $http.get('https://api.coinmarketcap.com/v2/ticker/').then(function successCallback(response) {
      updatedData = response.data;
      $rootScope.$broadcast('got new data!', { data: updatedData });
    }, function failureCallback(reason) {
      console.log(reason);
    })
  }

  var updatedData = {}; //object to be broadcased
  $interval(function() {
    fetchApiData()
  }, 300000); //fetch data in every 5 min
  fetchApiData(); //initial fetch
}]);
