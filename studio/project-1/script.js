function togglePlayPause() {
    var audio = document.getElementById('myAudio');
    var playPauseBtn = document.getElementById('playPauseBtn');
    if (audio.paused || audio.ended) {
      playPauseBtn.textContent = 'Pause';
      audio.play();
    } else {
      playPauseBtn.textContent = 'Play';
      audio.pause();
    }
  }
  