這裡的 css 效果也是值得一看。

不浪費資源，mousedown 的時候才會有 mousemove listener。

mousemove 裡的 preventDefault 可以防止選取文字之類的動作。

movementX 還有一個好處，它看的是滑鼠！所以就算游標到了邊緣，滑鼠繼續前進還是會有 movement。

我用的移動比例是整個螢幕對上全長，換句話說，走完整個螢幕，內容也會到底。
