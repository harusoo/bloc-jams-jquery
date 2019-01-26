class Helper {
  playPauseAndUpdate (song) {
    player.playPause(song);
    $('.total-time').html(player.prettyTime(player.currentlyPlaying.duration));
    console.log(player.prettyTime());
  }
}

const helper = new Helper();
