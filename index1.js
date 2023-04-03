//Untuk penamaan karakter
const namaKarakter = localStorage.getItem('namaKarakter');
const namaKarakterId = document.getElementById('namaKarakter');

var characterContainer = document.getElementById('character-container');
var gameContainer = document.getElementsByClassName('game-container');
var item = document.getElementsByClassName('item-container');
let index = parseInt(localStorage.getItem('pilihanKarakter'));
const indexAwal = index;
const characterImages = [
  "Assets/Drive/1a.gif", "Assets/Drive/2a.gif", "Assets/Drive/3a.gif", 
  "Assets/Drive/1b.gif", "Assets/Drive/2b.gif", "Assets/Drive/3b.gif", 
  "Assets/Drive/1c.gif", "Assets/Drive/2c.gif", "Assets/Drive/3c.gif",
  "Assets/Drive/1a-x.gif"
];
var exp = 0;  
const makan = document.getElementById('makan');
let aset = [];
const makanButton = document.getElementById('makan');
const healthButton = document.getElementById('health');
var playButton = document.getElementById('play');
const overlay = document.getElementById("overlay");
const sleepButton = document.getElementById("sleep");
const healthBarFill = document.getElementById("health-bar-fill");
let health = 100;
const eatBarFill = document.getElementById("eat-bar-fill");
let eat = 30;
const playBarFill = document.getElementById("play-bar-fill");
let play = 30;
const sleepBarFill = document.getElementById("sleep-bar-fill");
let sleep = 30;
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
let hours = 6;
let minutes = 0;

let level = 0;
/*
var isPlaying = false;
var obstacle1 = document.getElementById("obstacle1");
var obstacle2 = document.getElementById("obstacle2");
obstacle1.src = "Assets/Drive/star.png";
obstacle2.src = "Assets/Drive/star.png";
var characterPosition = { x: item.offsetWidth / 2, y: item.offsetHeight / 2 };
var characterWidth = item.offsetWidth;
var numObstaclesHit = 0;
*/

//evolusi
setInterval(() => {
  exp += 5;
  if(indexAwal == 0){
    if(exp >= 0 && exp < 1500){
      characterContainer.src = characterImages[index];
    } else if(exp >= 1500 && exp <= 3500){
      index = 3;
      characterContainer.src = characterImages[index];
      level = 1;
    } else if(exp >= 3500){
      index = 6;
      characterContainer.src = characterImages[index];
      level = 2;
    } 
  } else if(indexAwal == 1){
    if(exp >= 0 && exp < 1500){
      characterContainer.src = characterImages[index];
    } else if(exp >= 1500 && exp < 3500){
      index = 4;
      characterContainer.src = characterImages[index];
      level = 1
    } else if(exp >= 3500){
      index = 7;
      characterContainer.src = characterImages[index];
      level = 2;
    } 
  } else if(indexAwal == 2){
    if(exp >= 0 && exp < 1500){
      characterContainer.src = characterImages[index];
    } else if(exp >= 1500 && exp < 3500){
      index = 5;
      characterContainer.src = characterImages[index];
      level = 1;
    } else if(exp >= 3500){
      index = 8;
      characterContainer.src = characterImages[index];
      level = 2;
    }
  }
    
  console.log(`exp: ${exp}`);
}, 1000);



//Animasi fungsi makan dan health
function verifikasiIndex(){
  if(index == 0){
    aset = ["Assets/Drive/1a-eat.gif", "Assets/Drive/1a-health.gif", "Assets/Drive/1a-x.gif"]
  } else if(index == 1){
    aset = ["Assets/Drive/2a-eat.gif", "Assets/Drive/2a-health.gif"]
  } else if(index == 2){
    aset = ["Assets/Drive/3a-eat.gif", "Assets/Drive/3a-health.gif"]
  } else if(index == 3){
    aset = ["Assets/Drive/1b-eat.gif", "Assets/Drive/1b-health.gif"]
  } else if(index == 4){
    aset = ["Assets/Drive/2b-eat.gif", "Assets/Drive/2b-health.gif"]
  } else if(index == 5){
    aset = ["Assets/Drive/3b-eat.gif", "Assets/Drive/3b-health.gif"]
  } else if(index == 6){
    aset = ["Assets/Drive/1c-eat.gif", "Assets/Drive/1c-health.gif"]
  } else if(index == 7){
    aset = ["Assets/Drive/2c-eat.gif", "Assets/Drive/2c-health.gif"]
  } else if(index == 8){
    aset = ["Assets/Drive/3c-eat.gif", "Assets/Drive/3c-health.gif"]
  } 
  return aset;
}

//eat-button and function
makanButton.addEventListener('click', function() {
  // ubah gambar ke gambar kedua
  verifikasiIndex();
  characterContainer.src = aset[0];
  
  exp += 5;
  eat += 3;
  if (eat > 30) {
      eat = 30;
  }
  
  const timeLimit = 3; // dalam detik
  let timeLeft = timeLimit;
  const countdownTimer = setInterval(function() {
    timeLeft--;
    if (timeLeft <= 0) {
      // waktu habis, kembalikan gambar ke gambar awal
      clearInterval(countdownTimer);
      characterContainer.src = characterImages[index];
    }
  }, 3000);
});

//heatlh-button and function
healthButton.addEventListener('click', function() {
  // ubah gambar ke gambar kedua
  verifikasiIndex();
  characterContainer.src = aset[1];
  exp += 5;
  health += 20;
  if (health > 100) {
      health = 100;
  }
  healthBarFill.style.width = health + "%";

  const timeLimit = 3; // dalam detik
  let timeLeft = timeLimit;
  const countdownTimer = setInterval(function() {
    timeLeft--;
    if (timeLeft <= 0) {
      // waktu habis, kembalikan gambar ke gambar awal
      clearInterval(countdownTimer);
      characterContainer.src = characterImages[index];
    }
  }, 3000);
});

//sleep-button and function
// menampilkan overlay ketika button sleep ditekan
sleepButton.addEventListener("click", function() {
    overlay.style.display = "block";
    exp += 5;
    sleep += 30;
    hours = 6;
    minutes = 0;
    if (sleep > 30) {
        sleep = 30;
    }
    sleepBarFill.style.width = (sleep / 30) * 100 + "%";

    const timeLimit = 3; // dalam detik
    let timeLeft = timeLimit;
  const countdownTimer = setInterval(function() {
    timeLeft--;
    if (timeLeft <= 0) {
      // waktu habis, kembalikan gambar ke gambar awal
      clearInterval(countdownTimer);
      characterContainer.src = characterImages[index];
    }
  }, 1000);
});

// menyembunyikan overlay ketika area di luar button sleep ditekan
overlay.addEventListener("click", function(event) {
  if (event.target === this) {
      this.style.display = "none";
  }
  eat -= 4;
  health -= 10;
  play -= 3;
});

//fungsi bar
//heatlh
healthBarFill.style.width = health + "%";
setInterval(() => {
  health -= 2;
  if (health < 0) {
    health = 0;
  }
  healthBarFill.style.width = health + "%";
}, 3000);

//eat
eatBarFill.style.width = (eat / 30) * 100 + "%";
setInterval(() => {
    eat -= 0.5;
    if (eat < 0) {
      eat = 0;
    }
    eatBarFill.style.width = (eat / 30) * 100 + "%";
}, 3000);

//main
playBarFill.style.width = (play / 30) * 100 + "%";
setInterval(() => {
    play -= 0.5;
    if (play < 0) {
      play = 0;
    }
    playBarFill.style.width = (play / 30) * 100 + "%";
}, 3000);

//sleep
sleepBarFill.style.width = (play / 30) * 100 + "%";
setInterval(() => {
    sleep -= 0.5;
    if (sleep < 0) {
      sleep = 0;
    }
    sleepBarFill.style.width = (sleep / 30) * 100 + "%";
}, 3000);

//fitur waktu
function updateTime(){
  minutes += 10;

  if(minutes >= 60){
    hours++;
    minutes = 0
  }

  if(hours >= 24){
    hours = 0;
  }

  const hoursString = hours < 10 ? `0${hours}` : hours;
  const minutesString = minutes < 10 ? `0${minutes}` : minutes;

  hoursElement.textContent = hoursString;
  minutesElement.textContent = minutesString;

  const gameContainer = document.querySelector('.game-container');

  if (hours >= 6 && hours < 12) {
    gameContainer.style.backgroundImage = 'url(Assets/Drive/morning.png)';
    namaKarakterId.innerHTML = `Selamat Pagi, ${namaKarakter}`;
  } else if (hours >= 12 && hours < 15) {
    gameContainer.style.backgroundImage = 'url(Assets/Drive/afternoon.png)';
    namaKarakterId.innerHTML = `Selamat Siang, ${namaKarakter}`;
  } else if (hours >= 15 && hours < 18){
    gameContainer.style.backgroundImage = 'url(Assets/Drive/evening.png)';
    namaKarakterId.innerHTML = `Selamat Sore, ${namaKarakter}`;
  } else {
    gameContainer.style.backgroundImage = 'url(Assets/Drive/night.png)';
    namaKarakterId.innerHTML = `Selamat Malam, ${namaKarakter}`;
  }
}

setInterval(updateTime, 1000);

//game over case
function checkStatus() {
  if (eat === 0 || health === 0 || play === 0 || sleep === 0) {
    alert("Game Over!");
    location.href = 'main.html'
  }
}

setInterval(checkStatus, 1000);

//suicide mode
const suicideButton = document.getElementById('suicide');
suicideButton.addEventListener('click', function(){
  health = 0;
});

//fungsi play
//play-button and function
playButton.addEventListener('click', function() {
  exp += 5;
  play += 30;
  if (play > 30) {
      play = 30;
  }
  playBarFill.style.width = (play / 30) * 100 + "%";
  /*
  characterContainer.style.width = "100px";
  characterContainer.style.height = "100px";
  startGame();
  */
});
/*
function handleKeyDown(event) {
  if (isPlaying) {
      if (event.keyCode === 65) {
      characterPosition.x -= 10;
      if (characterPosition.x < characterWidth / 2) {
          characterPosition.x = characterWidth / 2;
      }
      characterContainer.style.left = characterPosition.x + "px";
      } else if (event.keyCode === 68) {
      characterPosition.x += 10;
      if (characterPosition.x > item.offsetWidth - 2 - characterWidth / 2) {
          characterPosition.x = item.offsetWidth - 2 - characterWidth / 2;
      }
      characterContainer.style.left = characterPosition.x + "px";
      } else if (event.keyCode === 87) {
      characterPosition.y -= 10;
      if (characterPosition.y < characterWidth / 2) {
          characterPosition.y = characterWidth / 2;
      }
      characterContainer.style.top = characterPosition.y + "px";
      } else if (event.keyCode === 83) {
      characterPosition.y += 10;
      if (characterPosition.y > item.offsetHeight - 2 - characterWidth / 2) {
          characterPosition.y = item.offsetHeight - 2 - characterWidth / 2;
      }
      characterContainer.style.top = characterPosition.y + "px";
      }

      // Check if character hits obstacle1
      if (checkCollision(characterContainer, obstacle1)) {
      obstacle1.remove();
      numObstaclesHit += 1;
      }

      // Check if character hits obstacle2
      if (checkCollision(characterContainer, obstacle2)) {
      obstacle2.remove();
      numObstaclesHit += 1;
      }

      // Check if all obstacles are hit
      if (numObstaclesHit >= 2) {
      isPlaying = false;
      resetGame();
      }
  }
}

function checkCollision(obj1, obj2) {
  var obj1Rect = obj1.getBoundingClientRect();
  var obj2Rect = obj2.getBoundingClientRect();

  return !(
      obj1Rect.bottom < obj2Rect.top ||
      obj1Rect.top > obj2Rect.bottom ||
      obj1Rect.right < obj2Rect.left ||
      obj1Rect.left > obj2Rect.right
  );
}

function resetGame() {
  numObstaclesHit = 0;
  obstacle1.style.display = "none";
  obstacle2.style.display = "none";
  item.innerHTML = `
    <img id="character-container" class="character-container">
    <img id="obstacle1" class="obstacle">
    <img id="obstacle2" class="obstacle">
  `;
  characterContainer = document.getElementById("character-container");
  obstacle1 = document.getElementById("obstacle1");
  obstacle2 = document.getElementById("obstacle2");
  characterPosition = { x: item.offsetWidth / 2, y: item.offsetHeight / 2 };
  characterContainer.style.left = characterPosition.x + "px";
  characterContainer.style.top = characterPosition.y + "px";
}

function getRandomPosition() {
  var x = Math.floor(Math.random() * (item.offsetWidth - 20));
  var y = Math.floor(Math.random() * (item.offsetHeight - 20));
  return { x: x, y: y };
}

function startGame() {
  isPlaying = true;
  var obstacle1Position = getRandomPosition();
  var obstacle2Position = getRandomPosition();
  obstacle1.style.left = obstacle1Position.x + "px";
  obstacle1.style.top = obstacle1Position.y + "px";
  obstacle2.style.left = obstacle2Position.x + "px";
  obstacle2.style.top = obstacle2Position.y + "px";
  obstacle1.style.display = "block";
  obstacle2.style.display = "block";
}

document.addEventListener("keydown", handleKeyDown);
*/

var indikator = document.getElementById("indikator");
setInterval(() => {
  indikator.innerHTML = `Indikator:<br>Health: ${health} Play: ${play} <br>Eat: ${eat} Sleep: ${sleep} <br>Exp: ${exp} Level: ${level}`;
}, 1000);

const manualButton = document.getElementById("manual");
const overlay1 = document.getElementById("overlay1");

manualButton.addEventListener("click", function() {
  overlay1.style.display = "block";
});

window.addEventListener("click", function(event) {
  if (event.target == overlay1) {
    overlay1.style.display = "none";
  }
});