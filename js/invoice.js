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
const table = document.querySelector("#table");
const printOpen = document.querySelector("#printOpen");
const builder = document.querySelector("#builder");
const addListForm = document.querySelector("#addListForm");
const selectService = document.querySelector("#selectService");
const quantity = document.querySelector("#quantity");
const rows = document.querySelector("#rows");
const subTotal = document.querySelector("#subTotal");
const gst = document.querySelector("#gst");
const total = document.querySelector("#total");
const addServiceForm = document.querySelector("#addServiceForm");
const addServiceModalOpen = document.querySelector("#addServiceModalOpen");
const addServiceModal = new bootstrap.Modal("#addServiceModal");
const invoiceInfoForm = document.querySelector("#invoiceInfoForm");
const printInfoOffcanvas = new bootstrap.Offcanvas("#printInfoOffcanvas");

// console.log(printInfoOffcanvas);

// function
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

  const isExistedProduct = [...rows.children].find(
    (el) => el.getAttribute("product-id") == currentProduct.id
  );

  console.log(isExistedProduct);

  if (isExistedProduct) {
    const rq = isExistedProduct.querySelector(".row-quantity");
    const rt = isExistedProduct.querySelector(".row-total");

    rq.innerText = parseFloat(rq.innerText) + quantity.valueAsNumber;
    rt.innerText = rq.innerText * currentProduct.price;
  } else {
    rows.append(createRow(currentProduct, quantity.valueAsNumber));
  }

  addListForm.reset();
  calculateTotal();
};

const createRow = (product, quantity) => {
  const total = product.price * quantity;

  const tr = document.createElement("tr");
  tr.setAttribute("product-id", product.id);
  tr.innerHTML = `
        <td class=" d-flex justify-content-between">
        ${product.title}
        <i class=" bi bi-trash3 text-danger del-btn"></i>
        </td>
        <td class="text-end row-quantity">${quantity}</td>
        <td class="text-end">${product.price}</td>
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

  if (rows.children.length) {
    table.classList.remove("d-none");
  } else {
    table.classList.add("d-none");
  }
};

const getRandomId = (min = 0, max = 500000) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num.toString().padStart(6, "0");
};

// process
products.forEach((product) =>
  selectService.append(new Option(product.title, product.id))
);

addListForm.addEventListener("submit", addNewList);

// document.querySelectorAll(".del-btn").forEach((el) => {
//   el.addEventListener("click", (event) => {
//     console.log(event);
//   });
// });

app.addEventListener("click", (event) => {
  // console.log(event.target);
  if (event.target.classList.contains("del-btn")) {
    if (confirm("Are U sure to delete ?")) {
      event.target.closest("tr").remove();
      calculateTotal();
    }
  }
});

addServiceModalOpen.addEventListener("dblclick", () => {
  addServiceModal.show();
});

addServiceForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event.target);
  const formData = new FormData(event.target);
  console.log(
    formData.get("new_service_name"),
    formData.get("new_service_price")
  );

  // arr el add

  const newProduct = {
    id: Date.now(),
    title: formData.get("new_service_name"),
    price: parseFloat(formData.get("new_service_price")),
  };

  products.push(newProduct);

  console.log(products);

  // dom el add
  selectService.add(new Option(newProduct.title, newProduct.id));

  event.target.reset();

  addServiceModal.hide();
});

printOpen.addEventListener("click", () => {
  document.querySelector("[name='invoice_number']").value = getRandomId();
  document.querySelector("[name='invoice_date']").valueAsDate = new Date();
  printInfoOffcanvas.show();
});

invoiceInfoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  document.querySelector("#showInvoiceNumber").innerText =
    formData.get("invoice_number");

  document.querySelector("#showInvoiceDate").innerText =
    formData.get("invoice_date");

  document.querySelector("#showCustomerName").innerText =
    formData.get("customer_name");

  document.querySelector("#showCustomerPhone").innerText =
    formData.get("customer_contact");

  document.querySelector("#showCustomerAddress").innerText =
    formData.get("customer_address");

  event.target.reset();

  printInfoOffcanvas.hide();

  print();
});
