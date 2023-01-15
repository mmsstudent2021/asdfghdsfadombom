//selector
const obj = document.querySelector("#obj");
const text = document.querySelector("#text");
const selectFont = document.querySelector("#selectFont");
const color = document.querySelector("#color");
const fontSize = document.querySelector("#fontSize");

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
