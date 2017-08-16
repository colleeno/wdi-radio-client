angular
.module('radio')
.controller('SongIndexController', [
  'Song',
  SongIndexController
])

  function SongIndexController (Song) {
    this.songs = Song.query()
  }
