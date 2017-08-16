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
  }
