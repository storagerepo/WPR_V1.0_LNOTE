'use strict';

var sampleUser = angular.module('user', []);

//Define Routing for app

sampleUser.config(['$routeProvider',
    function($routeProvider) {

        $routeProvider.
            when('/index', {
                templateUrl: 'startup.html'
            }).
            when('/login', {
                templateUrl: 'login.html'
            }).
            when('/register', {
                templateUrl: 'register.html'
            }).
            when('/create_account', {
                templateUrl: 'create_account.html'
            }).
            when('/offer_zone', {
                templateUrl: 'offer_zone.html'
            }).
            otherwise({
                redirectTo: '/index'
            });
    }]);