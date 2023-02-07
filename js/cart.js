// variables
const productList = document.querySelector("#productList");
const productDetail = document.querySelector("#productDetailModal");

const productDetailModal = new bootstrap.Modal(productDetail);
// function

const productCardUI = (product) => {
  const div = document.createElement("div");
  div.className = "col-12 col-md-6 col-lg-4";
  div.innerHTML = `

    <div class="card product-cart">
      
      <div class="card-body ">
      <img
        src="${product.thumbnail}"
        class="product-card-img mb-3"
        alt=""
      />
        <h4 class=" text-truncate mb-3">${product.title}</h4>
        <div class="d-flex justify-content-between">
          <p class="badge bg-black">${product.category}</p>
          <div class="stars">
        
          </div>
        </div>
        <p class="small text-black-50 text-truncate">
          ${product.description}
        </p>

        <hr />

        <div class="d-flex justify-content-between align-items-center">
          <p class=" mb-0">$ <span class="product-card-price">${product.price}</span></p>
          <button class="btn btn-sm btn-outline-dark">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
 
    
    `;

  div.querySelector(".stars").append(stars(product.rating));

  div.addEventListener("click", showProductDetailModal.bind(null, product));

  return div;
};

const star = (isFill) => {
  const i = document.createElement("i");
  i.classList.add("bi", isFill ? "bi-star-fill" : "bi-star", "ms-1");
  return i;
};

const showProductDetailModal = (product) => {
  console.log(product);
  productDetail.querySelector(".modal-title").innerText = product.title;
  productDetail.querySelector("#slideShow").innerHTML = null;
  productDetail
    .querySelector("#slideShow")
    .prepend(createCarousel(product.images, 5));
  //   productDetail.querySelector(".product-detail-img").src = product.thumbnail;
  productDetail.querySelector(".product-detail-description").innerText =
    product.description;
  productDetailModal.show();
};

const stars = (num) => {
  //   let result = "";

  //   for (let i = 1; i <= 5; i++) {
  //     if (Math.floor(num) >= i) {
  //       result += "<i class=' bi bi-star-fill'></i>";
  //     } else {
  //       result += "<i class=' bi bi-star'></i>";
  //     }
  //   }

  const result = document.createDocumentFragment();
  for (let i = 1; i <= 5; i++) {
    result.append(star(Math.floor(num) >= i));
  }

  return result;
};

const createCarousel = (images, id = Date.now()) => {
  const div = document.createElement("div");
  div.className = "carousel slide";
  div.id = "carousel" + id;
  div.innerHTML = `
    <div class="carousel-indicators"></div>
    <div class="carousel-inner"></div>
    <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#${div.id}"
        data-bs-slide="prev"
    >
        <span
        class="carousel-control-prev-icon"
        aria-hidden="true"
        ></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#${div.id}"
        data-bs-slide="next"
    >
        <span
        class="carousel-control-next-icon"
        aria-hidden="true"
        ></span>
        <span class="visually-hidden">Next</span>
    </button>
    `;

  images.forEach((image, index) => {
    div.querySelector(".carousel-indicators").innerHTML +=
      createCarouselIndicator(index === 0 ? true : false, div.id,index);
    div.querySelector(".carousel-inner").innerHTML += createCarouselItem(
      image,
      index === 0 ? true : false
    );
  });

  return div;
};

const createCarouselIndicator = (isActive, id,index) => {
  return `<button
    type="button"
    data-bs-target="#${id}"
    data-bs-slide-to="${index}"
    class="${isActive && "active"}"
    aria-current="true"
    aria-label="Slide 1"
  ></button>`;
};

const createCarouselItem = (img, isActive) => {
  return `<div class="carousel-item ${isActive && "active"}">
    <img src="${img}" class="slide-img d-block w-100" alt="..." />
  </div>`;
};

// process
console.log(products);
products.forEach((product) => {
  productList.append(productCardUI(product));
});
