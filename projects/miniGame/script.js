const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#timeList')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
const colors = ['#FF6669','#FFB866','#AED75B','#4D4DE6','#3F8DF3']
const uploadBtn = document.querySelector('#uploadBtn')

let score = 0
let time = 0

startBtn.addEventListener('click', (event) =>{
    event.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click', (event) =>{
    if(event.target.classList.contains('time-btn'))
    {
        time = parseInt(event.target.getAttribute('data-time'))
        //console.log(time)
        screens[1].classList.add('up')
        startGame()
    }
})



function startGame(){
    setInterval(decreaseTime,1000)
    createRandomCircle()
    setTime(time)
    
}

function decreaseTime(){
    if (time === 0){
        finishGame()
        clearTimeout()

    }else{
        let current = --time
        if (current < 10) {current=`0${current}`}
        setTime(current) 
    } 
}

function setTime(value){
    timeEl.innerHTML = timeEl.innerHTML=`00:${value}`
}



board.addEventListener('click', event =>{
    if (event.target.classList.contains('circle'))
    {
        score++
        event.target.remove()
        createRandomCircle()
    }
})

function finishGame(){
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Счет: 
    <span class="primary">${score}</span></h1>`
    
}

function createRandomCircle(){
    const circle = document.createElement('div')
    const size = getRandomNumber(10, 50)
    const {width, height} = board.getBoundingClientRect()
    const x = getRandomNumber(0, width-size)
    const y = getRandomNumber(0, height-size)
    
    circle.classList.add('circle')
    setColor(circle)
    circle.style.width=`${size}px`
    circle.style.height=`${size}px`
    circle.style.left = `${x}px`
    circle.style.top = `${y}px`
    board.append(circle)
}

function getRandomNumber(min, max){
    return Math.round((Math.random() * (max-min)+ min))
}

function setColor(element){
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function getRandomColor(){
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

