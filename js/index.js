const links = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

// عند الضغط على أي رابط: فعّل الرابط
links.forEach((link) => {
  link.addEventListener("click", function () {
    // إزالة الكلاس active من كل الروابط
    links.forEach((l) => l.classList.remove("active"));

    // إضافة active للرابط المضغوط
    this.classList.add("active");
  });
});

// التمرير والتحقق من الـ section الظاهر
window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    // إذا كان الـ section في Viewport
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  links.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});
