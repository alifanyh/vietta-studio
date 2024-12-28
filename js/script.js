const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar elemen
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});

// slider images //

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Slider Images Start //
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
// Slider Images End //

// Pop Up Jenis Kelas Start //
let previewContainer = document.querySelector(".products-preview");
let previewBox = previewContainer.querySelectorAll(".preview");

document.querySelectorAll(".products-container .product").forEach((product) => {
  product.onclick = () => {
    previewContainer.style.display = "flex";
    document.body.style.overflow = "hidden"; // Mencegah scroll
    let name = product.getAttribute("data-name");
    previewBox.forEach((preview) => {
      let target = preview.getAttribute("data-target");
      if (name == target) {
        preview.classList.add("active");
      }
    });
  };
});

previewBox.forEach((close) => {
  close.querySelector(".fa-times").onclick = () => {
    close.classList.remove("active");
    previewContainer.style.display = "none";
    document.body.style.overflow = ""; // Mengembalikan scroll
  };
});
// Pop Up Jenis Kelas End //

// Modal Box 1 Start //
const itemDetailModal1 = document.querySelector("#item-detail-modal1");
const itemDetailButton1 = document.querySelector(".item-detail-button1");

itemDetailButton1.onclick = (e) => {
  itemDetailModal1.style.display = "flex";
  document.body.style.overflow = "hidden"; // Mencegah scroll saat modal muncul
  e.preventDefault();
};
// Modal Box 1 End //

// Modal Box 2 Start //
const itemDetailModal2 = document.querySelector("#item-detail-modal2");
const itemDetailButton2 = document.querySelector(".item-detail-button2");

itemDetailButton2.onclick = (e) => {
  itemDetailModal2.style.display = "flex";
  document.body.style.overflow = "hidden"; // Mencegah scroll saat modal muncul
  e.preventDefault();
};
// Modal Box 2 End //

// Modal Box 3 Start //
const itemDetailModal3 = document.querySelector("#item-detail-modal3");
const itemDetailButton3 = document.querySelector(".item-detail-button3");

itemDetailButton3.onclick = (e) => {
  itemDetailModal3.style.display = "flex";
  document.body.style.overflow = "hidden"; // Mencegah scroll saat modal muncul
  e.preventDefault();
};
// Modal Box 3 End //

// Klik Tombol Close Modal 1 //
document.querySelector(".modal1 .close-icon1").onclick = (e) => {
  itemDetailModal1.style.display = "none";
  document.body.style.overflow = ""; // Mengembalikan scroll saat modal ditutup
  e.preventDefault();
};

// Klik Tombol Close Modal 2 //
document.querySelector(".modal2 .close-icon2").onclick = (e) => {
  itemDetailModal2.style.display = "none";
  document.body.style.overflow = ""; // Mengembalikan scroll saat modal ditutup
  e.preventDefault();
};

// Klik Tombol Close Modal 3 //
document.querySelector(".modal3 .close-icon3").onclick = (e) => {
  itemDetailModal3.style.display = "none";
  document.body.style.overflow = ""; // Mengembalikan scroll saat modal ditutup
  e.preventDefault();
};
