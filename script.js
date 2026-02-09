let pages=document.querySelectorAll(".page")
let current=0

function go(n){
  pages[current].classList.remove("active")
  current=n
  pages[current].classList.add("active")
}

/* Intro auto transition */
setTimeout(()=>go(1),3000)

/* Hearts rain */
setInterval(()=>{
  let h=document.createElement("span")
  h.innerText="💗"
  h.style.left=Math.random()*100+"vw"
  h.style.fontSize=15+Math.random()*20+"px"
  document.getElementById("heartRain").appendChild(h)
  setTimeout(()=>h.remove(),6000)
},400)

/* MUSIC */
let songs=[
  new Audio("assets/song1.mp3"),
  new Audio("assets/song2.mp3"),
  new Audio("assets/song3.mp3")
]

let timerIntervals = [];

function playSong(i){
  // Pause all songs
  songs.forEach((s, index)=>{
    s.pause();
    clearInterval(timerIntervals[index]);
  });

  songs[i].currentTime = 0;
  songs[i].play();

  // Update timer
  const timerEl = document.getElementById(`timer${i}`);
  timerIntervals[i] = setInterval(()=>{
    const min = Math.floor(songs[i].currentTime / 60);
    const sec = Math.floor(songs[i].currentTime % 60).toString().padStart(2, '0');
    timerEl.innerText = `${min}:${sec}`;
  }, 500);
}
