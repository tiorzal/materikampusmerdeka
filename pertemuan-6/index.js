const myForm = document.getElementById('my-form')
const fname = document.getElementById('fname-text')
const pname = document.getElementById('pname-text')

const buttonSubmit = document.getElementById('my-button')
const myBox = document.getElementById('my-box')

let isLowerBracketShow = true

myForm.addEventListener('submit', (event) => {
  event.preventDefault()

  const currentName = myForm.elements.fname.value
  const currentProfession =  myForm.elements.pname.value

  // console.log(currentName, currentProfession)
  fname.innerHTML = currentName
  pname.innerHTML = currentProfession

  toggleBox()
})

function toggleBox () {
  if(isLowerBracketShow) {
    isLowerBracketShow = false
    myBox.classList.remove('hide')
  } else {
    isLowerBracketShow = true
    myBox.classList.add('hide')
  }
}

buttonSubmit.addEventListener('click', (event) => {
  event.preventDefault()
  toggleBox()
})