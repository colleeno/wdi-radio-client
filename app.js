angular
  .module('radio',[
  'ui.router',
  'ngResource'
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])

  function RouterFunction ($stateProvider) {
    $stateProvider
    .state ('songIndex', {
      url: '/songs',
      templateUrl: 'js/ng-views/index.html',
      controller: 'SongIndexController',
      controllerAs: 'vm'
    })
    .state ('songNew', {
      url: '/songs/new',
      templateUrl: 'js/ng-views/new.html',
      controller: 'SongNewController',
      controllerAs: 'vm'
    })
    .state ('songShow', {
      url: '/songs/:id',
      templateUrl: 'js/ng-views/show.html',
      controller: 'SongShowController',
      controllerAs: 'vm'
    })
  }
