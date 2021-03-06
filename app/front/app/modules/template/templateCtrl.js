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
		.module('bco-ripley-sig-app')
		.controller('TemplateCtrl', Template);

		Template.$inject = ['ColorService'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Template(ColorService) {
			/*jshint validthis: true */
			var vm = this;
			vm.colores_paletas2 = ColorService.getColoresPaletaThemeActual();
			console.log('vm.colores_paletas2', vm.colores_paletas2);
			//Sorting Hex Color:
			var scheme = [
				"#4C4C4C","#1F2029","#35404E","#282938","#00A0BE","#C67C48","#32CF72",            "#4155D1","#B86838","#D81196","#149C92","#786DC4","#DB2C38","#83C057",          "#A4A4A4","#55747C","#FFFFFF"
				];
				
					
			var Color = function Color(hexVal) { //define a Color class for the color objects
				console.log('***********************');
				this.hex = hexVal;
			};
			
			var constructColor = function(colorObj){
				var hex = colorObj.hex.substring(1);
				/* Get the RGB values to calculate the Hue. */
				var r = parseInt(hex.substring(0, 2), 16) / 255;
				var g = parseInt(hex.substring(2, 4), 16) / 255;
				var b = parseInt(hex.substring(4, 6), 16) / 255;
				
				/* Getting the Max and Min values for Chroma. */
				var max = Math.max.apply(Math, [r, g, b]);
				var min = Math.min.apply(Math, [r, g, b]);
				
				
				/* Variables for HSV value of hex color. */
				var chr = max - min;
				var hue = 0;
				var val = max;
				var sat = 0;
				
					
				if (val > 0) {
					/* Calculate Saturation only if Value isn't 0. */
					sat = chr / val;
					if (sat > 0) {
						if (r == max) {
							hue = 60 * (((g - min) - (b - min)) / chr);
							if (hue < 0) {
								hue += 360;
							}
						} else if (g == max) {
							hue = 120 + 60 * (((b - min) - (r - min)) / chr);
						} else if (b == max) {
							hue = 240 + 60 * (((r - min) - (g - min)) / chr);
						}
					}
				}
				colorObj.chroma = chr;
				colorObj.hue = hue;
				colorObj.sat = sat;
				colorObj.val = val;
				colorObj.luma = 0.3 * r + 0.59 * g + 0.11 * b;
				colorObj.red = parseInt(hex.substring(0, 2), 16);
				colorObj.green = parseInt(hex.substring(2, 4), 16);
				colorObj.blue = parseInt(hex.substring(4, 6), 16);
				return colorObj;
			};
				
			var sortColorsByLuma = function (colors) {
				return colors.sort(function (a, b) {
					return a.val - b.val;
				});
			};
			
			var mapHex = function(color) {
				return color.hex;
			}
			
			var outputColors = function(hexArray) { 
				var colors = [];
				angular.forEach(hexArray, function (v, i) {
					var color = new Color(v);
					constructColor(color);
					colors.push(color);
				});
				
				sortColorsByLuma(colors);
				
				var colores = _.map(colors, 'hex');
				console.log('colors',colors);
				return colores;
			};
			
			vm.colores_paletas = [];
			angular.forEach(vm.colores_paletas2, function(paleta, i){
				vm.colores_paletas.push(outputColors(paleta));
			});
		}

})();
