const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    navbar.classList.add("navbar-sticky");
  } else {
    navbar.classList.remove("navbar-sticky");
  }
});

// JavaScript untuk mengontrol tampilan tombol
const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add("show"); // Tambahkan kelas 'show' untuk menampilkan
    backToTopButton.classList.remove("hidden"); // Hapus kelas 'hidden' jika ada
  } else {
    backToTopButton.classList.remove("show"); // Hapus kelas 'show' saat tidak di-scroll
    backToTopButton.classList.add("hidden"); // Tambahkan kembali kelas 'hidden'
  }
});

// Scroll halus kembali ke atas saat tombol diklik
backToTopButton.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navbarLinks = document.querySelectorAll(".navbar-link");

  navbarLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const targetId = this.getAttribute("data-target");
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// Pause autoplay on hover
document.querySelectorAll(".swiper-slide").forEach((slide) => {
  slide.addEventListener("mouseenter", () => {
    swiper.autoplay.stop(); // Pause autoplay
  });
  slide.addEventListener("mouseleave", () => {
    swiper.autoplay.start(); // Resume autoplay
  });
});
