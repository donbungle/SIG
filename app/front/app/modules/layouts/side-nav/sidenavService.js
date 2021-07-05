(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:menuService
	 * @description
	 * # menuService
	 * Service of the app
	 */

  	angular
		.module('bco-ripley-sig-app')
		.factory('MenuService', Menu);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Menu.$inject = ['$http'];

		function Menu ($http) {

			var menu = [
				
				{
					link: 'indicadores',
						name: 'Paneles Mensuales',
						icon: 'dashboard'
				},
				{
					link: 'template',
						name: 'Elementos web',
						icon: 'view_module'
				},
			    
		  	];

			return {
				listMenu: function () {
					return menu;
				}
		  	};

		}

})();
