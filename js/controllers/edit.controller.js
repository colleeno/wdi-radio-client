angular
.module('radio')
.controller('SongEditController', [
  '$state',
  'Song',
  SongEditController
])

  function SongEditController($state, Song) {
    this.song = Song.get({id: $state.params.id})
    this.update = function () {
      this.song.$update({id: $state.params.id}).then(() => {
        $state.go('songIndex', {}, {reload: true})
      })
    }
    this.destroy = function () {
      this.song.$delete({id: $state.params.id}).then(() => {
        $state.go('songIndex', {}, {reload: true})
      })
    }
  }
