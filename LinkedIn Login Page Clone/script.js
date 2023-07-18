function toggleDropdown() {
  var dropdownOptions = document.getElementById("dropdownOptions");
  dropdownOptions.classList.toggle("show");

  if (dropdownOptions.classList.contains("show")) {
    dropdownOptions.scrollTo(0, 0);
  }
}

const carouselContent = document.getElementById("carousel-content");
const leftButton = document.getElementById("left-btn");
const rightButton = document.getElementById("right-btn");

let curPosition = 0;
showSlide();

leftButton.addEventListener("click", (event) => {
  if (curPosition > 0) {
    curPosition--;
    rightButton.classList.remove("hidden");
  }
  if (curPosition === 0) {
    leftButton.classList.add("hidden");
  }
  showSlide();
});

rightButton.addEventListener("click", (event) => {
  const slides = document.getElementsByClassName("slide");
  if (curPosition < slides.length - 1) {
    curPosition++;
    leftButton.classList.remove("hidden");
  }
  if (curPosition === slides.length - 1) {
    rightButton.classList.add("hidden");
  }
  showSlide();
});

function showSlide() {
  const slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.add("hidden");
  }
  slides[curPosition].classList.remove("hidden");

  const slideWidth = slides[curPosition].offsetWidth;
  const containerWidth = document.getElementById("container").offsetWidth;
  const offsetLeft = slides[curPosition].offsetLeft;
  const containerScroll = carouselContent.scrollLeft;
  const scrollAmount =
    offsetLeft - (containerWidth - slideWidth) / 2 + containerScroll;

  carouselContent.scrollTo({
    left: scrollAmount,
    behavior: "smooth",
  });

  if (curPosition === 0) {
    leftButton.classList.add("hidden");
  } else {
    leftButton.classList.remove("hidden");
  }

  if (curPosition === slides.length - 1) {
    rightButton.classList.add("hidden");
  } else {
    rightButton.classList.remove("hidden");
  }
}

const passwordInput = document.getElementById("password");
const passwordToggle = document.getElementById("password-toggle");

passwordToggle.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordToggle.textContent = "Hide";
  } else {
    passwordInput.type = "password";
    passwordToggle.textContent = "Show";
  }
});
