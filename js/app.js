document.addEventListener("DOMContentLoaded", function () {
  let f = 120; // 2 daqiqa = 120 soniya
  const p = document.getElementById("timer");

  if (p) {
    const e = setInterval(() => {
      if (f <= 0) {
        clearInterval(e);
        return;
      }

      f--;
      const minutes = Math.floor(f / 60);
      const seconds = f % 60;

      p.textContent =
        minutes.toString().padStart(2, "0") +
        ":" +
        seconds.toString().padStart(2, "0");
    }, 1000);
  }
});


document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const images = document.querySelectorAll(".minifyImg");

    images.forEach((img) => {
      const bigSrc = img.getAttribute("data-src");
      if (!bigSrc) return;

      const highRes = new Image();
      highRes.src = bigSrc;

      highRes.onload = () => {
        img.src = bigSrc;
        img.classList.remove("blur-up");
      };

      // (ixtiyoriy) xatolik bo‘lsa:
      highRes.onerror = () => {
        console.warn("Rasm yuklanmadi:", bigSrc);
      };
    });
  }, 1000);
});
