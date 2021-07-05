/*!
* bco-ripley-sig-app - v0.0.1 - MIT LICENSE 2021-05-13. 
* @author Victor Catalan Perez
*/
(function() {
	'use strict';

	/**
	 * @ngdoc index
	 * @name app
	 * @description
	 * # app
	 *
	 * Main modules of the application.
	 */

	angular.module('bco-ripley-sig-app', [
		'ngResource',
		'ngAria',
		 'ngMaterial',
		'ngMdIcons',
		'ngCookies',
		'ngAnimate',
		'ngSanitize',
		'ui.router',
		'home',
		'indicadores',
		'template'
	]);

})();

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

	configure.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', '$mdThemingProvider'];

	function configure($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $mdThemingProvider) {

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

			$mdThemingProvider.setDefaultTheme('tema');	
			$mdThemingProvider.alwaysWatchTheme(true);
		
	}

	runBlock.$inject = ['$rootScope'];

	function runBlock($rootScope) {
		'use strict';
		$rootScope.url_indicadores = 'https://www.indecon.online/';
		$rootScope.app_name = "SIG";
	}


})();

(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.module:homeModule
	* @description
	* # homeModule
	* Module of the app
	*/

	angular.module('home', []);
})();

(function () {
	'use strict';
	
	/**
	 * @ngdoc function
	 * @name app.module:indicadoresModule
	 * @description
	 * # indicadoresModule
	 * Module of the app
	 */

  	angular.module('indicadores', ['chart.js']);

})();

(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.module:templateModule
	 * @description
	 * # templateModule
	 * Module of the app
	 */

  	angular.module('template', []);

})();

'use strict';

	/**
	* @ngdoc function
	* @name app.route:HomeRoute
	* @description
	* # HomeRoute
	* Route of the app
	*/

angular.module('bco-ripley-sig-app')
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider
			
			.state('home', {
				url: '',
				abstract: true,
				templateUrl: 'app/modules/home/home.html?1111',
				controller: 'HomeCtrl',
				controllerAs: 'vm'
			})
			.state('home.dashboard', {
				url:'/dashboard',
				templateUrl: 'app/modules/home/dashboard.html?222'
			});
			
	}]);

'use strict';

/**
 * @ngdoc function
 * @name app.route:indicadoresRoute
 * @description
 * # indicadoresRoute
 * Route of the app
 */

angular.module('indicadores')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
		.state('home.indicadores', {
			url:'/indicadores',
			templateUrl: 'app/modules/indicadores/indicadores.html',
			controller: 'IndicadoresCtrl',
			controllerAs: 'vm'
		});

		
	}]);

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
				templateUrl: 'app/modules/template/template.html',
				controller: 'TemplateCtrl',
				controllerAs: 'vm'
			});
		
	}]);

(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:HomeCtrl
	* @description
	* # HomeCtrl
	* Controller of the app
	*/

	angular
		.module('bco-ripley-sig-app')
		.controller('HomeCtrl', Home);

	Home.$inject = ['homeService', '$rootScope'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function Home(homeService, $rootScope) {
		/*jshint validthis: true */
		var vm = this;
		vm.app_name = $rootScope.app_name;
		vm.title = "Bienvenido a " + vm.app_name + "!";
		vm.description = "Sistema de Información Gerencial";
		vm.version = "Versión 1.0.0";
		vm.listFeatures = homeService.getFeaturesList();
		
	}	

})();

(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:indicadoresCtrl
	* @description
	* # indicadoresCtrl
	* Controller of the app
	*/

  	angular
		.module('indicadores')
		.controller('IndicadoresCtrl', Indicadores);

		Indicadores.$inject = ['$rootScope', 'IndicadoresService', '$timeout'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Indicadores($rootScope, IndicadoresService, $timeout) {
			/*jshint validthis: true */
			var vm = this;
			vm.indicadores = [];
			vm.testing = 'TEST XD';
			vm.labels = [];
			vm.series = [];
			vm.data = [];
			vm.indicador_default = 'dolar';


			vm.$onInit = onInit;
			vm.getValoresIndicador = getValoresIndicador;
			vm.onClick = function (points, evt) {
				console.log(points, evt);
			};

			function getValoresIndicador(ind){
				vm.series = [''];
				
				IndicadoresService.getValorIndicador(ind)
				.then(function(response) {
					console.log('click response', response.data);
					
					vm.ind_sel = response.data;
					vm.labels = [];						
					vm.data = [[]];

					var f = moment();
					
					angular.forEach(vm.ind_sel.values, function(o,i) {
						vm.labels.push(moment.unix(i).format('DD-MM-YYYY'));
						vm.data[0].push(o);						
					});

					
				},function(error) {
					
				});
				
			}

			function onInit(){
				IndicadoresService.getUltIndicadores()
				.then(function(response){
					console.log('response', response);
					vm.indicadores = response.data;
					$timeout(function(){
						vm.getValoresIndicador(vm.indicador_default);
					}, 100);
				},function(error){
					console.log('error', error);
				});
			}
		}

})();

(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:LayoutCtrl
	* @description
	* # LayoutCtrl
	* Controller of the app
	*/

	angular
		.module('bco-ripley-sig-app')
		.controller('LayoutCtrl', Layout);

	Layout.$inject = ['$mdSidenav', '$cookies', '$state', '$mdToast', '$mdDialog'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function Layout($mdSidenav, $cookies, $state, $mdToast, $mdDialog ) {
		/*jshint validthis: true */
		var vm = this;

		vm.toggleSidenav = function (menuId) {
			$mdSidenav(menuId).toggle();
		};

		vm.changePassword = function () {
			$mdToast.show(
				$mdToast.simple()
				.content('Password clicked!')
				.position('top right')
				.hideDelay(2000)
			);
		};

		vm.changeProfile = function (ev) {
			$mdDialog.show({
				controller: DialogController,
				templateUrl: 'tabDialog.tmpl.html',
				parent: angular.element(document.body),
				targetEvent: ev,
				clickOutsideToClose:true
			})
			.then(function(answer) {
				$mdToast.show(
					$mdToast.simple()
					.content('You said the information was "' + answer + '".')
					.position('top right')
					.hideDelay(2000)
				);

			}, function() {
				$mdToast.show(
					$mdToast.simple()
					.content('You cancelled the dialog.')
					.position('top right')
					.hideDelay(2000)
				);
			});

			function DialogController($scope, $mdDialog) {
				$scope.hide = function() {
					$mdDialog.hide();
				};

				$scope.cancel = function() {
					$mdDialog.cancel();
				};

				$scope.answer = function(answer) {
					$mdDialog.hide(answer);
				};
			}
		};


		vm.logOut = function () {

			alert('Implement your Function Here');
			// $cookies.put('dev_appserver_login', ' ');
			//$state.go('out', {}, {reload: true});

		};

		var originatorEv;
		vm.openMenu = function ($mdOpenMenu, ev) {
			originatorEv = ev;
			$mdOpenMenu(ev);
		};

	}

})();

(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:SidenavCtrl
	* @description
	* # SidenavCtrl
	* Controller of the app
	*/
	angular
		.module('bco-ripley-sig-app')
		.controller('SidenavCtrl', SidenavCtrl)
		.controller('SettingsCtrl', SettingsCtrl);

	// Injecting Denpendencies

	SidenavCtrl.$inject = ['$rootScope', '$mdSidenav', '$state', '$mdBottomSheet', '$mdToast', 'MenuService', '$scope'];
	SettingsCtrl.$inject = ['$mdBottomSheet'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function SidenavCtrl($rootScope, $mdSidenav, $state, $mdBottomSheet, $mdToast, MenuService, $scope) {
		/*jshint validthis: true */
		var vm = this;
		vm.app_name = $rootScope.app_name;
		vm.toggleSidenav = function (menuId) {
			$mdSidenav(menuId).toggle();
		};

		vm.closeSidenav = function() {
			$mdSidenav('left').close();
		};

		// Close menu on small screen after click on menu item.
		// Only use $scope in controllerAs when necessary; for example, publishing and subscribing events using $emit, $broadcast, $on or $watch.
		$scope.$on('$stateChangeSuccess', vm.closeSidenav);
		
		vm.menu = MenuService.listMenu();

		vm.admin = [
			{
				link: 'showListBottomSheet($event)',
				title: 'Settings',
				icon: 'settings'
			}
		];

		vm.navigateTo = function (target) {

			var page = target;

			$state.go(page);

		};

		vm.showSettingsBottom = function ($event) {
			vm.alert = '';
			$mdBottomSheet.show({
				template: '<md-bottom-sheet class="md-grid" layout="column" ng-cloak><div layout="row" layout-align="center center"><h4>With clickOutsideToClose option, drag down or press ESC to close</h4></div><md-list flex layout="row" layout-align="center center"><md-list-item ng-repeat="item in vm.items"><md-button class="md-grid-item-content" ng-click="vm.listItemClick($index)"><md-icon class="md-48">{{item.icon}}</md-icon><div class="md-grid-text"> {{ item.name }} </div></md-button></md-list-item></md-list></md-bottom-sheet>',
				controller: 'SettingsCtrl',
				controllerAs: 'vm',
				targetEvent: $event
			}).then(function (clickedItem) {
				$mdToast.show(
					$mdToast.simple()
					.content(clickedItem.name + ' clicked!')
					.position('top right')
					.hideDelay(2000)
				);
			});
		};

	}

	function SettingsCtrl($mdBottomSheet) {
		/*jshint validthis: true */
		var vm = this;

		vm.items = [
			{name: 'Roles', icon: 'assignment_ind'},
			{name: 'Notes', icon: 'speaker_notes'},
			{name: 'Tasks', icon: 'view_list'},
			{name: 'Inbox', icon: 'inbox'}
		];

		vm.listItemClick = function ($index) {
			var clickedItem = vm.items[$index];
			$mdBottomSheet.hide(clickedItem);
		};
	}

})();

(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:templateCtrl
	* @description
	* # templateCtrl
	* Controller of the app
	*/

  	angular
		.module('template')
		.controller('TemplateCtrl', Template);

		Template.$inject = [];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Template() {
			/*jshint validthis: true */
			var vm = this;

		}

})();

(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.service:homeService
	* @description
	* # homeService
	* Service of the app
	*/

	angular.module('bco-ripley-sig-app')
		.factory('homeService', homeService);

	homeService.$inject = ['$http'];

	function homeService($http) {

		var list = [
			{"feature": "Implemented Best Practices, following: John Papa's Guide"},
			{"feature": "Using Controller AS syntax"},
			{"feature": "Wrap Angular components in an Immediately Invoked Function Expression (IIFE)"},
			{"feature": "Declare modules without a variable using the setter syntax"},
			{"feature": "Using named functions"},
			{"feature": "Including Unit test with Karma"},
			{"feature": "Including UI options for Bootstrap or Angular-Material"},
			{"feature": "Including Angular-Material-Icons for Angular-Material UI"},
			{"feature": "Dynamic Menu generator for both themes"},
			{"feature": "Grunt task for Production and Development"}
		];

		return {
			getFeaturesList: getFeaturesList
		};

		function getFeaturesList() {
			return list;
		}

	}

})();

(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:indicadoresService
	 * @description
	 * # indicadoresService
	 * Service of the app
	 */

  	angular
		.module('indicadores')
		.factory('IndicadoresService', Indicadores);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Indicadores.$inject = ['$rootScope', '$http'];

		function Indicadores ($rootScope, $http) {
			var url = $rootScope.url_indicadores;

			var service = {
				getUltIndicadores: getUltIndicadores,
				getValorIndicadorFecha: getValorIndicadorFecha,
				getValorIndicador: getValorIndicador,
			};
			return service;
			
			function getUltIndicadores(){
				return $http({
					url: url + '/last',   
					method: "GET",
					params: {}
				});
			}
			
			function getValorIndicadorFecha(indicador, fecha){
				return $http({
					//https://www.indecon.online/date/cobre/02-01-2010
					url: url + '/date/' + indicador + '/' + fecha,  
					method: "GET",
					params: {}
				});
			}

			function getValorIndicador(indicador){
				return $http({
					//https://www.indecon.online/values/cobre
					url: url + '/values/' + indicador,   
					method: "GET",
					params: {}
				});
			}
		}

})();

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
		.module('')
		.factory('MenuService', Menu);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Menu.$inject = ['$http'];

		function Menu ($http) {

			var menu = [
				
					{
						link: 'template',
							name: 'Template'
					},
			    
		  	];

			return {
				listMenu: function () {
					return menu;
				}
		  	}

		}

})();

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
						name: 'Indicadores',
						icon: 'auto_awesome_motion'
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

(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:filtropanelDirective
	* @description
	* # filtropanelDirective
	* Directive of the app
	*/

	angular
		.module('bco-ripley-sig-app')
		.directive('filtroPanel', filtroPanel);

		function filtroPanel () {

			var directive = {
				link: link,
				restrict: 'E',
				replace:true,
				controller: filtroPanelController,
				controllerAs: 'vm',
				bindToController: false,				
				templateUrl:'app/modules/shared/directives/filtropanel/filtropanel.html',
				scope: {
					column: '=',
				}				
			}

			return directive;

			function filtroPanelController(){
				var vm = this;
			}

			function link(scope, element, attrs) {
				scope.mostrarItem = true;
				scope.vm.paneles = [
					'Resumen ASA',
					'Resumen CORP',
					'CL TC',
					'CL TD',
					'CL CHECK',
					'CL EQ',
					'CL DIG2',
					'PP COL',
					'PP COM',
					'PP CRX'
				];
				scope.filtro = {};
				scope.filtro.periodo = new Date();
				scope.filtro.panel = scope.vm.paneles[0];
			}

		}

})();

(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:tablapanelDirective
	* @description
	* # tablapanelDirective
	* Directive of the app
	*/

	angular
		.module('bco-ripley-sig-app')
		.directive('tablaPanel', tablaPanel);

		function tablaPanel () {

			var directive = {
				link: link,
				restrict: 'E',
				replace:true,
				controller: tablaPanelController,
				controllerAs: 'vm',
				bindToController: false,
				templateUrl:'app/modules/shared/directives/tablapanel/tablapanel.html?2',
				scope: {
					mostrarItem: '=?',
				}	
			}

			return directive;
			
			function tablaPanelController() {
				var vm = this;
				vm.mostrarItem = true;
			}

			function link(scope, element, attrs, vm) {
				//console.log('scope',scope);
				//console.log('element',element);
				//console.log('attrs',attrs);
				//console.log('vm',vm);
				scope.vm.mostrarItem = scope.mostrarItem;
			}

		}

})();
