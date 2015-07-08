'use strict';

var sampleApp = angular.module('superadmin', []);
 
//Define Routing for app

sampleApp.config(['$routeProvider',
  function($routeProvider) {

    $routeProvider.
      when('/index', {
        templateUrl: '../superadmin/dashboard.html'
      }).
      when('/messages',{
      	templateUrl: '../superadmin/messages.html'
      }).
      when('/messages_detail',{
      	templateUrl: '../superadmin/messages_detail.html'
      }).
       when('/instructors', {
        templateUrl: '../superadmin/instructors.html'
      }).
       when('/instructors_details', {
        templateUrl: '../superadmin/instructors_details.html'
      }).
       when('/students', {
        templateUrl: '../superadmin/students.html'
      }).
        when('/student_details', {
        templateUrl: '../superadmin/student_details.html'
      }).
       when('/affiliates', {
        templateUrl: '../superadmin/affiliates.html'
      }).
       when('/affiliate_details', {
        templateUrl: '../superadmin/affiliate_details.html'
      }).
       when('/courses', {
        templateUrl: '../superadmin/courses.html'
      }).
       when('/categories', {
        templateUrl: '../superadmin/categories.html'
      }).
       when('/sub_categories', {
        templateUrl: '../superadmin/sub_categories.html'
      }).
       when('/billing', {
        templateUrl: '../superadmin/billing.html'
      }).
       when('/billing_course', {
        templateUrl: '../superadmin/billing_course.html'
      }).
       when('/billing_enrollment', {
        templateUrl: '../superadmin/billing_enrollment.html'
      }).
       when('/offer_zone', {
        templateUrl: '../superadmin/offer_zone.html'
      }).
       when('/offer_zone_create', {
        templateUrl: '../superadmin/offer_zone_create.html'
      }).
       when('/news', {
        templateUrl: '../superadmin/news.html'
      }).
       when('/news_create', {
        templateUrl: '../superadmin/news_create.html'
      }).
       when('/blogs', {
        templateUrl: '../superadmin/blogs.html'
      }).
       when('/blog_create', {
        templateUrl: '../superadmin/blog_create.html'
      }).

       when('/reports', {
        templateUrl: '../superadmin/reports.html'
      }).

       when('/refund', {
        templateUrl: '../superadmin/refund.html'
      }).

       when('/settings', {
        templateUrl: '../superadmin/settings.html'
      }).

      otherwise({
        redirectTo: '/index'
      });
}]);