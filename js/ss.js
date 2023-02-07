// const uploader = document.querySelector("#uploader");
// const uploaderUI = document.querySelector("#uploaderUI");
// const profilePhoto = document.querySelector(".profile-photo");

// uploaderUI.addEventListener("click", () => {
//   uploader.click();
// });

// uploader.addEventListener("change", (event) => {
//   console.log(event.target.files[0]);
//   const fileReader = new FileReader();
//   fileReader.readAsDataURL(event.target.files[0]);
//   fileReader.addEventListener("load", (event) => {
//     console.log(event.target.result);
//     profilePhoto.src = event.target.result;
//   });
// });

const uploader = document.querySelector("#uploader");
const uploaderUI = document.querySelector("#uploaderUI");
const output = document.querySelector("#output");

uploaderUI.addEventListener("click", () => {
  uploader.click();
});

uploader.addEventListener("change", (event) => {
  //   console.log(event.target.files);
  [...event.target.files].forEach((el) => {
    console.log(el);
    const reader = new FileReader();
    reader.readAsDataURL(el);

    reader.addEventListener("load", (event) => {
      const img = new Image();

      img.src = event.target.result;
      output.append(img);
    });
  });
});
