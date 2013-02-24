/**
 * Created with JetBrains WebStorm.
 * User: tomek
 * Date: 2/23/13
 * Time: 5:49 PM
 * To change this template use File | Settings | File Templates.
 */

var app = angular.module('myApp', []);

app.directive('helo', function() {
    return {
        restrict: "E",
        template: "<p>Hello, world</p>"
    }
});

//
//  All tags with 'enter' attribute will have something bound
//
app.directive('enter', function() {
    return function(scope, element, attrs) {

        element.bind("mouseenter", function() {
            console.log("I'm in. scope wynik = " + scope.wynik);
            element.addClass(attrs.enter);
//            scope.wynik = "IN";
            scope.setInfo("IN");
            scope.$apply();
        });


        element.bind("mouseout", function() {
            console.log("out");
            element.removeClass(attrs.enter);
            scope.wynik = "OUT";
            scope.$apply();
        });

    }
});

// -------------------------------------------------------
// Controllers
// -------------------------------------------------------
function AppCtrl($scope) {

    $scope.wynik = "...";

    $scope.setInfo = function(info) {
        $scope.wynik = info;
    }



}