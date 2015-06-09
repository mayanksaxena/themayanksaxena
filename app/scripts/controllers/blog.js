'use strict';

/**
 * @ngdoc function
 * @name applicationApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the applicationApp
 */
angular.module('applicationApp')
  .controller('AboutCtrl', function ($scope, $http) {
    $scope.blogs = [];
    $scope.isLoading = true;
    $http({ method: 'GET', url: 'http://www.themayanksaxena.com/blogs/list' }).
    success(function (data, status, headers, config) {
        console.log("data", data);
        if(typeof data.blogs !== "undefined")
            $scope.blogs = data.blogs;
        $scope.isLoading = false;
    }).
    error(function (data, status, headers, config) {
        console.log("data", data);
        $scope.isLoading = false;
    });
    $scope.$on('$viewContentLoaded', function() {
        //Here your view content is fully loaded !!
        var minHeight = $(window).height() - $("header").height()-$("footer").height()-20;
        $(".main").attr("style", "min-height: "+minHeight+"px;");
    });
  });
