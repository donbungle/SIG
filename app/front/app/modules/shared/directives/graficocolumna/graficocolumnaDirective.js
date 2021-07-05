(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:graficocolumnaDirective
	* @description
	* # graficocolumnaDirective
	* Directive of the app
	*/

	angular
		.module('bco-ripley-sig-app')
		.directive('graficoColumna', graficoColumna);

		graficoColumna.$inject = ['ColorService'];

		function graficoColumna (ColorService) {

			var directive = {
				link: link,
				restrict: 'E',
				replace:true,
				controller: graficoColumnaController,
				controllerAs: 'vm',
				bindToController: false,
				templateUrl:'app/modules/shared/directives/graficocolumna/graficocolumna.html',
				scope: {
					//mostrarItem: '=?',
				}
				
			}

			return directive;

			function graficoColumnaController(ColorService) {
				var vm = this;
				
				vm.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
				vm.series = ['Series A', 'Series B'];

				vm.data = [
					[65, 59, 80, 81, 56, 55, 40],
					[28, 48, 40, 19, 86, 27, 90]
				];
				vm.colores = _.shuffle(ColorService.getColoresThemeActual());
			}

			function link(scope, element, attrs) {
				
			}

		}

})();
