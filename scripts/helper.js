class Helper {
  playPauseAndUpdate (song) {
    player.playPause(song);
    $('.total-time').html(player.getDuration());
    console.log(player.getDuration());
  }
}

const helper = new Helper;
