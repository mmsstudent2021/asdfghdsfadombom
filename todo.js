const h1 = document.querySelector("h1");

console.dir(h1);

const addBtn = document.querySelector("#addBtn");
const inputText = document.querySelector("#inputText");
const ulList = document.querySelector("#ulList");

const createLi = (text) => {
  const li = document.createElement("li");
  const dynamicId = "check" + Date.now();
  li.className =
    "list-group-item border-dark d-flex justify-content-between align-items-center";
  li.innerHTML = `
    <div class="form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="${dynamicId}"
      onchange="check(event)"
    />
    <label class="form-check-label text-label" for="${dynamicId}">
      ${text}
    </label>
  </div>
  <div class="btn-group">
    <button onclick="del(event)" class="btn btn-sm btn-outline-dark">
      <i class="bi bi-trash3 pe-none"></i>
    </button>
    <button onclick="edit(event)" class="btn btn-sm btn-outline-dark">
      <i class="bi bi-pencil pe-none"></i>
    </button>
  </div>`;
  return li;
};

const check = (event) => {
  console.dir(event.target);
  const text = event.target.nextElementSibling;
  text.classList.toggle("text-decoration-line-through");
  //   console.log(ulList.querySelectorAll(".text-decoration-line-through").length);
  console.log(ulList.querySelectorAll(":checked").length);
};

const del = (event) => {
  if (confirm("Are U sure to delete ?")) {
    event.target.closest("li").remove();
    listCounter();
  }
};

const edit = (event) => {
  console.log(event.target.closest("li"));
  const currentElement = event.target
    .closest("li")
    .querySelector(".text-label");

  let newText = prompt("New Text to update", currentElement.innerText);

  currentElement.innerText = newText;
};

const listCounter = () => {
  const total = ulList.children.length;
  if (total) {
    listCount.innerText = "Count :" + ulList.children.length;
  } else {
    listCount.innerText = null;
  }
};

const btnClick = () => {
  //   console.log(inputText.value);
  ulList.append(createLi(inputText.value));
  inputText.value = null;
  listCounter();
};

//create p with before
const p = document.createElement("p");
p.innerText = "Your Lists";
ulList.before(p);

// list count
const listCount = document.createElement("p");
// listCount.innerText = 123;
listCount.classList.add("mt-3");
ulList.after(listCount);

addBtn.addEventListener("click", btnClick);
inputText.addEventListener("keyup", (event) => {
  console.log(event.key, event.keyCode);
  if (event.keyCode === 13) {
    btnClick();
  }
});
