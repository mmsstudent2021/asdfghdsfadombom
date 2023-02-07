// fun statement
// function run(x, y) {
//   return x + y;
// }

//fun expression
// const run = function(x,y){
//     return x+y;
// }

//arrow function

// const run = (x, y) => {
//   //multiple statement
//   console.log(x);
//   console.log(y);
//   return x + y;
// };

// const run = x => `This is fun run with para x : ${x}`;

// console.log(run(5));

// const square = (x) => x ** 2;

// console.log(square(5));

// const obj = {
//   myName: "hein htet zan",
//   myAge: 28,
//   teach() {
//     console.log(this);
//     return this.myName + " can teach";
//   },
//   eat: (food) => obj.myName + " can eat " + food,
//   test: () => {
//     console.log(this);
//   },
// };

// console.log(obj.teach());
// // console.log(obj.eat("hotpot"));
// console.log(obj.test());

// function myCalculator(num1, num2, myCallback) {
//   let sum = num1 + num2;
//   return myCallback(sum);
// }

// myCalculator(2, 3, function (x) {
//   console.log(x ** x);
// });

// myCalculator(6, 5, function (x) {
//   alert(x);
// });

// console.log(myCalculator(2, 3, (x) => x ** x));

// let myName = "hein htet zan";
// const myString = new String("Min ga lar par");

// console.log(myString);

//0000 0000 0000 0000
// 57

// string to arr
// console.log(myString.split(" "));

// console.log("AB".padStart(16, "Y"));
// console.log("AB".padEnd(16, "Z"));

// console.log(myString.trim().length);

// console.log(myString.replaceAll("a", "zzz"));

// console.log(myString.search("ga"));
// console.log(myString.search("za"));

// console.log(myString.substr(0, 10));

// console.log(myString.length);
// console.log(myString.toUpperCase());
// console.log(myString.toLowerCase());

// class Me {
//   a = "a";
//   b = "b";
//   x() {
//     return "x";
//   }
//   y() {
//     return "y";
//   }
// }

// const me = new Me();
// console.log(me);

// const no = new Number("124.347443");
// console.log(no);

// console.log(no.toString());
// console.log(no.toFixed(2));
// console.log(no.toPrecision(10));

// const arr = new Array();
// const fruits = ["banana", "apple", "mango", "lemon", "orange"];
// console.log(fruits);

//arr to string
// console.log(fruits.toString());
// console.log(fruits.join("--"));

// console.log(fruits.length);
// console.log(fruits.sort());
// console.log(fruits.reverse());

// fruits.push("xxx");
// fruits.push("yyy");
// fruits.push("zzz");
// fruits.unshift("ccc");
// fruits.unshift("bbb");
// fruits.unshift("aaa");

// fruits.pop();
// fruits.pop();
// fruits.pop();

// fruits.shift();
// fruits.shift();
// fruits.shift();

// fruits.sort();

// fruits.splice(1, 0, "aaa", "bbb");

// console.log(fruits);

// for (fruit of fruits) {
//   console.log(fruit);
// }

// fruits.forEach((fruit, index, arr) => console.log(index, fruit, arr));

// console.log(fruits);

// fruits.forEach(function (fruit) {
//   console.log(fruit);
// });

// console.log(Array.isArray(5));

// const fruits = ["banana", "apple", "mango", "lemon", "orange"];
// const arr = ["a", "b", "c"];
// const nums = [1, 3, 4];

// const newFruitArray = fruits.map((fruit) => {
//   console.log(fruit);

//   return fruit.toUpperCase() + " " + fruit.length;
// });
// console.log(newFruitArray);

// for (fruit of fruits) {
//   console.log(fruit);
// }

// fruits.forEach(function (fruit, index) {
//   console.log(fruit, index);
// });

// const newFruitArray = fruits.forEach((fruit) => fruit);
// fruits.forEach((fruit, index) => console.log(fruit, index));
// console.log(newFruitArray);

// console.log(fruits.includes("apple"));
// console.log(fruits.indexOf("za"));

// console.log(fruits.splice(0, 2, "aaa", "bbbb", "ccc"));
// console.log(fruits.slice(1, 3));

// console.log(fruits.concat(arr).concat(nums).concat(fruits));

// console.log(["hein", ...fruits, "arr", ...arr, "num", ...nums]);

// စျေးတင်

// const arr = products.map((product) => {
//   product.price += 100;
//   product.title = "MMS " + product.title;

//   return {
//     title: product.title,
//     price: product.price,
//     category: product.category,
//   };
// });

// console.table(arr);

// $ 50 အောက် ပစ္စည်

// id 10 အောက်

// id 5 တစ်ခုပဲ

// id 5 မဟုတ်တာတွေအကုန်

// id 1 7 15 only

// const arr = products.filter((products) => products.price < 50);
// const arr = products.filter(
//   (product) => {
//     console.log(product.title);
//     return product.id === 5;
//   }
//   //   (product) => ![1, 7, 5, 9].includes(product.id)
// );
// console.log(arr);

// const obj = products.find((product) => {
//   console.log(product.id);
//   return product.id === 5;
// });

// const obj = products.findIndex((product) => {
//   //   console.log(product.id);
//   return product.id === 5;
// });

// console.log(obj);

// const products = [
//   {
//     id: 1,
//     title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     price: 109.95,
//     description:
//       "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     category: "men's clothing",
//     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     rating: { rate: 3.9, count: 120 },
//   },
//   {
//     id: 2,
//     title: "Mens Casual Premium Slim Fit T-Shirts ",
//     price: 22.3,
//     description:
//       "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//     category: "men's clothing",
//     image:
//       "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//     rating: { rate: 4.1, count: 259 },
//   },
//   {
//     id: 3,
//     title: "Mens Cotton Jacket",
//     price: 55.99,
//     description:
//       "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
//     category: "men's clothing",
//     image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
//     rating: { rate: 4.7, count: 500 },
//   },
//   {
//     id: 4,
//     title: "Mens Casual Slim Fit",
//     price: 15.99,
//     description:
//       "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
//     category: "men's clothing",
//     image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
//     rating: { rate: 2.1, count: 430 },
//   },
//   {
//     id: 5,
//     title:
//       "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
//     price: 695,
//     description:
//       "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
//     category: "jewelery",
//     image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
//     rating: { rate: 4.6, count: 400 },
//   },
//   {
//     id: 6,
//     title: "Solid Gold Petite Micropave ",
//     price: 168,
//     description:
//       "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
//     category: "jewelery",
//     image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
//     rating: { rate: 3.9, count: 70 },
//   },
//   {
//     id: 7,
//     title: "White Gold Plated Princess",
//     price: 9.99,
//     description:
//       "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
//     category: "jewelery",
//     image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
//     rating: { rate: 3, count: 400 },
//   },
//   {
//     id: 8,
//     title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
//     price: 10.99,
//     description:
//       "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
//     category: "jewelery",
//     image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
//     rating: { rate: 1.9, count: 100 },
//   },
//   {
//     id: 9,
//     title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
//     price: 64,
//     description:
//       "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
//     category: "electronics",
//     image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
//     rating: { rate: 3.3, count: 203 },
//   },
//   {
//     id: 10,
//     title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
//     price: 109,
//     description:
//       "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
//     category: "electronics",
//     image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
//     rating: { rate: 2.9, count: 470 },
//   },
//   {
//     id: 11,
//     title:
//       "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
//     price: 109,
//     description:
//       "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
//     category: "electronics",
//     image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
//     rating: { rate: 4.8, count: 319 },
//   },
//   {
//     id: 12,
//     title:
//       "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
//     price: 114,
//     description:
//       "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
//     category: "electronics",
//     image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
//     rating: { rate: 4.8, count: 400 },
//   },
//   {
//     id: 13,
//     title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
//     price: 599,
//     description:
//       "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
//     category: "electronics",
//     image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
//     rating: { rate: 2.9, count: 250 },
//   },
//   {
//     id: 14,
//     title:
//       "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
//     price: 999.99,
//     description:
//       "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
//     category: "electronics",
//     image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
//     rating: { rate: 2.2, count: 140 },
//   },
//   {
//     id: 15,
//     title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
//     price: 56.99,
//     description:
//       "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
//     category: "women's clothing",
//     image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
//     rating: { rate: 2.6, count: 235 },
//   },
//   {
//     id: 16,
//     title:
//       "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
//     price: 29.95,
//     description:
//       "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
//     category: "women's clothing",
//     image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
//     rating: { rate: 2.9, count: 340 },
//   },
//   {
//     id: 17,
//     title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
//     price: 39.99,
//     description:
//       "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
//     category: "women's clothing",
//     image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
//     rating: { rate: 3.8, count: 679 },
//   },
//   {
//     id: 18,
//     title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
//     price: 9.85,
//     description:
//       "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
//     category: "women's clothing",
//     image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
//     rating: { rate: 4.7, count: 130 },
//   },
//   {
//     id: 19,
//     title: "Opna Women's Short Sleeve Moisture",
//     price: 7.95,
//     description:
//       "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
//     category: "women's clothing",
//     image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
//     rating: { rate: 4.5, count: 146 },
//   },
//   {
//     id: 20,
//     title: "DANVOUY Womens T Shirt Casual Cotton Short",
//     price: 12.99,
//     description:
//       "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
//     category: "women's clothing",
//     image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
//     rating: { rate: 3.6, count: 145 },
//   },
// ];

// const arr = ["a", "b", "c", "d", "e", "f", "g"];

// const num = [1, 2, 3, 4, 5];

// const str = arr.reduce((pv, cv) => {
//   console.log(pv, cv);
//   return pv + cv;
// }, "===");

// console.log(num.reduce((pv, cv) => pv + cv, 0));

// console.log(products.reduce((pv, cv) => pv + cv.price, 0));

const photo = document.querySelector("#photo");
const select = document.querySelector("#select");
const form = document.querySelector("#form");

// select.addEventListener("change", () => console.log(select.value));

// photo.addEventListener("change", () => console.log(photo.files[0]));

// const showAlert = () => alert("hello U click");

// const btn = document.querySelector("#btn");
// // btn.onclick = showAlert;
// // console.dir(btn);

// btn.addEventListener("click",showAlert);

// const input = document.querySelector("#input");
// input.addEventListener("focus", (_) => console.log("Focus event"));
// input.addEventListener("blur", (_) => console.log("Blur event"));
// input.addEventListener("change", (_) => console.log("Change event"));

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   console.log(event);
//   console.log("U submmited");
// });

// window.addEventListener("load", (event) => console.log(event));
// console.log("hello");
// for (let i = 0; i < 10; i++) {
//   console.log(i, "loop");
// }

// document.addEventListener("scroll", (event) => {
//     console.log(window.scrollY)
// //   console.log(event);
// });

// document.addEventListener("click", (event) => console.log(event));

// const ul = document.querySelector("ul");
// ul.addEventListener("click", (event) => console.dir(event.target));

// input.addEventListener("keyup", function (event) {
//   //   console.log(event.target.value);
//   //   console.log(this.value);
//   console.log(input.value);
// });

// console.dir(new EventTarget());

// const ul = document.querySelector("ul");
// console.log(ul.children);
// console.log(ul.childNodes);

// console.log(document.getElementsByTagName("li"));
// console.log(document.querySelectorAll("li"));

// const btn = document.querySelector("button");
// let count = 0;

// const showAlert = () => {
//   alert("hello ....");
//   count++;
//   if (count >= 3) {
//     btn.removeEventListener("click", showAlert);
//   }
// };

// // btn.disabled = true;
// document.addEventListener("click", (event) => {
//   console.log(event.target);
// });

// console.log(btn);

// select => myanmar mm; china cn; korea kr; japan jp;

// const sl = document.createElement("select");

// const op1 = document.createElement("option");
// const text1 = document.createTextNode("myanmar");
// op1.value = "mm";
// op1.append(text1);
// sl.append(op1);

// const op2 = document.createElement("option");
// const text2 = document.createTextNode("china");
// op2.value = "ch";
// op2.append(text2);
// sl.append(op2);

// sl.add(new Option("myanmar", "mm"));
// sl.add(new Option("china", "cn"));
// sl.add(new Option("korea", "kr", undefined, true));
// sl.add(new Option("japan", "jp"));

// document.body.append(sl);

// console.log(sl.value);

// document.querySelector(".container").addEventListener(
//   "click",
//   () => {
//     console.log("1 U click container");
//   },
//   true
// );

// document.querySelector(".row").addEventListener(
//   "click",
//   () => {
//     console.log("2 U click row");
//   },
//   true
// );

// document.querySelector(".col").addEventListener(
//   "click",
//   (event) => {
//     // event.stopPropagation();
//     console.log("3 U click col");
//   },
//   true
// );

// document.querySelector(".btn").addEventListener(
//   "click",
//   () => {
//     console.log("4 U click button");
//   },
//   true
// );

// document.querySelector(".btn").addEventListener("click", () => {
//   console.log("U click");
// });

// document.querySelector(".btn").addEventListener("mouseover", () => {
//   console.log("U mouse over");
// });

// document.querySelector(".btn").addEventListener("mouseout", () => {
//   console.log("U mouse out");
// });

// const eventLists = ["click", "mouseover", "mouseout"];

// eventLists.forEach((currentEvent) => {
//   // console.log(currentEvent);
//   document.querySelector(".btn").addEventListener(currentEvent, () => {
//     console.log("hello");
//   });
// });

// const list = document.querySelectorAll("li");
// console.log(list);

// list.forEach((currentList) => {
//   currentList.addEventListener("click", () => {
//     console.log(currentList.innerText);
//   });
// });

// const text =
//   '{ "name": "hein htet zan", "age": 28, "gender": "male", "status": false }';
// // json to obj
// console.log(JSON.parse(text).age);

// // obj to json
// const obj = { a: "a", b: "b", c: undefined, d: null };
// console.log(JSON.stringify(obj));

// function run() {
//   const url = "https://dummyjson.com/products";

//   btn.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
//   <span>Loading...</span>`;

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       btn.innerText = "Reload";
//     });

// const req = new XMLHttpRequest();
// req.open("GET", url);
// req.send();
// req.addEventListener("loadstart", () => {
//   console.log("I'm progress");

// });

// req.addEventListener("loadend", () => {
//   btn.innerHTML = "Reload";
// });
// req.addEventListener("load", (event) => {
//   console.log(JSON.parse(event.target.responseText));
// });
// }

// const a = () => {
//   return {
//     x: 5,
//     y: 6,
//     z: function () {
//       return this.x + this.y;
//     },
//   };
// };

// console.log(a().z());

// // method chaining
// const a = {
//   x: function () {
//     console.log("I'm x");
//     return this;
//   },
//   y: function () {
//     console.log("I'm y");
//     return this;
//   },
//   z: function () {
//     console.log("I'm z");
//     return this;
//   },
// };

// console.log(a.x().y().z());

// abcefg => abc => ABC => A-B-C

// const st = "abcdefg";
// console.log(st.substring(0, 3).toUpperCase().split("").join("-"));
// const arr = [50, 100, 30];
// // 5,10,3
// // less then 10
// // 5,3
// // 8

// console.log(
//   arr
//     .map((el) => el / 10)
//     .filter((el) => el < 10)
//     .reduce((pv, cv) => pv + cv, 0)
// );

const btn = document.querySelector("button");

// const run = () => {
//   navigator.geolocation.getCurrentPosition((position) => {
//     console.log(position);
//     console.log(position.coords.latitude, position.coords.longitude);
//   });
// };

const num = document.querySelector("#num");
if (localStorage.getItem("num")) {
  num.innerText = localStorage.getItem("num");
}

const run = () => {
  const r = parseInt(num.innerText) + 1;
  localStorage.setItem("num", r);
  num.innerText = r;
};

btn.addEventListener("click", run);
