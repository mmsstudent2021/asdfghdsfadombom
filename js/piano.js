const sounds = [
  {
    id: 1,
    sound: "C4",
    key: "a",
  },
  {
    id: 2,
    sound: "D4",

    key: "s",
  },
  {
    id: 3,
    sound: "E4",
    key: "d",
  },
  {
    id: 4,
    sound: "F4",
    key: "f",
  },
  {
    id: 5,
    sound: "G4",
    key: "j",
  },
  {
    id: 6,
    sound: "A4",
    key: "k",
  },
  {
    id: 7,
    sound: "B4",
    key: "l",
  },
  {
    id: 8,
    sound: "C5",
    key: ";",
  },
];

const keyboard = document.querySelector("#keyboard");

const createKey = (x) => {
  const div = document.createElement("div");
  div.classList.add("col", "border", "text-center", "py-5", "key");
  div.innerText = x;
  div.setAttribute("sound", x);
  return div;
};

const playSound = (sound) => {
  const audio = new Audio("../sound/" + sound + ".mp3");
  audio.play();
};

sounds.forEach((x) => {
  //   console.log(x);
  keyboard.append(createKey(x.sound));
});

[...document.querySelectorAll(".key")].forEach((el) => {
  el.addEventListener("click", (event) => {
    playSound(event.target.getAttribute("sound"));
    // console.log(event.target.innerText);
  });
});

document.addEventListener("keyup", (event) => {
  //   console.log(event.key);
  const current = sounds.find((sound) => sound.key === event.key);
  if (current) {
    playSound(current.sound);
    const currentKey = document.querySelector("[sound=" + current.sound + "]");

    console.log(currentKey);
    currentKey.classList.add("active");
    setTimeout(() => {
      currentKey.classList.remove("active");
    }, 100);
  }
});
