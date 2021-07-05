(function () {
	'use strict';

	/**
	 * @ngdoc configuration file
	 * @name app.config:config
	 * @description
	 * # Config and run block
	 * Configutation of the app
	 */


	angular
		.module('bco-ripley-sig-app')
		.config(configure)
		.run(runBlock);

	configure.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', '$mdThemingProvider', 'ChartJsProvider'];

	function configure($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $mdThemingProvider, ChartJsProvider) {
		
		$locationProvider.hashPrefix('!');

		// This is required for Browser Sync to work poperly
		$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
		$httpProvider.defaults.useXDomain = true;
		delete $httpProvider.defaults.headers.common['X-Requested-With'];
		
		
		$urlRouterProvider
			.otherwise('/dashboard');
			
	
			$mdThemingProvider.theme('tema')
			.primaryPalette('purple')
			.accentPalette('amber')
			.warnPalette('pink')
			.backgroundPalette('grey');

			$mdThemingProvider.theme('tema2')
			.primaryPalette('grey')
			.accentPalette('amber')
			.warnPalette('purple')
			.backgroundPalette('grey');

			$mdThemingProvider.theme('tema3')
			.primaryPalette('grey')
			.accentPalette('red')
			.warnPalette('amber')
			.backgroundPalette('grey');

			$mdThemingProvider.theme('tema4')
			.primaryPalette('purple')
			.accentPalette('amber')
			.warnPalette('pink')
			.backgroundPalette('grey').dark();

			$mdThemingProvider.setDefaultTheme('tema');	
			$mdThemingProvider.alwaysWatchTheme(true);

			
			setTimeout(function(){
				//ChartJsProvider.setOptions({ responsive: true, chartColors : [ '#6a1b9a', '#ffc107', '#e91e63', '#EE3', '#EE3', '#EE3', '#EE3'] });
				ChartJsProvider.setOptions('line', {
					showLines: true
				});
			},100);
	}

	runBlock.$inject = ['$rootScope'];

	function runBlock($rootScope) {
		'use strict';
		$rootScope.app_name = "SIG";
		$rootScope.app = {};
		$rootScope.app.modo = 'tema'
	}


})();
