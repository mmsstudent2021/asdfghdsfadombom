// variables
const products = [
  {
    id: 1,
    title: "Domain Service",
    price: 15,
  },
  {
    id: 2,
    title: "Hosting",
    price: 50,
  },
  {
    id: 3,
    title: "Web Design Serivce",
    price: 100,
  },
  {
    id: 4,
    title: "Web Development Service",
    price: 300,
  },
  {
    id: 5,
    title: "Deployment & Maintenance",
    price: 50,
  },
];

//selector
const app = document.querySelector("#app");
const builder = document.querySelector("#builder");
const addListForm = document.querySelector("#addListForm");
const selectService = document.querySelector("#selectService");
const quantity = document.querySelector("#quantity");
const rows = document.querySelector("#rows");
const subTotal = document.querySelector("#subTotal");
const gst = document.querySelector("#gst");
const total = document.querySelector("#total");

// funciton
const addNewList = (event) => {
  event.preventDefault();
  // id ကိုသိတာနဲ့ product လိုချင်တယ်
  const currentProduct = products.find(
    (product) => product.id == selectService.value
  );
  //   console.log(
  //     currentProduct.title,
  //     currentProduct.price,
  //     quantity.valueAsNumber
  //   );
  rows.append(
    creatRow(currentProduct.title, currentProduct.price, quantity.valueAsNumber)
  );

  addListForm.reset();
  calculateTotal();
};

const creatRow = (title, price, quantity) => {
  const total = price * quantity;

  const tr = document.createElement("tr");
  tr.innerHTML = `
        <td>${title}</td>
        <td class="text-end">${quantity}</td>
        <td class="text-end">${price}</td>
        <td class="text-end row-total">${total}</td> 
    `;
  return tr;
};

const taxPercentage = (amount, percentage = 5) => {
  return amount * (percentage / 100);
};

const calculateTotal = () => {
  //   let subTotal = 0;
  //   const rowList = document.querySelectorAll(".row-total");
  //   rowList.forEach((el) => (subTotal += parseFloat(el.innerText)));
  //   console.log(subTotal);

  const calculateSubTotal = [...document.querySelectorAll(".row-total")].reduce(
    (pv, cv) => pv + parseFloat(cv.innerText),
    0
  );
  const calculateGst = taxPercentage(calculateSubTotal);
  const calculateFinalTotal = calculateSubTotal + calculateGst;

  subTotal.innerText = calculateSubTotal;
  gst.innerText = calculateGst;
  total.innerText = calculateFinalTotal;
};

// process
products.forEach((product) =>
  selectService.append(new Option(product.title, product.id))
);

addListForm.addEventListener("submit", addNewList);
