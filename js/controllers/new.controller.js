angular
.module('radio')
.controller('SongNewController', [
  '$state',
  'Song',
  SongNewController
])

  function SongNewController($state, Song) {
    this.song = new Song()
    this.create = function () {
      this.song.$save(() => {
        $state.go('songIndex')
      })
    }
  }
