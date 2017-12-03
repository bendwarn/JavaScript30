const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
function takePhoto(e) {
  snap.currentTime = 0
  snap.play()
  const data = canvas.toDataURL('image/png')
  const link = document.createElement('a')
  link.href = data
  link.setAttribute('download', 'handsome')
  link.innerHTML = `<img src="${data} alt="Handsome Man">`
  strip.insertBefore(link, strip.firstChild)
}
navigator.mediaDevices.getUserMedia({video: true, audio:false})
  .then(stream => {
    video.srcObject = stream // same as: video.src = window.URL.createObjectURL(stream)
    video.play()
  }).catch(err => console.error(err))

function greenscreen(pixels) {
  const levels = {}
  document.querySelectorAll('.rgb input').forEach(input => levels[input.name] = input.value)
  for(let i = 0; i < pixels.data.length; i += 4){
    red = pixels.data[i + 0]
    green = pixels.data[i + 1]
    blue = pixels.data[i + 2]
    alpha = pixels.data[i + 3]

    if (red >= levels.rmin
      && green >= levels.gmin
      && blue >= levels.bmin
      && red <= levels.rmax
      && green <= levels.gmax
      && blue <= levels.bmax)
      pixels.data[i + 3] = 0
  }
  return pixels
}

video.addEventListener('canplay', e => {
  const {videoWidth: width, videoHeight: height} = video
  canvas.width = width
  canvas.height = height
  let intervalID = setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height)
    let pixels = ctx.getImageData(0, 0, width, height)
    pixels = greenscreen(pixels)
    ctx.putImageData(pixels, 0, 0)
  }, 16)
})
