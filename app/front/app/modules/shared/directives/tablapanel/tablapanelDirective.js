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
