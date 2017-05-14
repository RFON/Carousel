var list = document.getElementById("image-list")
var imgBox = list.getElementsByTagName("img")
var pre = document.getElementById("pre-button")
var next = document.getElementById("next-button")
var carouselContainer = document.getElementById("carousel-container")
var buttons = document.getElementById("buttons").getElementsByTagName("span")
var timer
var current = 0
var pictureNumber = 5
var pictureWidth = 800
var pictureHeight = 400

// var animate = function(element, className,long){
//     element.classList.add(className)
//     element.addEventListener('animationend',function(){
//         element.classList.remove(className)
//     },false)
//     animateDistance(long)
//     console.log(list.style.left)
// }

var initialSetting = function(){
    list.style.width = pictureWidth * pictureNumber
    list.style.height = pictureHeight
    carouselContainer.style.width = pictureWidth
    carouselContainer.style.height = pictureHeight
    for(let i = 0; i < imgBox.length; i ++){
        imgBox[i].style.width = pictureWidth
        imgBox[i].style.height = pictureHeight
    }
}

initialSetting()

// 偏移距离
var animateDistance = function (distance, nowPage) {
    var newLeft = distance*nowPage
    list.style.left = newLeft + "px"
    console.log(list.style.left)
}

// 小圆点变色
var buttonShow = function () {
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].className == "on") {
            buttons[i].className = ""
        }
    }
    buttons[current].className = "on"
}

// 左右切换图片按钮
pre.addEventListener("click", function () {
    current -= 1
    if (current < 0) {
        current = 4
    }
    buttonShow()
    // animate(list,"translate-left",pictureWidth)
    animateDistance(0 - pictureWidth,current)
})

next.addEventListener("click", function () {
    current += 1
    if (current > 4) {
        current = 0
    }
    buttonShow()
    // animate(list,"translate-left",0-pictureWidth)
    animateDistance(0 - pictureWidth,current)
})

// 小圆点按钮点击切换图片
for (let i = 0; i < buttons.length; i++) {
    buttons[i].index = i
    buttons[i].addEventListener('click', function () {
        this.className = "on"
        buttons[current].className = ""
        list.style.left = (0 - pictureWidth) * this.index + "px"
        current = this.index
    })
}

// 循环播放
var play = function () {
    timer = setInterval(function () {
        next.click()
    }, 3000)
}

play()

// 停止播放
var stop = function () {
    clearInterval(timer)
}

// 鼠标停留在轮播图上停止播放
carouselContainer.onmouseover = function () {
    pre.style.opacity = 1
    next.style.opacity = 1
    stop()
}

// 鼠标移开继续播放
carouselContainer.onmouseout = function () {
    pre.style.opacity = 0.4
    next.style.opacity = 0.4
    play()
}

