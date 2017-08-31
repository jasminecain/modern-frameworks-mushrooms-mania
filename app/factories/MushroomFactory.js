"use strict";
console.log('MushroomFactory');

app.factory('MushroomFactory', function($q, $http) {

  let getNames = () => {
    let items = [];
    return $q ((resolve, reject) => {
      $http.get('./data/mushrooms.json')
      .then((itemObject) => {
        let itemCollection = itemObject.data;
        resolve(itemCollection.names);
      })
      .catch((error) => {
        reject(error);
      });
    });
  };
  let getOneName = () => {
    console.log('getOneName');
  };

  return {getNames, getOneName};
})
