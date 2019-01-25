class Helper {
  playPauseAndUpdate (song) {
    player.playPause(song);
    $('.total-time').html(player.getDuration());
    console.log(player.getDuration());
  }
}

<<<<<<< HEAD
const helper = new Helper ();
=======
const helper = new Helper();
>>>>>>> assingment-bloc-jams-jquery-sliders
