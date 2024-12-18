const playPause = document.getElementById("play-radio");
const playIcon = playPause.querySelector(".play-btn");
const pauseIcon = playPause.querySelector(".pause-btn");

class AudioPlayer {
  constructor() {
    this.audio = document.getElementById("audio");
    this.playPause = playPause;
    this.playBtn = playIcon;
    this.pauseBtn = pauseIcon;

    // Verifica si la reproducción estaba en curso antes de salir
    const wasPlaying = localStorage.getItem("radioIsPlaying") === "true";

    if (wasPlaying) {
      this.startLiveStream();
      this.updatePlayPauseIcons(true); // Actualizar los íconos de play/pause al estado de reproducción
    } else {
      this.updatePlayPauseIcons(false); // Asegurar que los íconos estén en su estado inicial
    }

    this.audio.addEventListener("ended", () => {
      this.startLiveStream();
    });

    this.audio.addEventListener("error", this.handleError.bind(this));

    document.addEventListener("visibilitychange", () => {
      if (!document.hidden && this.audio.paused && !this.audio.ended) {
        this.audio.play().catch(this.handleError.bind(this));
      }
    });

    window.addEventListener("focus", () => {
      if (this.audio.paused && !this.audio.ended) {
        this.audio.play().catch(this.handleError.bind(this));
      }
    });
  }

  updatePlayPauseIcons(isPlaying) {
    if (isPlaying) {
      this.pauseBtn.classList.remove("hide");
      this.playBtn.classList.add("hide");
    } else {
      this.pauseBtn.classList.add("hide");
      this.playBtn.classList.remove("hide");
    }
  }

  startLiveStream() {
    this.audio.src = "https://cp9.serverse.com/proxy/perfor?mp=/stream;";
    this.audio.load();
    this.audio.play().catch(this.handleError.bind(this));
    localStorage.setItem("radioIsPlaying", "true"); // Guarda el estado de reproducción
  }

  playIntro() {
    this.audio.src = "assets/audio/intromod.mp3";
    this.audio.load();
    this.audio.play().catch(this.handleError.bind(this));
  }

  playAudio() {
    // Se asegura que el audio esté listo para reproducirse antes de cambiar los íconos
    if (this.audio.paused || this.audio.ended) {
      this.updatePlayPauseIcons(true); // Actualizar los íconos al iniciar reproducción
      this.playIntro();
      document.querySelector('.volume-control').classList.remove('hide');
    } else {
      this.audio.pause();
      this.updatePlayPauseIcons(false); // Actualizar los íconos al pausar
      localStorage.setItem("radioIsPlaying", "false"); // Guarda el estado de pausa
    }
  }

  handleError(event) {
    console.error("Audio playback error: ", event);
    localStorage.setItem("radioIsPlaying", "false"); // Guarda el estado de error
    this.updatePlayPauseIcons(false); // Asegura que los íconos vuelvan al estado de pausa
  }
}

const audioPlayer = new AudioPlayer();

playPause.addEventListener("click", () => {
  audioPlayer.playAudio();
  playPause.querySelector('span').textContent = 'Al aire';
});
