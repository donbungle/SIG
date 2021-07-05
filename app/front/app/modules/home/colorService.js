(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:colorService
	 * @description
	 * # servicioService
	 * Service of the app
	 */

		angular
		.module('bco-ripley-sig-app')
		.factory('ColorService', ColorService);
	
		ColorService.$inject = ['$mdTheming','$rootScope'];
		
		function ColorService($mdTheming,$rootScope) {
			console.log('---ColorService');
			
			var service = {
				getThemeActual: getThemeActual,
				getPaletasTheme: getPaletasTheme,
				getColoresPaleta: getColoresPaleta,
				getPaletaPrimary: getPaletaPrimary,
				getPaletaAccent: getPaletaAccent,
				getPaletaWarn: getPaletaWarn,
				getColoresThemeActual: getColoresThemeActual,
				getColoresPaletaThemeActual: getColoresPaletaThemeActual,
			};
			return service;
			
			function getColoresPaleta(paleta){
				return _.map($mdTheming.PALETTES[paleta], function(p){return p.hex;});
			}

			function getThemeActual(){
				console.log('getThemeActual');
				return $rootScope.app.modo;
			}
			
			function getPaletaPrimary(theme_name){
				if(theme_name == undefined){
					theme_name = getThemeActual();
				}
				return getPaletasTheme(theme_name)[0];
			}

			function getPaletaAccent(theme_name){
				if(theme_name == undefined){
					theme_name = getThemeActual();
				}
				return getPaletasTheme(theme_name)[1];
			}

			function getPaletaWarn(theme_name){
				if(theme_name == undefined){
					theme_name = getThemeActual();
				}
				return getPaletasTheme(theme_name)[2];
			}

			function getPaletasTheme(theme_name){
				if(theme_name == undefined){
					theme_name = getThemeActual();
				}
				return _.uniq(_.map($mdTheming.THEMES[theme_name].colors, function(c){return c.name;}));
			}

			function getColoresThemeActual(theme_name){
				var colores_tema = [];
				if(theme_name == undefined){
					theme_name = getThemeActual();
				}
				var paletas = getPaletasTheme(theme_name);
				angular.forEach(paletas, function(paleta, i){
					var colores = getColoresPaleta(paleta);
					//console.log('colores', colores);
					angular.forEach(colores, function(color, i){
						colores_tema.push(color);
					});
				});
				return colores_tema;
			}

			function getColoresPaletaThemeActual(theme_name){
				var colores_tema = [];
				if(theme_name == undefined){
					theme_name = getThemeActual();
				}
				var paletas = getPaletasTheme(theme_name);
				angular.forEach(paletas.slice(0, 3), function(paleta, i){
					var colores = getColoresPaleta(paleta);
					colores_tema.push(colores.sort());
				});
				return colores_tema;
			}




	
		}
})();
