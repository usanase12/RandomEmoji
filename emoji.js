const emojis =[
    "❤",
     "😂",
     "🤣",
     "😃",
     "🤩",
     "😴",
     "😛",
     "😎"
]
const face = document.getElementById("face");
const btn = document.getElementById("button");
btn.addEventListener("click", ()=>{
    let round = Math.floor(Math.random()*emojis.length);
    let result = emojis[round];
    face.innerHTML = result;
});