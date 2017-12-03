這次又只有一個 html，學乖了直接怒複製，等做完再刪掉。

我想了想，全部照 [MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Taking_still_photos) 跟直接看影片不是一樣嗎，於是這次省略先自己做的過程。

規模跟上一個完全不同，還得先跑一個 localhost server，難怪我測試 takePhoto 都是黑的。

過程中只要開著網頁，camera 指示燈都是亮的實在令人有點緊張。

值得注意的是
```javascript
video.src = window.URL.createObjectURL(stream)
```
```javascript
video.srcObject = stream
```
是等價的
