function stepper(){
  timer = setInterval(function(){
    let oldval = parseInt(document.getElementById('counter').innerText)
    //let newval = parseInt(oldval)
    document.getElementById('counter').innerText = ++oldval
  }, 1000)
}

function increment(){

  let oldval = parseInt(document.getElementById('counter').innerText)
  //let newval = parseInt(oldval)
  document.getElementById('counter').innerText = ++oldval
}

function decrement(){

  let oldval = parseInt(document.getElementById('counter').innerText)
  //let newval = parseInt(oldval)
  document.getElementById('counter').innerText = --oldval
}


let countHash = {}

function addLike(){

  let ul = document.querySelector('ul')
  let currentCounter = document.getElementById('counter').innerText
  let newLi = document.createElement('li')
  newLi.id = `${currentCounter}`
  if (countHash.hasOwnProperty(currentCounter)) {
      countHash[currentCounter] += 1
    } else {
      countHash[currentCounter] = 1
    }

  if (document.getElementById(`${currentCounter}`)) {
    document.getElementById(`${currentCounter}`).innerText = `${currentCounter} has been liked ${countHash[currentCounter]} time(s)!`
  }
  else {
    newLi.innerText = `${currentCounter} has been liked ${countHash[currentCounter]} time(s)!`
    ul.appendChild(newLi)
  }

}

let pauseToggle = true
function pauseClick(){
  // document.getElementById("pause")
  if (pauseToggle) {
    this.innerText = "Resume"
    pauseToggle = false
    clearInterval(timer)
    plusButton.disabled = true
    minusButton.disabled = true
    heartButton.disabled = true
  } else {
    plusButton.disabled = false
    minusButton.disabled = false
    heartButton.disabled = false
    this.innerText = "Pause"
    pauseToggle = true
    stepper()
  }
}

function addComment(){
  event.preventDefault()
  let list = document.getElementById("list")
  let newP = document.createElement('p')
  newP.innerHTML = document.querySelector("#comment-form input").value
  list.appendChild(newP)
}



//document.setInterval(function(){alert('hi')}, 1000)
document.body.onload = function() {stepper()};

//document.getElementbyId("+").addEventListener("click", function(){alert('hi')})
plusButton = document.getElementById("+")
minusButton = document.getElementById("-")
pauseButton = document.getElementById("pause")
heartButton = document.getElementById("<3")
commentButton = document.getElementById("submit")

plusButton.addEventListener("click", increment)
minusButton.addEventListener("click", decrement)
heartButton.addEventListener("click", addLike)
pauseButton.addEventListener("click", pauseClick)
// commentButton.addEventListener("click", addComment)
commentButton.addEventListener("click", addComment)


// function myFunction() {
//     document.getElementById("demo").innerHTML = "Iframe is loaded.";
// }
