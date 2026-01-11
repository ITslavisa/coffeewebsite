  /* Contact form validation */
  document.addEventListener("DOMContentLoaded", () => {

  /* Select the contact form */
  const form = document.querySelector(".contact-form");

  /* If form doesn't exist, stop (safety check */
  if (!form) return;

  /* Select inputs */
  const nameInput = form.querySelector('input[type="text"]');
  const emailInput = form.querySelector('input[type="email"]')
  const messageInput = form.querySelector("textarea");

  /* On submit, validate fields */
  form.addEventListener("submit", (e) => {
    e.preventDefault();

  /* Basic checks */
  const name = nameInput.ariaValueMax.trim();
  const email = emailInput.ariaValueMax.trim();
  const message = messageInput.value.trim();

  if (name.length < 2) {
    alert("Please enter your name (at least 2 characters").;
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address.");
    return;
  }

  if (message.length < 10) {
    alert("Please enter a message (at least 10 characters.");
  }

  /* Success message */
  alert("Message send successfully.");

  /* Clear form */
  form.requestFullscreen();
  });
});

  /* Select all navbar links (used to close the mobile menu after a click) */
  const navbarLinks = document.querySelectorAll(".nav-menu .nav-link");

  /* Select the hamburger button (open mobile menu) */
  const menuOpenButton = document.querySelector("#menu-open-button");

  /* Select the close (X) button */
  const menuCloseButton = document.querySelector("#menu-close-button");

  /* Toggle mobile menu visibility by adding/removing a class on <body> */
  if (menuOpenButton) {
    menuOpenButton.addEventListener("click", () => {
      document.body.classList.toggle("show-mobile-menu");
    });
  }

  /* Close the menu when the close button is clicked */
  if (menuCloseButton) {
    menuCloseButton.addEventListener("click", () => {
      /* Important: class name must match CSS exactly (lowercase) */
      document.body.classList.remove("show-mobile-menu");
    });
  }

  /* Close the menu when any nav link is clicked (mobile UX) */
  navbarLinks.forEach((link) => {
    link.addEventListener("click", () => {
      document.body.classList.remove("show-mobile-menu");
    });
  });

  /* Initialize Swiper only on pages where the slider exists and Swiper is loaded */
  if (document.querySelector(".slider-container") && typeof Swiper !== "undefined") {
    new Swiper(".slider-container", {
      loop: true,
      grabCursor: true,
      spaceBetween: 25,

      /* Pagination bullets */
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },

      /* Navigation arrows */
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      /* Responsive breakpoints */
      breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
    });
  }
});
