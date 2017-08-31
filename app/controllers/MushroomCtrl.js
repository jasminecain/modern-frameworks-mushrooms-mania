"use strict";
console.log('MushroomCtrl');

app.controller('MushroomCrtl', function($scope, MushroomFactory) {
  MushroomFactory.getNames()
  .then(function(itemCollection) {
    $scope.names = itemCollection;
    console.log('names', $scope.names);
  });
});
