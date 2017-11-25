flex 要分清楚哪些是 container 的屬性、哪些是 children 的屬性並不算太困難，但連續三層的時候就完全不是同一回事了。

比方說 .panel 其實不需要 justify-content 和 align-items。
### Notes
* 本次地雷：transitionend 每種屬性都會發一次，而不是每個動畫發一次
