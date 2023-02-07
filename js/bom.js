// window.addEventListener("resize", () => {
//   console.log(window.innerWidth, window.innerHeight);
//   console.log(window.outerWidth, window.outerHeight);
// });

// window.addEventListener("scroll", () => {
//   console.log(scrollY);
// });

// window.addEventListener("online", () => console.log("U are online"));
// window.addEventListener("offline", () => console.log("U are offline"));

// ချိန်ကိုက်ဗုံး အချိန်ပေးပြီး ခိုင်းရ

// const btn = document.querySelector("button");

// const run = (x, y) => {
//   console.log("I'm setTimeOut", x + y);
// };

// const ts = setTimeout(run, 3000);

// btn.addEventListener("click", () => {
//   clearTimeout(ts);
// });

// const it = setInterval(run, 3000, 1, 5);

// btn.addEventListener("click", () => {
//   clearInterval(it);
// });

// const btn = document.querySelector(".btn");

// console.log(getComputedStyle(btn).width);
// console.log(getComputedStyle(btn).height);
// const h1 = document.querySelector("h1").getBoundingClientRect();

// btn.addEventListener("click", () => {
//   scrollTo(0, h1.top - 100);
// });
