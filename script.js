let times_played = 0
// setting up player status 
let player_health = 20
let player_damage = 2
// setting up goblin status
let goblin_1_name = 'Goblin (level 1)'
let goblin_health = 15
let goblin_damage = 0.5
let beginning_message = document.getElementById("display").innerHTML = "Hi there! please type your username first!<br><br><button id = 'confirmname' onclick = 'confirmname()'>Confirm</button>"
function firstgoblin() {
  document.getElementById('display').innerHTML = `${goblin_1_name}<br><font color = 'red'>health: ${goblin_health}<br>damage: ${goblin_damage}</font>`
  return player_status()
}
function confirmname() {
  name = prompt("enter your name");
  if (name === 'null') return alert('please enter your name')
  else if (name === '') return alert('please enter a name')
  document.getElementById('buttons').innerHTML = "<br><br><br><br><br><br><center><button id = 'button1' onclick = 'attack()'>Attack</button><button id = 'button2' onclick = 'defense()'>Defense</button><br><button id = 'button3' onclick = 'special()'>Special Attack</button></center>"
  return firstgoblin()
}

function player_status() {
  document.getElementById('playerstatus').innerHTML = `${name}, health: ${player_health}, damage: ${player_damage}`
}

function attack() {
  
  if (firstgoblin) {
    times_played += 1
    goblin_health = goblin_health - player_damage
    document.getElementById('buttonsinfo').innerHTML = 'you used Attack!'
    document.getElementById('button1').onclick = 'none()'
    document.getElementById('button1').style.border = '1px solid lightgreen'
    document.getElementById('button1').style.background = 'green'
  }
  return firstgoblin()
}
