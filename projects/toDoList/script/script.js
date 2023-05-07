let note_input = document.querySelector('.note_input'),
	add_button = document.querySelector('.add_button'),
	output_ul = document.querySelector('.output_ul')

let noteList = []

if(localStorage.getItem('ToDo')){
	noteList = JSON.parse(localStorage.getItem('ToDo'))
	printNotes()
}

add_button.addEventListener('click', () =>{
	let newNote = {
		note: note_input.value,
		done: false
	}
	if(note_input.value !== ''){
		noteList.push(newNote)
		printNotes()
	}
	
	note_input.value = ''
	localStorage.setItem('ToDo', JSON.stringify(noteList))
})

function printNotes(){
	let printNote = ''
	let a
	if(noteList.length === 0) output_ul.innerHTML = ''
	noteList.forEach(function(item, i){
		printNote += `
		<li class="output_li">
			<p id="id_${i}" class="p_li" ${item.done ? 'style=text-decoration:line-through':2}>${item.note}</p>
			<div class="done_del_buttons">
				<button id="id_${i}" class="done_button" onClick="Done(this.id)"></button>
				<button id="id_${i}" class="del_button" onClick="Del(this.id)"></button>
			</div>	
		</li>	
		`
		output_ul.innerHTML = printNote
	})
}

function Done(clicked_id){
	let id_p = output_ul.querySelector('[id='+ clicked_id +']')
	let value_p = id_p.innerHTML

	noteList.forEach(function(item, i){
		if (item.note === value_p){
			item.done = !item.done
			if(item.done) id_p.style.textDecoration = 'line-through'
			else id_p.style.textDecoration = 'none'
			localStorage.setItem('ToDo', JSON.stringify(noteList))
		}
	})
}

function Del(clicked_id){
	let id_p = output_ul.querySelector('[id='+ clicked_id +']')
	let value_p = id_p.innerHTML

	noteList.forEach(function(item, i){
		if (item.note === value_p){
			noteList.splice(i,1)
			printNotes()
			localStorage.setItem('ToDo', JSON.stringify(noteList))
		}
	})
}