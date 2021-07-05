(function () {
    'use strict';
    
    angular
		.module('bco-ripley-sig-app')
        .filter('fecha_temp', function () { 
            return function (input) {
                return moment.unix(input).format('DD-MM-YYYY');
            } ;
        }) ;

})();



