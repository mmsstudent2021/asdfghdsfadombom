const result = document.querySelector("#result");
const width = document.querySelector("#width");
const breadth = document.querySelector("#breadth");
const clear = document.querySelector("#clear");
const store = document.querySelector("#store");
const lists = document.querySelector("#lists");
const calc = document.querySelector("#calc");
const calcBtn = document.querySelector("#calcBtn");

function clear() {
  result.innerText = null;
  // width.value = breadth.value = null
  calc.reset(); // form element reset
}

calc.addEventListener("submit", function (event) {
  event.preventDefault();

  //area = width * breadth
  const area = width.valueAsNumber * breadth.valueAsNumber;
  result.innerText = area + "sqft";
});

clear.addEventListener("click", clear);

store.addEventListener("click", function () {
  const tr = document.createElement("tr");
  tr.innerHTML = `
        <td>${width.valueAsNumber} ft</td>
        <td>${breadth.valueAsNumber} ft</td>
        <td>${result.innerText}</td>
    `;
  lists.append(tr);

  clear();
});
