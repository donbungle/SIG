(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:templateTest
	 * @description
	 * # templateTest
	 * Test of the app
	 */

	describe('template test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('TemplateCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
