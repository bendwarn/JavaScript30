const timeleft = document.querySelector('.display__time-left')
const endtime = document.querySelector('.display__end-time')
let timerid
function countdown(sec) {
  clearTimeout(timerid)
  const now = new Date()
  document.title = timeleft.textContent = `${Math.floor(sec / 60)}:${(sec % 60).toString().padStart(2, 0)}`
  now.setSeconds(now.getSeconds() + +sec)
  endtime.textContent = `Be Back At ${now.getHours()}:${now.getMinutes().toString().padStart(2, 0)}`
  if(sec > 0) timerid = setTimeout(countdown.bind(null, sec - 1), 1000)
}
document.querySelectorAll('.timer__button').forEach(b => b.addEventListener('click', countdown.bind(null, b.dataset.time)))
custom.addEventListener('submit', e => {
  e.preventDefault()
  countdown(custom.minutes.value * 60)
  custom.reset()
})
