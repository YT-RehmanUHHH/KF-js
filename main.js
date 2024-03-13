// KF Panda Search

// HTML Variables
let charNameEl = document.getElementById("charName");
let charQuoteEl = document.getElementById("charQuote");
let charImgEl = document.getElementById("charImg");
let body = document.getElementById("body");
let h1 = document.getElementById("h1");
let div = document.getElementById("div");

// Button event listener
document.getElementById("btn").addEventListener("click", btnClicked);
document.getElementById("theme-btn").addEventListener("click", themeBtnClicked);

function themeBtnClicked() {
  let themeIn = document.getElementById("theme-in").value;
  let mR1 = Math.ceil(Math.random() * 255);
  let mR2 = Math.ceil(Math.random() * 255);
  let mR3 = Math.ceil(Math.random() * 255);

  if (themeIn.toLowerCase() == "dark" || themeIn.toLowerCase() == "black") {
    body.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    charQuoteEl.style.color = "white";
    charNameEl.style.color = "white";
    h1.style.color = "white";
  } else if (
    themeIn.toLowerCase() == "light" ||
    themeIn.toLowerCase() == "white"
  ) {
    body.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
    charQuoteEl.style.color = "black";
    charNameEl.style.color = "black";
    h1.style.color = "black";
  } else if (themeIn == "random") {
    let newColor = `rgb(${mR1},${mR2},${mR3})`;
    let newFontColor = `rgb(${mR3},${mR1},${mR2})`;
    body.style.background = `${newColor}`;
    div.style.color = `${newFontColor}`;
    body.style.color = `${newFontColor}`;
  }
}

function btnClicked() {
  // input
  let name = document.getElementById("charIn").value;

  //   if statements
  if (name.toLowerCase() == "po") {
    charNameEl.innerHTML = `Po`;
    charQuoteEl.innerHTML = `"Buddy I am the Dragon Warrior!"`;
    charImgEl.src = "img/po.png";
  } else if (name.toLowerCase() == "tigress") {
    charNameEl.innerHTML = `Tigress`;
    charQuoteEl.innerHTML = `"That was hardcore"!`;
    charImgEl.src = "img/tigress.png";
  } else if (name.toLowerCase() == "mantis") {
    charNameEl.innerHTML = `Mantis`;
    charQuoteEl.innerHTML = `"Fear the bug!"`;
    charImgEl.src = "img/mantis.png";
  } else if (name.toLowerCase() == "monkey") {
    charNameEl.innerHTML = `Monkey`;
    charQuoteEl.innerHTML = `"We should hang out!"`;
    charImgEl.src = "img/monkey.png";
  } else if (name.toLowerCase() == "viper") {
    charNameEl.innerHTML = `Viper`;
    charQuoteEl.innerHTML = `"I don't need to bite to fight!"`;
    charImgEl.src = "img/viper.png";
  } else if (name.toLowerCase() == "crane") {
    charNameEl.innerHTML = `Crane`;
    charQuoteEl.innerHTML = `"Wings of Justice!"`;
    charImgEl.src = "img/crane.png";
  } else if (name.toLowerCase() == "crane") {
    charNameEl.innerHTML = `Boss-Wolf`;
    charQuoteEl.innerHTML = `"I'll tell you what's gonna be yours: my fist in your plush, cuddly, super-soft face!"`;
    charImgEl.src = "img/boss-wolf.png";
  } else if (name.toLowerCase() == "croc") {
    charNameEl.innerHTML = `Croc`;
    charQuoteEl.innerHTML = `"With despair for dessert!"`;
    charImgEl.src = "img/croc.png";
  } else if (name.toLowerCase() == "kai") {
    charNameEl.innerHTML = `Kai`;
    charQuoteEl.innerHTML = `"Kai has RETURNED!"`;
    charImgEl.src = "img/kai.png";
  } else if (name.toLowerCase() == "mr ping") {
    charNameEl.innerHTML = `Mr Ping`;
    charQuoteEl.innerHTML = `"To make something special, you just have to believe it's special!"`;
    charImgEl.src = "img/mr-ping.png";
  } else if (name.toLowerCase() == "oogway") {
    charNameEl.innerHTML = `Oogway`;
    charQuoteEl.innerHTML = `"Remember the path!"`;
    charImgEl.src = "img/oogway.png";
  } else if (name.toLowerCase() == "shifu") {
    charNameEl.innerHTML = `Shifu`;
    charQuoteEl.innerHTML = `"Inner peace... Inner peace..."`;
    charImgEl.src = "img/shifu.png";
  } else if (name.toLowerCase() == "shen") {
    charNameEl.innerHTML = `Shen`;
    charQuoteEl.innerHTML = `"Call in the wolves! All of them! I want them ready to move! The Year of the Peacock begins now!"`;
    charImgEl.src = "img/shen.png";
  } else if (name.toLowerCase() == "soothsayer") {
    charNameEl.innerHTML = `Soothsayer`;
    charQuoteEl.innerHTML = `"Your story may not have such a happy beginning, but that doesn't make you who you are. It is the rest of your story, who you choose to be."`;
    charImgEl.src = "img/soothsayer.png";
  } else if (name.toLowerCase() == "storming ox") {
    charNameEl.innerHTML = `Storming Ox`;
    charQuoteEl.innerHTML = `"It's time to surrender, panda. Kung fu is dead!"`;
    charImgEl.src = "img/storming-ox.png";
  } else if (name.toLowerCase() == "tai lung") {
    charNameEl.innerHTML = `Tai Lung`;
    charQuoteEl.innerHTML = `"Whatever I did, I did to make you proud!"`;
    charImgEl.src = "img/tai-lung.png";
  } else if (name.toLowerCase() == "boss wolf") {
    charNameEl.innerHTML = `Boss Wolf`;
    charQuoteEl.innerHTML = `"Guess nobody told you: If you mess with the wolf, you get the fangs."`;
    charImgEl.src = "img/boss-wolf.png";
  } else {
    charNameEl.innerHTML = `?????`;
    charQuoteEl.innerHTML = `---------`;
    charImgEl.src = "img/question-mark.png";
  }
}
