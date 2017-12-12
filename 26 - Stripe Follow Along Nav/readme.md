這跟說好的不一樣喔，有心人可以比較一下 index-FINISHED 跟 stripe 的差別。而我當然要挑戰原汁原味，改成跟 stripe 一樣。

主要的差別就是在上層加個 notransition class，setTimeout 拿掉該 class，去掉從起始位置飛過來的過程。

即使如此，還是會有個地方跟 stripe 不一樣：如果要在 dropdown 本身做效果（例如 rotate），notransition 也會使他失效。

但 stripe 可以避開這個矛盾，因為他的結構是：

- dropdownRoot
  * dropdownBackground
  * dropdownArrow
  * dropdownContainer
    - dropdownSection
      * dropdownContent
    - dropdownSection
      * dropdownContent
    - dropdownSection
      * dropdownContent

弄成這麼多層是有原因的，root 不受 notransition 影響，這就是解法。因此在嘗試很久之後我也加上 dropdownRoot。

實際看過 stripe 原始碼只會有個感想，實在太強了。每個為了解決 css 問題的細節組合在一起依然不會顯得雜亂無章，乍看多餘的部分其實都有它存在的道理。真要說有什麼能改進的地方大概就是 dropdownArrow 可以改用 :before。
