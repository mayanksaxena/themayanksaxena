'use strict';

/**
 * @ngdoc function
 * @name applicationApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the applicationApp
 */
angular.module('applicationApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.isLoading = true;
	$scope.$on('$viewContentLoaded', function(){
		$scope.isLoading = false;
        //Here your view content is fully loaded !!
    });
  });
