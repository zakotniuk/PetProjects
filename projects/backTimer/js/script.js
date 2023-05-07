//datetimes
const now = new Date()
const newYear = new Date(`Jan 1 ${now.getFullYear()+1} 00:00:00`)
const spring = new Date(`Mar 1 ${now.getFullYear()+1} 00:00:00`)
const summer = new Date(`Jun 1 ${now.getFullYear()} 00:00:00`)
const autumn = new Date(`Sep 1 ${now.getFullYear()} 00:00:00`)
//elements
const selOption = document.querySelector('#selOption')
const daysTime = document.querySelector('.timer_days .time')
const hoursTime = document.querySelector('.timer_hours .time')
const minutesTime = document.querySelector('.timer_minutes .time')
const secondsTime = document.querySelector('.timer_seconds .time')
//variables for view text
const daysText = document.querySelector('.timer_days .text')
const hoursText = document.querySelector('.timer_hours .text')
const minutesText = document.querySelector('.timer_minutes .text')
const secondsText = document.querySelector('.timer_seconds .text')
const dayNameText = document.querySelector('h3')

const arrDaysDate = [newYear, spring, summer, autumn];
const arrDaysName = ["New Year", "Spring", "Summer", "Autumn"]
let currentDay = 0;
dayNameText.textContent = `Before the ${arrDaysName[currentDay]}`

document.getElementById('submit').onclick = function() {
    let value = document.getElementById("selOption").selectedOptions[0].value
	currentDay = value;
	dayNameText.textContent = `Before the ${arrDaysName[currentDay]}`
}


function declOfNum(number, titles) {  
    cases = [2, 0, 1, 1, 1, 2]
    return titles[(number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5]]  
}

function formatNum(number, limit){
	if (number < limit)
		number = '0' + number
	return number
}

function backTimer(){
	let now = new Date()
	let leftTo = arrDaysDate[currentDay] - now
	let d = Math.floor(leftTo/1000/60/60/24)
	let h = Math.floor(leftTo/1000/60/60) % 24
	let m = Math.floor(leftTo/1000/60) % 60
	let s = Math.floor(leftTo/1000) % 60

	// leftTo;
	daysTime.innerHTML = formatNum(d, 100)
	hoursTime.innerHTML = formatNum(h, 10)
	minutesTime.innerHTML = formatNum(m, 10)
	secondsTime.innerHTML = formatNum(s, 10)

	daysText.innerHTML = declOfNum(d, ['day', 'days', 'days'])
	hoursText.innerHTML = declOfNum(h, ['hour', 'hours', 'hours'])
	minutesText.innerHTML = declOfNum(m, ['minute', 'minutes', 'minute'])
	secondsText.innerHTML = declOfNum(s, ['second', 'seconds', 'second'])
}

backTimer()
setInterval(backTimer, 1000)

//days.innerHTML = ;


