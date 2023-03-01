const addBtn = document.querySelector('.add')
const saveBtn = document.querySelector('.save')
const cancelBtn = document.querySelector('.cancel')
const deleteBtns = document.getElementsByClassName('delete-note')
const deleteAllBtn = document.querySelector('.delete-all')
const noteArea = document.querySelector('.note-area')
const notePanel = document.querySelector('.note-panel')
const category = document.querySelector('#category')
const textarea = document.querySelector('#text')
const error = document.querySelector('.error')

let selectedValue
let cardID = 0

const openPanel = () => {
	notePanel.style.display = 'flex'
}

const closePanel = () => {
	notePanel.style.display = 'none'
	error.style.visibility = 'hidden'
	textarea.value = ''
	category.selectedIndex = 0
}

const addNote = () => {
	if (textarea.value !== '' && category.options[category.selectedIndex].value !== '0') {
		createNote()
		error.style.visibility = 'hidden'
	} else {
		error.style.visibility = 'visible'
	}
}

const createNote = () => {
	const newNote = document.createElement('div')
	newNote.classList.add('note')
	newNote.setAttribute('id', cardID)

	newNote.innerHTML = `
    <div class="note-header">
                <h3 class="note-title" style="color: white">${selectedValue}</h3>
                <button class="delete-note" onclick="deleteNote(${cardID})"><i class="fas fa-times icon"></i></button>
            </div>

            <div class="note-body" style="color: white">
                ${textarea.value}
            </div>
    `

	noteArea.appendChild(newNote)
	cardID++
	textarea.value = ''
	category.selectedIndex = 0
	notePanel.style.display = 'none'
	checkColor(newNote)
}

const selectValue = () => {
	selectedValue = category.options[category.selectedIndex].text
	console.log(selectedValue)
}

const checkColor = note => {
	switch (selectedValue) {
		case 'Teatr Polonia':
			note.style.backgroundColor = 'rgb(248, 38, 0)'
			break
		case 'Uczelnia':
			note.style.backgroundColor = 'rgb(0,128,0)'
			break
		case 'Praca':
			note.style.backgroundColor = 'rgb(30, 144, 255)'
			break
		case 'Och-Teatr':
			note.style.backgroundColor = 'rgb(255, 213, 0)'
			break
		case 'Tor Kolarski':
			note.style.backgroundColor = 'rgb(255, 182, 193)'
			break
		case 'Siłownia':
			note.style.backgroundColor = 'rgb(255, 182, 193)'
			break
	}
}

const deleteNote = id => {
	const noteToDelete = document.getElementById(id)
	noteArea.removeChild(noteToDelete)
}

const deleteAllNotes = () => {
	noteArea.textContent = ''
}

addBtn.addEventListener('click', openPanel)
cancelBtn.addEventListener('click', closePanel)
saveBtn.addEventListener('click', addNote)
document.addEventListener('keydown', function (e) {
	if (e.keyCode === 13) {
		addNote()
	}
})
deleteAllBtn.addEventListener('click', deleteAllNotes)
