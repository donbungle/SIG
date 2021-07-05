(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:templateService
	 * @description
	 * # templateService
	 * Service of the app
	 */

  	angular
		.module('template')
		.factory('TemplateService', Template);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Template.$inject = ['$http'];

		function Template ($http) {

		}

})();
