'use strict';

/**
 * @ngdoc function
 * @name applicationApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the applicationApp
 */
angular.module('applicationApp')
  .controller('ContactController', function ($scope) {
    $scope.email = 'mayanksaxena90@gmail.com';
    $scope.isLoading = true;
    $scope.$on('$viewContentLoaded', function(){
    	$scope.isLoading = false;
        //Here your view content is fully loaded !!
        var minHeight = $(window).height() - $("header").height()-$("footer").height()-20;
        $(".main").attr("style", "min-height: "+minHeight+"px;");
    });
  });
