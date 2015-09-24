'use strict';

/**
 * @ngdoc overview
 * @name swordDesignscoukApp
 * @description
 * # swordDesignscoukApp
 *
 * Main module of the application.
 */
angular
  .module('swordDesignscoukApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });
  });
