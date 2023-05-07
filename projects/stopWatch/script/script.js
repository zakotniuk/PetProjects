const bigWatchElementHour = document.querySelector('.big_time_hour')
const bigWatchElementMinute = document.querySelector('.big_time_minute')
const bigWatchElementSecond = document.querySelector('.big_time_second')
const bigWatchElementMilliSecond = document.querySelector('.big_time_millisecond')
const resultElement = document.querySelector('.results')
const resultTitle = document.querySelector('h3')

//buttons
const startButton = document.querySelector('#start_b')
const pauseButton = document.querySelector('#pause_b')
const lapButton = document.querySelector('#lap_b')
const enterButton = document.querySelector('#enter_b')
const resetButton = document.querySelector('#reset_b')

//массив результатов кругов
let resList = []

//нажатие кнопки старт
startButton.addEventListener('click', () =>{
	clearInterval(interval)
	interval = setInterval(startTimer, 10)
	startButton.style.display='none'
	pauseButton.style.display='block'
	lapButton.style.display='block'
})

//нажатие кнопки пауза
pauseButton.addEventListener('click', () => {
	clearInterval(interval)
	pauseButton.style.display='none'
	lapButton.style.display='none'
	enterButton.style.display='block'
	resetButton.style.display='block'
})

//нажатие кнопки сброс
resetButton.addEventListener('click', () => {
	clearInterval(interval)
	startButton.style.display='block'
	enterButton.style.display='none'
	resetButton.style.display='none'
	hour = 00, minute = 00, second = 00, millisecond = 00
	bigWatchElementMilliSecond.textContent = '0'
	bigWatchElementSecond.textContent = '00'
	bigWatchElementMinute.textContent =  '00:'
	bigWatchElementHour.textContent =  '00:'
	
	clearResult()
})

//нажатие кнопки продолжить
enterButton.addEventListener('click', () => {
	clearInterval(interval)
	pauseButton.style.display='block'
	lapButton.style.display='block'
	enterButton.style.display='none'
	resetButton.style.display='none'
	interval = setInterval(startTimer, 10)
})

lapButton.addEventListener('click', () => {
	printResult()
	console.log(tek)
})

function printResult(){
	tek =`${(hour>9?hour:"0"+hour)}:${(minute>9?minute:"0"+minute)}:${(second>9?second:"0"+second)}.${millisecond}`
	resList.push(tek)
	resultTitle.style.display='block'
	let tr = `
		<tr class="table_title">
			<td>${"#"}</td>
			<td>${"Lap time"}</td>
			<td>${"Current time"}</td>
		</tr>
	`;
	if(resList.length === 0) resultElement.innerHTML = ''
	resList.forEach(function(item, i){
		tr += `
		<tr>
			<td>${i+1}</td>
			<td>${"---"}</td>
			<td>${item}</td>
		</tr>
		`
	})
	resultElement.innerHTML = tr
}

function clearResult() {
	resultTitle.style.display='none'
	tek=null
	resList.splice(0,resList.length)
	tr=null
	resultElement.innerHTML = tr
}

let hour = 00, minute = 00, second = 00, millisecond = 00
let interval, tek='', n = 0

function startTimer() {

	millisecond++;
	//millisecond
	if (millisecond < 9)
		bigWatchElementMilliSecond.innerText = "0" + millisecond
	if(millisecond > 9 ) 
		bigWatchElementMilliSecond.innerText = millisecond
	if(millisecond >= 99) {
		millisecond=0
		second++
		bigWatchElementSecond.innerText = "0" + second
	}
	//second
	if(second < 9)
		bigWatchElementSecond.innerText = "0"+ second
	if (second > 9)
		bigWatchElementSecond.innerText = second
	if(second > 59){
		second = 0
		minute++
		bigWatchElementSecond.innerText = "0" + second
		bigWatchElementMinute.innerText = "0" + minute + ":"
	}
	//minute
	if (minute > 9)
		bigWatchElementMinute.innerText = minute + ":"
	
	if(minute > 59){
		minute = 0
		hour++
		bigWatchElementMinute.innerText = "0" + minute + ":"
		bigWatchElementHour.innerText = "0" + hour + ":"
	}
	//hour
	if (hour > 9)
		bigWatchElementHour.innerText = hour + ":"
}

