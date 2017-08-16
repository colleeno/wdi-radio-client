angular
.module('radio')
.controller('SongShowController', [
  'Song',
  '$stateParams',
  SongShowController
])

  function SongShowController(Song, $stateParams) {
    this.song = Song.get({id: $stateParams.id})
  }
