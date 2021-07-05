(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:graficobarraDirective
	* @description
	* # graficobarraDirective
	* Directive of the app
	*/

	angular
		.module('bco-ripley-sig-app')
		.directive('graficoBarra', graficoBarra);

		graficoBarra.$inject = ['ColorService'];

		function graficoBarra (ColorService) {

			var directive = {
				link: link,
				restrict: 'E',
				replace:true,
				controller: graficoBarraController,
				controllerAs: 'vm',
				bindToController: false,
				templateUrl:'app/modules/shared/directives/graficobarra/graficobarra.html',
				scope: {
					//mostrarItem: '=?',
				}
				
			}

			return directive;

			function graficoBarraController(ColorService) {
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
						type: 'barrar',
						display: true,
						position: 'left'
						},
						{
						id: 'y-axis-2',
						type: 'barrar',
						display: true,
						position: 'right'
						}
					]
					}
				};





				vm.labels_barra = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
				vm.series_barra = ['Series A', 'Series B'];

				vm.data_barra = [
				[65, 59, 80, 81, 56, 55, 40],
				[28, 48, 40, 19, 86, 27, 90]
				];

				vm.llenarArray = llenarArray;
				var valor = 0;
				function llenarArray(columnas, cant_registros){
					var registros = [];
					var registro = [];
					for(var j=0;j<cant_registros;j++){
						registro = [];
						for(var i=0;i<columnas;i++){
							valor = Math.floor(Math.random() * 100) + 25; 
							registro.push(valor);
						}
						registros.push(registro);
					}
					return registros;
				}
				vm.colores = _.shuffle(ColorService.getColoresThemeActual());
			}

			function link(scope, element, attrs) {
				setTimeout(function(){
					console.log('scope',scope);
					scope.vm.data_barra = scope.vm.llenarArray(7,3);
				}, 1000);
			}

		}

})();
