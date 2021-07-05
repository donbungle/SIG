angular.module('bco-ripley-sig-app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/modules/home/dashboard.html',
    "<div class=\"md-padding\" flex layout-sm=\"column\">\n" +
    "    <md-card class=\"text-center\">\n" +
    "        <md-card-content>\n" +
    "            <h1>{{ vm.title }}</h1>\n" +
    "            <h2>{{ vm.description }}</h2>\n" +
    "            <h3>{{ vm.version }}</h3>\n" +
    "            \n" +
    "            <br>\n" +
    "            <md-divider class=\"margin-top-20\"></md-divider>\n" +
    "            <br>\n" +
    "\n" +
    "            <div layout=\"row\">\n" +
    "                <div flex=\"\" layout=\"column\">\n" +
    "                    <md-button class=\"\"  ng-href=\"/#!/indicadores\"><ng-md-icon icon=\"link\"></ng-md-icon> Ir al módulo</md-button>\n" +
    "                    <md-button class=\"md-warn md-hue-1\"  ng-href=\"/#!/indicadores\"><ng-md-icon icon=\"link\"></ng-md-icon> Ir al módulo</md-button>\n" +
    "                    <md-button class=\"md-accent md-hue-2\"  ng-href=\"/#!/indicadores\"><ng-md-icon icon=\"link\"></ng-md-icon> Ir al módulo</md-button>\n" +
    "                    <md-button class=\"md-primary md-hue-3\"  ng-href=\"/#!/indicadores\"><ng-md-icon icon=\"link\"></ng-md-icon> Ir al módulo</md-button>\n" +
    "                </div>        <div flex=\"\" layout=\"column\">\n" +
    "                    <md-button class=\"md-raised md-warn\"  ng-href=\"/#!/indicadores\"><ng-md-icon icon=\"link\"></ng-md-icon> Ir al módulo</md-button>\n" +
    "                    <md-button class=\"md-raised md-warn md-hue-1\"  ng-href=\"/#!/indicadores\"><ng-md-icon icon=\"link\"></ng-md-icon> Ir al módulo</md-button>\n" +
    "                    <md-button class=\"md-raised md-warn md-hue-2\"  ng-href=\"/#!/indicadores\"><ng-md-icon icon=\"link\"></ng-md-icon> Ir al módulo</md-button>\n" +
    "                    <md-button class=\"md-raised md-warn md-hue-3\"  ng-href=\"/#!/indicadores\"><ng-md-icon icon=\"link\"></ng-md-icon> Ir al módulo</md-button>\n" +
    "                </div>\n" +
    "                <div flex=\"\" layout=\"column\">\n" +
    "                    <md-button class=\"md-raised md-accent\"  ng-href=\"/#!/indicadores\"><ng-md-icon icon=\"link\"></ng-md-icon> Ir al módulo</md-button>\n" +
    "                    <md-button class=\"md-raised md-accent md-hue-1\"  ng-href=\"/#!/indicadores\"><ng-md-icon icon=\"link\"></ng-md-icon> Ir al módulo</md-button>\n" +
    "                    <md-button class=\"md-raised md-accent md-hue-2\"  ng-href=\"/#!/indicadores\"><ng-md-icon icon=\"link\"></ng-md-icon> Ir al módulo</md-button>\n" +
    "                    <md-button class=\"md-raised md-accent md-hue-3\"  ng-href=\"/#!/indicadores\"><ng-md-icon icon=\"link\"></ng-md-icon> Ir al módulo</md-button>\n" +
    "                </div>\n" +
    "                <div flex=\"\" layout=\"column\">\n" +
    "                    <md-button class=\"md-raised md-primary\"  ng-href=\"/#!/indicadores\"><ng-md-icon icon=\"link\"></ng-md-icon> Ir al módulo</md-button>\n" +
    "                    <md-button class=\"md-raised md-primary md-hue-1\"  ng-href=\"/#!/indicadores\"><ng-md-icon icon=\"link\"></ng-md-icon> Ir al módulo</md-button>\n" +
    "                    <md-button class=\"md-raised md-primary md-hue-2\"  ng-href=\"/#!/indicadores\"><ng-md-icon icon=\"link\"></ng-md-icon> Ir al módulo</md-button>\n" +
    "                    <md-button class=\"md-raised md-primary md-hue-3\"  ng-href=\"/#!/indicadores\"><ng-md-icon icon=\"link\"></ng-md-icon> Ir al módulo</md-button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </md-card-content>\n" +
    "    </md-card>\n" +
    "</div>\n"
  );


  $templateCache.put('app/modules/home/home.html',
    "<md-sidenav layout=\"column\" class=\"md-sidenav-left md-whiteframe-2\" md-component-id=\"left\">\n" +
    "    <div ng-controller=\"SidenavCtrl as vm\" ng-cloak>\n" +
    "        <md-toolbar md-colors=\"{background: 'tema-primary-800'}\">\n" +
    "            <div layout=\"column\" class=\"md-toolbar-tools-bottom inset\">\n" +
    "                <div layout=\"row\">\n" +
    "                    <div flex=\"80\" style=\"margin-top: 10px;\">\n" +
    "                        <div>\n" +
    "                            <img src=\"app/assets/images/logo-app-hor.png\" style=\"height:30px;\"/>\n" +
    "                            <!-- {{vm.app_name}} -->\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </md-toolbar>\n" +
    "        <md-list>\n" +
    "            <md-list-item ui-sref=\"home.dashboard\">\n" +
    "                <div class=\"inset\">\n" +
    "                    <ng-md-icon icon=\"home\"></ng-md-icon>\n" +
    "                </div>\n" +
    "                <p> Inicio </p>\n" +
    "            </md-list-item>\n" +
    "            <md-list-item ng-repeat=\"item in vm.menu\" ng-click=\"vm.navigateTo('home.' + item.link)\">\n" +
    "                <div class=\"inset\" ng-show=\"item.icon\">\n" +
    "                    <ng-md-icon icon=\"{{item.icon}}\"></ng-md-icon>\n" +
    "                </div>\n" +
    "                <p > {{ item.name }}</p>\n" +
    "            </md-list-item>\n" +
    "            \n" +
    "        </md-list>\n" +
    "    </div>\n" +
    "</md-sidenav>\n" +
    "\n" +
    "<div layout=\"column\" class=\"relative\" layout-fill role=\"main\" ng-controller=\"LayoutCtrl as layout\" ng-cloak>\n" +
    "    <md-toolbar md-colors=\"{background: 'tema-primary-800'}\" ng-show=\"!showSearch\">\n" +
    "        <div class=\"md-toolbar-tools\" style=\"margin-top:0px;\">\n" +
    "            <md-button class=\"md-icon-button\" ng-click=\"layout.toggleSidenav('left')\" aria-label=\"Menu\">\n" +
    "                <ng-md-icon icon=\"menu\"></ng-md-icon>\n" +
    "            </md-button>\n" +
    "            <img src=\"app/assets/images/logo-app-hor.png\" style=\"height:30px;margin-top:5px;\"/>\n" +
    "            <!-- <h3>{{vm.app_name}}</h3> -->\n" +
    "            <span flex></span>\n" +
    "        </div>\n" +
    "    </md-toolbar>\n" +
    "    <md-toolbar class=\"md-hue-1\" ng-show=\"showSearch\">\n" +
    "        <div class=\"md-toolbar-tools\">\n" +
    "            <md-button ng-click=\"showSearch = !showSearch\" aria-label=\"Back\">\n" +
    "                <ng-md-icon icon=\"arrow_back\"></ng-md-icon>\n" +
    "            </md-button>\n" +
    "            <h3 flex=\"10\">\n" +
    "                Back\n" +
    "            </h3>\n" +
    "            <md-input-container md-theme=\"input\" flex>\n" +
    "                <label>&nbsp;</label>\n" +
    "                <input ng-model=\"search.who\" placeholder=\"Search ...\">\n" +
    "            </md-input-container>\n" +
    "        </div>\n" +
    "    </md-toolbar>\n" +
    "    <md-content layout=\"column\" flex md-scroll-y md-colors=\"false?{background: 'grey-900'}:{background: 'grey-400'}\">\n" +
    "        <div ui-view></div>\n" +
    "    </md-content>\n" +
    "</div>\n"
  );


  $templateCache.put('app/modules/indicadores/indicadores.html',
    "<div class=\"md-padding\" layout=\"column\" layout-padding=\"\" >\n" +
    "    <div layout=\"row\">\n" +
    "        <filtro-panel flex></filtro-panel>\n" +
    "    </div>\n" +
    "    <div layout=\"row\">\n" +
    "        <tabla-panel flex=\"60\" mostrar-item=\"true\"></tabla-panel>\n" +
    "        <tabla-panel flex=\"20\"></tabla-panel>\n" +
    "        <tabla-panel flex=\"20\"></tabla-panel>\n" +
    "    </div>\n" +
    "    <div layout=\"row\">\n" +
    "        <tabla-panel mostrar-item=\"true\" flex></tabla-panel>\n" +
    "        <tabla-panel mostrar-item=\"true\" flex></tabla-panel>\n" +
    "    </div>\n" +
    "    \n" +
    "                            \n" +
    "    <div ng-cloak flex>\n" +
    "    <md-content>\n" +
    "        <md-tabs class=\"md-primary md-hue-2\"  md-center-tabs2>\n" +
    "        <md-tab label=\"one\">\n" +
    "            <md-content class=\"md-padding\">\n" +
    "            <h2 class=\"md-display-1\">Tab One</h2>\n" +
    "            <p class=\"md-body-1\">\n" +
    "                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\n" +
    "                Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In\n" +
    "                sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\n" +
    "                feugiat ultricies mi.\n" +
    "            </p>\n" +
    "            </md-content>\n" +
    "        </md-tab>\n" +
    "        <md-tab label=\"two\">\n" +
    "            <md-content class=\"md-padding\">\n" +
    "            <h2 class=\"md-display-1\">Tab Two</h2>\n" +
    "            <p class=\"md-body-1\">\n" +
    "                Morbi viverra, ante vel aliquet tincidunt, leo dolor pharetra quam, at semper massa\n" +
    "                orci nec magna. Donec posuere nec sapien sed laoreet. Etiam cursus nunc in\n" +
    "                condimentum facilisis. Etiam in tempor tortor. Vivamus faucibus egestas enim,\n" +
    "                at convallis diam pulvinar vel. Cras ac orci eget nisi maximus cursus.\n" +
    "            </p>\n" +
    "            </md-content>\n" +
    "        </md-tab>\n" +
    "        <md-tab label=\"three\">\n" +
    "            <md-content class=\"md-padding\">\n" +
    "            <h2 class=\"md-display-1\">Tab Three</h2>\n" +
    "            <p class=\"md-body-1\">\n" +
    "                Integer turpis erat, porttitor vitae mi faucibus, laoreet interdum tellus. Curabitur\n" +
    "                posuere molestie dictum. Morbi eget congue risus, quis rhoncus quam. Suspendisse\n" +
    "                vitae hendrerit erat, at posuere mi. Cras eu fermentum nunc. Sed id ante eu orci\n" +
    "                commodo volutpat non ac est.\n" +
    "            </p>\n" +
    "            </md-content>\n" +
    "        </md-tab>\n" +
    "        </md-tabs>\n" +
    "    </md-content>\n" +
    "    </div>\n" +
    "    <md-card>\n" +
    "        <md-card-content layout=\"row\" layout-xs=\"column\" layout-md=\"column\">\n" +
    "            <div flex layout=\"column\">\n" +
    "            <h2 class=\"md-title\">Últimos Indicadores</h2>\n" +
    "            <div style=\"\">\n" +
    "            <div layout=\"row\" layout-xs=\"column\" layout-align=\"end none\" layout-wrap=\"\" >\n" +
    "                <div class=\"last-ind\" flex=\"auto\">\n" +
    "                    <div>\n" +
    "                        <md-card>\n" +
    "                            <md-card-content md-colors=\"{background: 'accent-100-0.3'}\" style=\"padding: 10px;\">\n" +
    "                                <h4 md-colors=\"{color: 'primary-400'}\" style=\"margin:0\" alt=\"{{item.name}}\">\n" +
    "                                    {{item.key | uppercase}} \n" +
    "                                    <md-button \n" +
    "                                        style=\"font-size: 10px;line-height: 20px;min-height: 20px;padding: 0 4px;\"\n" +
    "                                        class=\"md-link md-raised md-warn\" \n" +
    "                                        ng-click=\"vm.getValoresIndicador(item.key)\">\n" +
    "                                        <ng-md-icon icon=\"trending_up\"></ng-md-icon>  \n" +
    "                                        Ver historia\n" +
    "                                    </md-button>\n" +
    "                                </h4>\n" +
    "                                <div layout=\"column\" flex>\n" +
    "                                    <span md-colors=\"{color: 'primary-900'}\" style=\"font-size: 30px;\">\n" +
    "                                        {{item.value | number : 1}} \n" +
    "                                        <small md-colors=\"{color: 'accent-500'}\" style=\"font-size: 10px;\">({{item.unit | uppercase}})</small>\n" +
    "                                    </span>\n" +
    "                                    <span style=\"font-size: 10px;\">\n" +
    "                                        <ng-md-icon icon=\"today\"></ng-md-icon> \n" +
    "                                        {{item.date | fecha_temp}}\n" +
    "                                    </span>\n" +
    "                                </div>\n" +
    "                            </md-card-content>\n" +
    "                        </md-card>\n" +
    "                        \n" +
    "                        \n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                \n" +
    "\n" +
    "\n" +
    "            </div>\n" +
    "        </md-card-content>\n" +
    "    </md-card>\n" +
    "</div>\n"
  );


  $templateCache.put('app/modules/layouts/main-page/main-page.html',
    "    <md-toolbar ng-show=\"!showSearch\">\n" +
    "        <div class=\"md-toolbar-tools\">\n" +
    "            <md-button ng-click=\"layout.toggleSidenav('left')\" hide-gt-md aria-label=\"Menu\">\n" +
    "                <ng-md-icon icon=\"menu\"></ng-md-icon>\n" +
    "            </md-button>\n" +
    "            <h3>\n" +
    "                <a href=\"/\">bco-ripley-sig-app</a>\n" +
    "            </h3>\n" +
    "        </div>\n" +
    "    </md-toolbar>\n" +
    "    <md-toolbar class=\"md-hue-1\" ng-show=\"showSearch\">\n" +
    "        <div class=\"md-toolbar-tools\">\n" +
    "            <md-button ng-click=\"showSearch = !showSearch\" aria-label=\"Back\">\n" +
    "                <ng-md-icon icon=\"arrow_back\"></ng-md-icon>\n" +
    "            </md-button>\n" +
    "            <h3 flex=\"10\">\n" +
    "                Back\n" +
    "            </h3>\n" +
    "            <md-input-container md-theme=\"input\" flex>\n" +
    "                <label>&nbsp;</label>\n" +
    "                <input ng-model=\"search.who\" placeholder=\"Search ...\">\n" +
    "            </md-input-container>\n" +
    "\n" +
    "        </div>\n" +
    "    </md-toolbar>\n" +
    "    <md-content class=\"md-blue-grey-theme\" flex md-scroll-y>\n" +
    "        <ui-view layout=\"column\" layout-fill layout-padding>\n" +
    "\n" +
    "\n" +
    "        </ui-view>\n" +
    "    </md-content>\n"
  );


  $templateCache.put('app/modules/layouts/side-nav/sidenav.html',
    "        <md-toolbar class=\"md-tall md-hue-2\">\n" +
    "            <div layout=\"column\" class=\"md-toolbar-tools-bottom inset\">\n" +
    "                <div layout=\"row\">\n" +
    "                    <div flex=\"20\">\n" +
    "                        <img style=\"width: 36px; height: 36px; border-radius: 50%\"\n" +
    "                             actual-src=\"data:image/jpeg;base64,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\"\n" +
    "                             showloader=\"\" loader-class=\"preload\" loader-src=\"app/assets/images/loader.gif\"\n" +
    "                             src=\"data:image/jpeg;base64,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\">\n" +
    "                    </div>\n" +
    "                    <div flex=\"80\" style=\"margin-top: 10px;font-size: 1em;\">\n" +
    "                        <div>Fernando Monteiro</div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </md-toolbar>\n"
  );


  $templateCache.put('app/modules/shared/directives/filtropanel/filtropanel.html',
    "<md-card>\n" +
    "    <md-card-content layout=\"column\">\n" +
    "        <md-content>\n" +
    "            <md-toolbar class=\"md-hue-2\" style=\"min-height:40px;height:40px !important;\">\n" +
    "                <div class=\"md-toolbar-tools\" style=\"height:40px;\">\n" +
    "                    <md-button class=\"md-icon-button\" aria-label=\"Filtros\" ng-disabled=\"true\">\n" +
    "                       <ng-md-icon icon=\"filter_list\"></ng-md-icon>\n" +
    "                    </md-button>\n" +
    "                    <h3 flex md-truncate>Filtros</h3>\n" +
    "                    <md-button class=\"md-icon-button md-accent\" aria-label=\"More\">\n" +
    "                        <ng-md-icon icon=\"more_vert\"></ng-md-icon>\n" +
    "                    </md-button>\n" +
    "                    <md-button class=\"md-icon-button\" aria-label=\"Favorite\">\n" +
    "                        <ng-md-icon icon=\"remove\"></ng-md-icon>\n" +
    "                    </md-button>\n" +
    "                </div>\n" +
    "            </md-toolbar>\n" +
    "            <md-content layout=\"column\" layout-padding=\"\">\n" +
    "                <form class=\"md-inline-form\">\n" +
    "                    <div layout=\"row\" layout-wrap>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Panel</label>\n" +
    "                            <md-select ng-model=\"filtro.panel\">\n" +
    "                                <md-option ng-repeat=\"panel in vm.paneles\" value=\"{{panel}}\">\n" +
    "                                    {{panel}}\n" +
    "                                </md-option>\n" +
    "                            </md-select>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container>\n" +
    "                            <label>Periodo</label>\n" +
    "                            <md-datepicker ng-model=\"filtro.periodo\" md-placeholder=\"Seleccione Periodo\" md-mode=\"month\"></md-datepicker>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container style=\"top:-10px;\">\n" +
    "                            <md-button class=\"md-raised md-warn\"  ng-href=\"/#!/indicadores\"><ng-md-icon icon=\"filter_list\"></ng-md-icon> Aplicar</md-button>\n" +
    "                        </md-input-container>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </md-content>\n" +
    "        </md-content>\n" +
    "    </md-card-content>\n" +
    "    <!--<md-card-actions layout=\"row\" layout-padding=\"\">\n" +
    "        <md-card-icon-actions>\n" +
    "            <md-button class=\"md-raised md-primary\"  ng-href=\"/#!/indicadores\"><ng-md-icon icon=\"clear\"></ng-md-icon> Cancelar</md-button>\n" +
    "            <md-button class=\"md-raised md-warn\"  ng-href=\"/#!/indicadores\"><ng-md-icon icon=\"delete\"></ng-md-icon> Borrar</md-button>\n" +
    "            <md-button class=\"md-raised md-accent\"  ng-href=\"/#!/indicadores\"><ng-md-icon icon=\"save\"></ng-md-icon> Guardar</md-button>\n" +
    "        </md-card-icon-actions>\n" +
    "    </md-card-actions>-->\n" +
    "</md-card>\n"
  );


  $templateCache.put('app/modules/shared/directives/tablapanel/tablapanel.html',
    "<md-card>\n" +
    "    <md-card-content layout=\"column\" style=\"min-height: 224px;\">\n" +
    "        <table>\n" +
    "            <thead>\n" +
    "                <tr md-colors=\"{background: 'tema-primary-800'}\" >\n" +
    "                    <th ng-show=\"vm.mostrarItem\"># CLIENTES (miles)</th>\n" +
    "                    <th>Feb-20</th>\n" +
    "                    <th>Feb-21</th>\n" +
    "                    <th>% var.</th>\n" +
    "                </tr>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "                <tr class=\"total\">\n" +
    "                    <td ng-show=\"vm.mostrarItem\" class=\"item\">VU</td>\n" +
    "                    <td>888</td>\n" +
    "                    <td>999999</td>\n" +
    "                    <td>20%</td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <td ng-show=\"vm.mostrarItem\" class=\"item\">CON ACTIVIDAD</td>\n" +
    "                    <td>999999</td>\n" +
    "                    <td>999999</td>\n" +
    "                    <td>20%</td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <td ng-show=\"vm.mostrarItem\" class=\"item\">CLIENTES EPU EMITIDO</td>\n" +
    "                    <td>999999</td>\n" +
    "                    <td>999999</td>\n" +
    "                    <td>20%</td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <td ng-show=\"vm.mostrarItem\" class=\"item\">CLIENTES EPU COBRO</td>\n" +
    "                    <td>999999</td>\n" +
    "                    <td>999999</td>\n" +
    "                    <td>20%</td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <td ng-show=\"vm.mostrarItem\" class=\"item\">CLIENTES CON SALDO EOP</td>\n" +
    "                    <td>999999</td>\n" +
    "                    <td>999999</td>\n" +
    "                    <td>20%</td>\n" +
    "                </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "    </md-card-content>\n" +
    "</md-card>"
  );


  $templateCache.put('app/modules/template/template.html',
    "<div class=\"container\">\n" +
    "	<h1>Content from: template page</h1>\n" +
    "</div>\n"
  );

}]);
