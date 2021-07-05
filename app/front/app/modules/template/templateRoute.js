'use strict';

/**
 * @ngdoc function
 * @name app.route:templateRoute
 * @description
 * # templateRoute
 * Route of the app
 */

angular.module('template')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('home.template', {
				url:'/template',
				templateUrl: 'app/modules/template/template.html?1',
				controller: 'TemplateCtrl',
				controllerAs: 'vm'
			});
		
	}]);
