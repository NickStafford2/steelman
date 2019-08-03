// Factory/Service
// Style Guide: https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#servicesangular
//
// Since services are so simmilar to factories, use factories instead for consistancy
//
// Singleton
//      all services are singletons
//      Factories are singletons and return an object that contains the members of the service.
//
// Single Responsibility
//      A factory should only do one thing
//
// Accessible Members Up Top
//      Expose the callable members of the service (its interface) at the top
//
// Function Declarations to Hide Implementation Details
//      keeps code readable
//      separates implementation from interface

angular
    .module('finance', [])
    .factory('currencyConverter', ['$http', currencyConverter]);

function currencyConverter($http) {
    var currencies = ['USD', 'EUR', 'CNY'];
    var usdToForeignRates = {};

    var convert = function(amount, inCurr, outCurr) {
        return amount * usdToForeignRates[outCurr] / usdToForeignRates[inCurr];
    };

    var refresh = function() {
        var url = 'https://api.exchangeratesapi.io/latest?base=USD&symbols=' + currencies.join(",");
        return $http.get(url).then(function(response) {
            usdToForeignRates = response.data.rates;
            usdToForeignRates['USD'] = 1;
        });
    };

    refresh();

    return {
        currencies: currencies,
        convert: convert
    };
};


/*
angular
    .module('finance', [])
    .factory('currencyConverter', ['$http', function($http) {
        // interface defined at top for easy reading
        var currencies = ['USD', 'EUR', 'CNY'];
        var service = {
            currencies: currencies, 
            convert: convert  // implementation defined below
        };
        // end public interface with a return 
        return service;

        // implementation details below 
        function convert(amount, inCurr, outCurr) {
            var usdToForeignRates = {};
            var url = 'https://api.exchangeratesapi.io/latest?base=USD&symbols=' + currencies.join(",");
            
            // call server to get infromation
            $http.get(url).then(
                function(response) {
                    usdToForeignRates = response.data.rates;
                    usdToForeignRates['USD'] = 1;
                }
            );
            return amount * usdToForeignRates[outCurr] / usdToForeignRates[inCurr];
            
            var usdToForeignRates = {};

            var refresh = function() {
                var url = 'https://api.exchangeratesapi.io/latest?base=USD&symbols=' + currencies.join(",");
                return $http.get(url).then(function(response) {
                    usdToForeignRates = response.data.rates;
                    usdToForeignRates['USD'] = 1;
                });
            };
            refresh();
            return amount * usdToForeignRates[outCurr] / usdToForeignRates[inCurr];
            
            return convertLocal();
        };

        function convertLocal(amount, inCurr, outCurr) {
            var usdToForeignRates = {
                USD: 1,
                EUR: 0.74,
                CNY: 6.09
            };
            return amount * usdToForeignRates[outCurr] / usdToForeignRates[inCurr];
        };
    }]);
    */