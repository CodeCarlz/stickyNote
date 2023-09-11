const inputBox = document.getElementById('inputBox')
const createBtn = document.getElementById('create-btn')
const mainContainer = document.querySelector('.main-Container')

const saveNotesArray = []

const showNotes = () => {
  mainContainer.innerHTML = '';
  if (saveNotesArray.length === 0) return;
  saveNotesArray.map((saveNote) => {
    mainContainer.innerHTML += `<div class="main-Notes">
    <div class="top-Notes">
      <p>${saveNote.name}</p>
    </div>
     <div class="bottom-Notes"> 
      <button class="hoverBtn editBtn"><img class="editBtn" src="create-outline.svg" alt=""></button>
      <button class="hoverBtn deleteBtn" value="${saveNote.number}"><img class="deleteBtn" id="${saveNote.number}" src="trash-outline.svg" alt=""></button> 
    </div>
  </div>`
  });
  inputBox.value = ''
  const deleteBtn = document.querySelectorAll('.deleteBtn')
  deleteBtn.forEach((btn) => btn.addEventListener('click', deleteNote))
  const editBtn = document.querySelectorAll('.editBtn')
  editBtn.forEach((btn) => btn.addEventListener("click", editNote));
  // console.log(editBtn)
  // console.log(deleteBtn)
}
const createNote = () => {
  const noteValue = inputBox.value
  if (inputBox.value === '') return;
  
  const note = {
    name: noteValue,
    number: Math.random() * 1000,
  };
    saveNotesArray.push(note);
    showNotes();
  }

function deleteNote(e){
  console.log(e.target.value)
  saveNotesArray.map((note, idx) => {
    if (String(note.number) === e.target.value){
      saveNotesArray.splice(idx, 1);
    }else if(String(note.number) === e.target.id){
      saveNotesArray.splice(idx, 1)
    }
  })
  showNotes()
}

function editNote(e){
  let editN = e.target.parentNode.parentNode.parentNode.innerText
  saveNotesArray.map((note) => {  
    if (String(note.name) === editN ){
      let editValue = prompt('Edit Notes')
      note.name = String(editValue)
    }
  })
  showNotes()
  }

createBtn.addEventListener('click', createNote)
showNotes()




// const arr = ['a','b','c']

// arr.map((no, index) => {
//   console.log(no)
//   console.log(index)
// })