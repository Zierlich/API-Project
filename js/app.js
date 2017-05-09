
angular.module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])

.controller('BookCtrl', function($scope, $http) {
      $scope.$watch('search', function(){
        fetch();
      })
        $scope.search = "";

        function fetch() {
    $http.get("https://www.googleapis.com/books/v1/volumes?q=" + $scope.search).then(function(res) {
  		console.log(res.data);
      $scope.relatedBooks = res.data.items;
      $scope.bookInfo = res.data.items[0].volumeInfo;
      $scope.saleInfo = res.data.items[0].saleInfo;
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
