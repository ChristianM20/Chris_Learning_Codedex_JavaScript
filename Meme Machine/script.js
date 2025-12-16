const memeArray = [
  "https://i.imgur.com/bSi4xLb.png",
  "https://i.imgur.com/6y0G7N0.png",
  "https://i.imgur.com/LXnRao1.png",
  "https://i.imgur.com/Qqoxh1N.png"
];

const captionArray = [
    "Aku: tenang. Otak: error.",
    "Niatnya sebentar, taunya lama.",
    "Bukan malas, cuma loading.",
    "Otak butuh restart.",
    "Besok aja, masih ada besok."
]

let memeImage = document.getElementById("random-meme");
let memeCaption = document.getElementById("random-caption");
let genButton = document.getElementById("generator-button");

genButton.addEventListener("click", function(){
    const randomIndexPic = Math.floor(Math.random() * memeArray.length);
    const randomIndexCap = Math.floor(Math.random() * captionArray.length);

    memeImage.src = memeArray[randomIndexPic];
    memeCaption.innerText = captionArray[randomIndexCap];
})