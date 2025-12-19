document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,

    breakpoints: {
      768: { slidesPerView: 2 },
      1280: { slidesPerView: 3 },
    },

    pagination: {
      el: ".pagination",
      clickable: true,
      bulletClass: 'pagination__button',
      bulletActiveClass: 'pagination__active'
    },

    navigation: {
      nextEl: ".carousel-button.prev",
      prevEl: ".carousel-button.next",
    },
  });

  console.log("✅ Swiper initialized:", swiper);
});

// const swiper = new Swiper(".swiper", {
//   loop: true,
//   slidesPerView: 1,
//     spaceBetween: 20,
//   breakpoints: {
//     480: {
//       slidesPerView: 2,
//     },
//     768: {
//       slidesPerView: 3,
//     }
//   }
//   pagination: {
//     el: ".pagination",
//     clickable: true,
//   },

//   navigation: {
//     nextEl: ".carousel-button.next",
//     prevEl: ".carousel-button.prev",
//   },
// });


