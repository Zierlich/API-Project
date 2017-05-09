<<<<<<< HEAD
angular.module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])

.controller("bookCtrl",function($scope,$http) {
    $scope.$watch('search', function() {
    fetch();
    });

    $scope.search = "harry potter";

    function fetch() {
=======

angular.module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])

.controller('BookCtrl', function($scope, $http) {
      $scope.$watch('search', function(){
        fetch();
      })
        $scope.search = "";

        function fetch() {
>>>>>>> 2bd530b6a1da688d55f6c1f67300d8e0bd8f6349
    $http.get("https://www.googleapis.com/books/v1/volumes?q=" + $scope.search).then(function(res) {
  		console.log(res.data);
      $scope.relatedBooks = res.data.items;
      $scope.bookInfo = res.data.items[0].volumeInfo;
      $scope.saleInfo = res.data.items[0].saleInfo;
<<<<<<< HEAD
      $scope.related = res.data;
    });


  }
    $scope.update = function(book) {
      $scope.search = book.volumeInfo.title;
    };
	})


//AppCtrl
.controller('AppCtrl', function($scope, $mdDialog) {
  $scope.status = '  ';
  $scope.customFullscreen = false;
  $scope.showTabDialog = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'tabDialog.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true
    })
  };
  function DialogController($scope, $mdDialog) {
    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
  }
});
=======
    });
       $http.get("https://www.googleapis.com/books/v1/volumes?q=" + $scope.search)
        .then(function(response) {
          $scope.related = response.data;
     });
  }

  $scope.update = function(book) {
      $scope.search = book.volumeInfo.title;
    };

 $scope.results = "Nothing to search..."

 //Header Image
  $scope.imagePath = 'http://res.cloudinary.com/dvirpbo6t/image/upload/v1493261790/Untitled_au0soa.png';
});

$('#pic').hover(function() {
  $(this).attr('src', 'https://3.basecamp.com/3507221/blobs/c171e7396933597193d9ca683b78914b0010/download/http---res.cloudinary.com-dvirpbo6t-image-upload-v1493085668-dainty_u3j11z.jpg');
}, function() {
  $(this).attr('src', 'https://cdn3.iconfinder.com/data/icons/internet-and-web-4/78/internt_web_technology-13-512.png');
});

/**
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that can be foundin the LICENSE file at http://material.angularjs.org/HEAD/license.
**/
>>>>>>> 2bd530b6a1da688d55f6c1f67300d8e0bd8f6349
