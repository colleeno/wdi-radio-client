angular
.module('radio')
.controller('SongNewController', [
  'Song',
  '$stateParams',
  SongNewController
])

  function SongNewController(Song, $stateParams) {
    this.song = new Song()
    this.create = function () {
      this.song.$save(() => {
        $state.go('songIndex')
      })
    }
  }
