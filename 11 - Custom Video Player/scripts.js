const video = document.querySelector('video')
const toggle = document.querySelector('.toggle')
const progress = document.querySelector('.progress')
const filled = progress.querySelector('.progress__filled')
function toggle_play() {
  if(video.paused) video.play()
  else video.pause()
}
function change_time(e) {
  video.currentTime = video.duration * e.offsetX / progress.offsetWidth
}
video.addEventListener('click', toggle_play)
toggle.addEventListener('click', toggle_play)
video.addEventListener('play', e => toggle.textContent = '❚ ❚')
video.addEventListener('pause', e => toggle.textContent = '►')
video.addEventListener('timeupdate', e => filled.style.flexBasis = `${video.currentTime / video.duration * 100}%`)
progress.addEventListener('mousedown', change_time)
progress.addEventListener('mousemove', e => e.buttons > 0 && change_time(e))
document.querySelectorAll('[data-skip]').forEach(step => step.addEventListener('click', e => video.currentTime += parseFloat(e.target.dataset.skip)))
document.querySelectorAll('input.player__slider').forEach(bar => bar.addEventListener('input', e => video[e.target.name] = e.target.valueAsNumber))
