const imgs = document.querySelectorAll(".book-img");
  let index = 0;

  document.querySelector(".next").addEventListener("click", () => {
    imgs[index].classList.remove("active");
    index = (index + 1) % imgs.length;
    imgs[index].classList.add("active");
  });

  document.querySelector(".prev").addEventListener("click", () => {
    imgs[index].classList.remove("active");
    index = (index - 1 + imgs.length) % imgs.length;
    imgs[index].classList.add("active");
  });

  // Zoom responsivo
  imgs.forEach(img => {
    img.addEventListener("click", () => {
      if (img.style.transform === "scale(2)") {
        img.style.transform = "scale(1)";
        img.style.cursor = "zoom-in";
      } else {
        img.style.transform = "scale(2)";
        img.style.cursor = "zoom-out";
      }
      img.style.transition = "transform 0.3s ease";
    });
  });