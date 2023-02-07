//selector
const obj = document.querySelector("#obj");
const text = document.querySelector("#text");
const selectFont = document.querySelector("#selectFont");
const color = document.querySelector("#color");
const fontSize = document.querySelector("#fontSize");
const talkBtn = document.querySelector("#talkBtn");
const typeBtn = document.querySelector("#typeBtn");

const fonts = ["Helvetica", "Tahoma", "Monospace", "Impact", "Geneva"];

// functions
const changeText = (event) => {
  obj.innerText = event.target.value;
};

const changeColor = (event) => {
  obj.style.color = event.target.value;
};

const changeFontSize = (event) => {
  obj.style.fontSize = event.target.value + "px";
};

const createNewOption = (text, value) => {
  const option = document.createElement("option");
  option.value = value;
  option.innerText = text;
  return option;
};

const changeFontFamily = (event) => {
  obj.style.fontFamily = event.target.value;
};

const talk = (text) => {
  const synth = window.speechSynthesis;
  const voices = synth.getVoices();
  // console.log(voices);
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = voices[146];
  utterance.rate = 0.8;
  synth.speak(utterance);

  utterance.addEventListener("start", () => {
    talkBtn.classList.add("active");
  });

  utterance.addEventListener("end", () => {
    talkBtn.classList.remove("active");
  });
};

const type = () => {
  var recognition = new webkitSpeechRecognition();

  recognition.onstart = function () {
    console.log("Speech recognition has started.");
  };

  recognition.onresult = function (event) {
    // console.log(event.results);
    var transcript = event.results[0][0].transcript;
    text.value += transcript;
  };

  recognition.addEventListener("start", () => {
    typeBtn.classList.add("active");
  });

  recognition.addEventListener("end", () => {
    typeBtn.classList.remove("active");
  });

  recognition.start();
};

//change range html
fontSize.min = parseFloat(window.getComputedStyle(obj).fontSize);
fontSize.max = 100;
fontSize.value = fontSize.min;

// create options for font
fonts.forEach((font) => selectFont.append(new Option(font, font)));

// event
text.addEventListener("keyup", changeText);
color.addEventListener("change", changeColor);
fontSize.addEventListener("change", changeFontSize);
selectFont.addEventListener("change", changeFontFamily);

// console.log(createNewOption("Myanmar", "mm"));
// console.log(new Option("Myanmar", "mm"));

talkBtn.addEventListener("click", () => {
  talk(text.value);
});

typeBtn.addEventListener("click", () => {
  type();
});
