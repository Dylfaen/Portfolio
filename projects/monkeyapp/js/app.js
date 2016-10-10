var app = angular.module('app', ['ngRoute']);
app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'views/home.html',
            controller: 'homeCtrl'
        })
        .when('/category/:categoryID', {
            templateUrl: 'views/category.html',
            controller: 'categoryCtrl'
        })
         .when('/discount/:discountID', {
            templateUrl: 'views/discount.html',
            controller: 'discountCtrl'
        })
        .otherwise({
            redirectTo: '/home'
        });
    }]);

app.controller('appController', function($scope, $rootScope) {
    $rootScope.categories = [
        {
            'id': 0,
            'name': 'Fitness'
        },
        {
            'id': 1,
            'name': 'Bien-être'
        },
        {
            'id': 2,
            'name': 'Alimentation'
        },
        {
            'id': 3,
            'name': 'Spectacles'
        }
    ];
    $rootScope.promotions = [
        {
            'id': 0,
            'discount': '75%',
            'description': "Réduction valable sur présentation de l'application.",
            'storeAddress': "13 rue du Vincin, 56550 Vannes",
            'brandImage': "img/devred.jpeg",
            'image': "img/devredbanner.jpg",
            'categoryID': 0 
        },
        {
            'id': 1,
            'store': 'Nocibé',
            'price': '1.50',
            'discount': '75%',
            'description': 'Licorne',
            'storeAddress': "13 rue du Vincin, 56550 Vannes",
            'brandImage': "img/devred.jpeg",
            'image': "img/devredbanner.jpg",
            'categoryID': 0
        },
        {
            'id': 2,
            'store': 'Celio',
            'price': '1.50',
            'discount': '75%',
            'description': 'Licorne',
            'storeAddress': "13 rue du Vincin, 56550 Vannes",
            'brandImage': "img/devred.jpeg",
            'image': "img/devredbanner.jpg",
            'categoryID': 1
        },
        {
            'id': 3,
            'store': 'La mie caline',
            'price': '1.50',
            'discount': '75%',
            'description': 'Licorne',
            'storeAddress': "13 rue du Vincin, 56550 Vannes",
            'brandImage': "img/devred.jpeg",
            'image': "img/devredbanner.jpg",
            'categoryID': 2

        },
        {
            'id': 4,
            'store': 'MonkeyStore',
            'price': '1.50',
            'discount': '75%',
            'description': 'Licorne',
            'storeAddress': "13 rue du Vincin, 56550 Vannes",
            'brandImage': "img/devred.jpeg",
            'image': "img/devredbanner.jpg",
            'categoryID': 2

        }
    ];
    $scope.profileMenuState = "closed";
    $scope.categoryMenuState = "closed";
    $scope.isAMenuOpen = false;

    $scope.changeProfileMenuState = function() {
        if($scope.profileMenuState == "closed") {
            if($scope.categoryMenuState == "open") {
                $scope.categoryMenuState = "closed";
            }
            $scope.profileMenuState = "open";
            $scope.isAMenuOpen = true;
        } else if($scope.profileMenuState == "open"){
            $scope.profileMenuState = "closed";
            $scope.isAMenuOpen = false;
        }
    };

    $scope.changeCategoryMenuState = function() {
        if($scope.categoryMenuState == "closed") {
            if($scope.profileMenuState == "open") {
                $scope.profileMenuState = "closed";
            }
            $scope.categoryMenuState = "open";
            $scope.isAMenuOpen = true;
        } else if($scope.categoryMenuState == "open"){
            $scope.categoryMenuState = "closed";
            $scope.isAMenuOpen = false;
        }
    };
});

app.controller('categoryCtrl', function($rootScope, $scope, $routeParams) {
    var promotions = $rootScope.promotions;
    $scope.promotions = []
    for(promotion in promotions) {
        console.log("id : " + promotions[promotion].categoryID);
        console.log("param id : " + $routeParams.categoryID);
        if(promotions[promotion].categoryID == $routeParams.categoryID) {
            $scope.promotions.push(promotions[promotion]);
        }
    }
    console.log($scope.promotions);
});

app.controller('homeCtrl', function($rootScope, $scope) {
    $scope.promotions = $rootScope.promotions;
    $scope.categories = $rootScope.categories;
});

app.controller('discountCtrl', function($rootScope, $scope, $routeParams) {
    var promotions = $rootScope.promotions;
    for(promotion in promotions) {
        if(promotions[promotion].id == $routeParams.discountID) {
            $scope.promotion = promotions[promotion];
        }
    }
    console.log($scope.promotion);
});

