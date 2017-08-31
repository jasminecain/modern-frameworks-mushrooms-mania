"use strict";

var app = angular.module('MushroomsApp', ['ngRoute']);

app. config(function($routeProvider) {
  $routeProvider.
when('/showall', {
  templateUrl: 'partials/mushroom-list.html',
  controller: "MushroomCtrl"
  }).
  otherwise('/');
});
