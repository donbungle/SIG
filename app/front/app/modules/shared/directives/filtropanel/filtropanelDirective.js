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
					//column: '=',
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
