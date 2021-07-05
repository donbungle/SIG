(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:graficolineaDirective
	* @description
	* # graficolineaDirective
	* Directive of the app
	*/

	angular
		.module('bco-ripley-sig-app')
		.directive('graficoLinea', graficoLinea);

		graficoLinea.$inject = ['ColorService'];

		function graficoLinea (ColorService) {

			var directive = {
				link: link,
				restrict: 'E',
				replace:true,
				controller: graficoLineaController,
				controllerAs: 'vm',
				bindToController: false,
				templateUrl:'app/modules/shared/directives/graficolinea/graficolinea.html',
				scope: {
					//mostrarItem: '=?',
				}
				
			}

			return directive;

			function graficoLineaController(ColorService) {
				var vm = this;

				vm.labels = ["January", "February", "March", "April", "May", "June", "July"];
				vm.series = ['Series A', 'Series B'];
				vm.data = [
					[65, 59, 80, 81, 56, 55, 40],
					[28, 48, 40, 19, 86, 27, 90]
				];
				vm.onClick = function (points, evt) {
					console.log(points, evt);
				};
				vm.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
				vm.options = {
					scales: {
					yAxes: [
						{
						id: 'y-axis-1',
						type: 'linear',
						display: true,
						position: 'left'
						},
						{
						id: 'y-axis-2',
						type: 'linear',
						display: true,
						position: 'right'
						}
					]
					}
				};

				vm.colores = _.shuffle(ColorService.getColoresThemeActual());
			}

			function link(scope, element, attrs, vm, ColorService) {
				
			}	

		}

})();
