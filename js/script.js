document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const navbarLinks = document.getElementById("navbarLinks");
  const navLinks = document.querySelectorAll(".navbar-links a");
  const body = document.body;
  const navbar = document.getElementById("navbar");

  menuIcon.addEventListener("click", function () {
    navbarLinks.classList.toggle("active");
    body.classList.toggle("menu-open");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navbarLinks.classList.remove("active");
      body.classList.remove("menu-open");
    });
  });

  let resizeTimeout;
  function closeMenuOnResize() {
    if (window.innerWidth > 768) {
      navbarLinks.classList.remove("active");
      body.classList.remove("menu-open");
    }
  }

  window.addEventListener(
    "resize",
    function () {
      if (!resizeTimeout) {
        resizeTimeout = setTimeout(function () {
          resizeTimeout = null;
          closeMenuOnResize();
        }, 100);
      }
    },
    { passive: true }
  );

  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      navbar.classList.add("sticky-navbar");
    } else {
      navbar.classList.remove("sticky-navbar");
    }
  });
});
