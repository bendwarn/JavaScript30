我的版本：遊戲時間介於五到十秒、零到一秒跑出一隻、存活時間零到一秒。

只記 last 也不太夠，最好是 maintain 一個冒出地鼠的陣列，而且事實上已經有這樣的陣列了，那就是 holes。換句話說，每次檢查該 index 的 class 有沒有 up 就行了。

isTrusted 用來確認是否真的滑鼠點擊。
