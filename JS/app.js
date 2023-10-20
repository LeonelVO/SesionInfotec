$(document).ready(function () {
    let images = [
      "https://picsum.photos/1200/800",
      "https://picsum.photos/1200/801",
      "https://picsum.photos/1200/802",
    ];
    let currentIndex = 0;
    setInterval(function () {
      if (currentIndex == images.length - 1) {
        currentIndex = 0;
      } else {
        currentIndex++;
      }
      $(".banner").css(
        "background-image",
        "url('" + images[currentIndex] + "')"
      );
    }, 3000);
  });