$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
  navText: [
    '<i class="fas fa-chevron-left"></i>',
    '<i class="fas fa-chevron-right"></i>',
  ],
  responsive: {
    0: {
      items: 1,
    },
    700: {
      items: 2,
    },
    970: {
      items: 3,
    },
    1300: {
      items: 4,
      loop: false,
      nav: false,
    },
  },
});

document.addEventListener("DOMContentLoaded", () => {
  manageIcons();
});

window.addEventListener("resize", () => {
  manageIcons();
});

function manageIcons() {
  const serviceIcons = document.getElementById("service-icons");
  const clonedClass = "cloned";

  if (window.innerWidth < 1000) {
    if (!serviceIcons.classList.contains(clonedClass)) {
      const iconsClone = serviceIcons.innerHTML;
      serviceIcons.innerHTML += iconsClone; // Duplicate the icons for a seamless scroll
      serviceIcons.classList.add(clonedClass);
    }
  } else {
    if (serviceIcons.classList.contains(clonedClass)) {
      serviceIcons.innerHTML = serviceIcons.innerHTML.slice(
        0,
        serviceIcons.innerHTML.length / 2
      );
      serviceIcons.classList.remove(clonedClass);
    }
  }
}
