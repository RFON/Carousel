var list = document.getElementById("image-list")
var pre = document.getElementById("pre-button")
var next = document.getElementById("next-button")
var carouselContainer = document.getElementById("carousel-container")
var buttons = document.getElementById("buttons").getElementsByTagName("span")
var timer
var current = 0
var theLastPositon = -2400
var pictureWidth = 600

var animate = function(element, className){
    element.classList.add(className)
    element.addEventListener('animationend',function(){
        element.classList.remove(className)
    },false)
    console.log(list.style.left)
}

var animateDistance = function (distance) {
    console.log(list.style.left)
    var newLeft = parseInt(list.offsetLeft) + distance
    list.style.left = newLeft + "px"
    if (newLeft < theLastPositon) {
        list.style.left = 0 + "px"
    }
    if (newLeft > 0) {
        list.style.left = theLastPositon + "px"
    }
}

var buttonShow = function(){
    for(let i = 0; i <buttons.length; i ++){
        if(buttons[i].className == "on"){
            buttons[i].className = ""
        }
    }
    buttons[current].className = "on"
}

for(let i = 0; i < buttons.length; i ++){
    
}

pre.addEventListener("click", function () {
    current -= 1
    if(current < 0){
        current = 4
    }
    buttonShow()
    animate(list,"translate-left",pictureWidth)
    animateDistance(pictureWidth)
})

next.addEventListener("click", function () {
    current += 1
    if(current > 4){
        current = 0
    }
    buttonShow()
    animate(list,"translate-left",pictureWidth)
    animateDistance(0-pictureWidth)
})

var play = function () {
    timer = setInterval(function () {
        next.click()
    }, 3000)
}

play()

var stop = function(){
    clearInterval(timer)
}

carouselContainer.onmouseover = function(){
    pre.style.opacity = 1
    next.style.opacity = 1
    stop()
}
carouselContainer.onmouseout = function(){
    pre.style.opacity = 0.4
    next.style.opacity = 0.4
    play()
}

