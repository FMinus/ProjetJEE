define(['angular','angularAMD','ngRoute','cssInjector','ngCookies'],function(appRoot,angularAMD,cssInjector,ngCookies)
{	 
	var app = angular.module("webbapp",['ngRoute','angular.css.injector','ngCookies']);

	app.config(['$routeProvider', function($routeProvider){
      
        $routeProvider
            .when('/back', angularAMD.route( {
                title : 'Add User',
                controller : 'MainCtrl',
                controllerAs: 'vm',
                templateUrl: '/app/module/authentification/partials/hello.html',
                controllerUrl: '/app/module/authentification/controllers/MainCtrl.js'
            }))
            .when('/',angularAMD.route(
            {
            	title : 'Login',
                controller : 'loginController',
                controllerAs: 'login',
                templateUrl: '/app/module/authentification/partials/login.html',
                controllerUrl: '/app/module/authentification/controllers/loginController.js',
                //resolve: 
                //resolve: resolveController('/app/module/authentification/controllers/loginController.js')		
            }))
            .otherwise({
                redirectTo : '/error'
            });
    }]);
	
	//console.log(appRoot);

	return angularAMD.bootstrap(app);
	//return angularAMD.bootstrap(appRoot.app);
	
	

});


