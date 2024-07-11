document.querySelectorAll(".accordion-item__trigger").forEach((item) =>
  item.addEventListener("click", () => {
    const parent = item.parentNode;

    if (parent.classList.contains("accordion-item--active")) {
      parent.classList.remove("accordion-item--active");
    } else {
      document
        .querySelectorAll(".accordion-item")
        .forEach((child) => child.classList.remove("accordion-item--active"));

      parent.classList.add("accordion-item--active");
    }
  })
);

// Теория: Нужно двигать весь контейнер аккордеона, а не только ссылки, а его заголовок делать невидимым + негативный маржин

// window.addEventListener('scroll', function() {
//     var accordionContent = document.querySelector('.accordion-item__content');
//     var accordionTrigger = document.querySelector('.accordion-item__trigger');
//     var accordionPosition = accordionContent.getBoundingClientRect().top - 20;
//     if (accordionPosition <= 0) {
//        accordionContent.classList.add('fixed');
//        accordionTrigger.style.width = '100%';
//        } else {
//            accordionContent.classList.remove('fixed');
//            accordionTrigger.style.width = 'auto';
//        }
//     });
