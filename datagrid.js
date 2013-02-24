var app = angular.module('myApp', []);


var data = [
    { id:1001, make:"Samsung", model:"Galaxy 2", count:4 },
    { id:1002, make:"Samsung", model:"Galaxy 3", count:1 },
    { id:1003, make:"HTC", model:"Wildfire", count:2 },
    { id:1004, make:"Apple", model:"iPhone 4", count:0 },
    { id:1005, make:"Apple", model:"iPhone 5", count:4 }


];





// -------------------------------------------------------
// Controllers
// -------------------------------------------------------
function AppCtrl($scope) {

    $scope.phones = data;
    $scope.cart = [];

    $scope.addToCart = function(itemId) {
        console.log(itemId);

        // find item
        var item = _.find(data, function(x){return x.id == itemId });
        if (item === undefined) {
            $scope.cart.push({ id:'0'});
        } else {
            // add or update
            var cartitem = _.find($scope.cart, function(x){return x.id == itemId });
            if (cartitem === undefined) {
                $scope.cart.push({
                    id : item.id,
                    name : item.make + " " + item.model,
                    count : 1
                });
            } else {
                cartitem.count = cartitem.count + 1;
            }



        }

    }
}

function CartCtrl($scope) {

}