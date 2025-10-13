const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");
const smallImg = document.querySelectorAll(".small-img");
const mainImg = document.getElementById("mainImg");
const products = document.querySelectorAll(".pro");
const sImg = document.querySelectorAll(".small-img-col img");

// Side Navbar
if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

// Close Side Bar
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

// Small Image to Big Image
// Active Effect jb picture jo open hogi uski duplicate matlb choti picture higlight hogi iska file path src change hoga

if (mainImg && smallImg.length > 0) {
  smallImg.forEach((img) => {
    img.addEventListener("click", () => {
      mainImg.src = img.src;
      smallImg.forEach((thumb) => thumb.classList.remove("active"));
      img.classList.add("active");
    });
  });
}

// Product to product details Page
products.forEach((product) => {
  product.addEventListener("click", () => {
    window.location.href = "sproduct.html";
  });
});
