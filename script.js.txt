let pages = document.querySelectorAll(".page");
let heartRain = document.getElementById("heartRain");
let visited = new Set();

function go(id) {
  pages.forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  visited.add(id);
}

/* BACK */
function back() {
  go('menu');
}

/* HEARTS RAIN */
function rain() {
  let h = document.createElement("span");
  h.innerHTML = "💗";
  h.style.left = Math.random() * 100 + "vw";
  h.style.fontSize = (Math.random() * 20 + 15) + "px";
  heartRain.appendChild(h);
  setTimeout(() => h.remove(), 6000);
}
setInterval(rain, 400);

/* MUSIC */
function play(i) {
  document.querySelectorAll("audio").forEach(a => a.pause());
  document.querySelectorAll("audio")[i].play();
}

/* TAP HEART GAME */
function heartGame() {
  let area = document.getElementById("gameArea");
  area.innerHTML = "";
  for (let i = 0; i < 6; i++) {
    let h = document.createElement("span");
    h.innerHTML = "💗";
    h.style.fontSize = "40px";
    h.style.margin = "10px";
    h.onclick = () => {
      h.remove();
      alert("Love grows in tiny moments 💗");
    }
    area.appendChild(h);
  }
}

/* PUZZLE GAME */
function startPuzzle() {
  let area = document.getElementById("gameArea");
  area.innerHTML = `<img src="assets/images/puzzle-image.jpg" width="200">`;
  alert("Complete the puzzle mentally 😌💗");
}

/* QUIZ */
let q = [
["Where did we first start talking?","Instagram DMs","WhatsApp","Discord","Snapchat","Instagram DMs"],
["Who confessed feelings first?","You","Ashraf","Both together","Still confused 😋","You"],
["Our favourite thing to do together is?","Talking endlessly","Watching stuff together","Sending reels/memes","All of the above","All of the above"],
["What best describes our relationship vibe?","Chaotic but cute","Soft & comforting","Funny & dramatic","All of the above","All of the above"],
["What reminds me of Ashraf instantly?","Songs","Late night talks","Random cute messages","All of the above","All of the above"],
["What do we do after small fights?","Ignore each other","Talk it out","Send memes","Hug virtually","Talk it out"],
["My favourite thing about Ashraf?","Personality","Caring nature","Smile & humour","Everything","Everything"],
["Which emoji represents us best?","🫂","💗","😋✨","All of them","All of them"],
["Our relationship feels like?","Best friendship","Safe home","Adventure","All of the above","All of the above"],
["Future plans?","Travelling together","Building a cozy life","Creating memories daily","All of the above","All of the above"]
];

let qi = 0, score = 0;
function loadQ() {
  if(qi >= q.length) {
    document.getElementById("quizBox").innerHTML = `
      Score ${score}/10 💗 <br>
      <button onclick="go('letter1')">
      ${score>=9?'Okay wow Ashraf… certified soulmate 😋💗':score>=7?'Not bad… you notice me 😌✨':score>=5?'Hmm… improvement needed 😏':'Seriously? Extra hugs owed 🫂'}
      </button>
    `;
    return;
  }
  let d = q[qi];
  document.getElementById("quizBox").innerHTML = `
    <p>${d[0]}</p>
    <button onclick="ans('${d[1]}')">${d[1]}</button>
    <button onclick="ans('${d[2]}')">${d[2]}</button>
    <button onclick="ans('${d[3]}')">${d[3]}</button>
    <button onclick="ans('${d[4]}')">${d[4]}</button>
  `;
}
function ans(a) {
  if(a === q[qi][5]) score++;
  qi++;
  loadQ();
}
loadQ();

/* LETTERS OPEN */
function openLetter(id){
  document.getElementById(`${id}-open`).style.display="block";
  document.querySelector(`#${id} .closed`).style.display="none";
  let text = id==='letter1'?
`Hii Ashraf jaanu 💗✨

Happy Valentine’s Day meri jaan…🤭💗
Kabhi kabhi lagta hai ki life ne mujhe sabse unexpected but sabse beautiful surprise diya… aur woh aap ho 🫵🏻✨

Door rehna thoda mushkil hota hai.. but distance ne sirf prove ki ki aap mere liye kitne important ho 🫂🎀

Tum sirf mere boyfriend nahi ho Ashraf… tum meri comfort ho.. meri safe place ho.. meri har din ki happiness ho 🥹🫵🏻💗

Tumhare saath baat karna itna natural lagta hai jaise tum hamesha se meri life ka part the…😭✨

Thank you for loving me…🫂
I love you endlessly Ashraf… aur ek din main tumhe woh saare hugs aur kisses dungi jo abhi pending hai 🫂✨💋

I love you the most jaanuu 🥹✨🫵🏻`
:
`Ashraf 💗

Kabhi kabhi main sochti hoon… ki main itni lucky kaise ho gayi ki tum meri life mein aaye.. 🫂🫵🏻

Thank you mujhe choose karne ke liye…🥹✨
Thank you mere mood swings handle karne ke liye…💗✨
Aur thank you best boyfriend hone ke liye..😉🫵🏻

Tumhare saath future imagine karna easy lagta hai…🤭💗

Main promise karti hoon… chahe life mein problems aaye… main hamesha tumhare saath rahungi..🫂🎀

I’m proud to call you mine Ashraf 😋✨💗`;

  document.getElementById(id==='letter1'?'l1':'l2').innerText = text;
}
