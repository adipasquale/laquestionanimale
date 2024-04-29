document.addEventListener('DOMContentLoaded', function () {
  document.querySelector(".js-menu-toggle").addEventListener("click", function () {
    document.querySelector(".js-menu").classList.toggle("active");
  })

  document.querySelector(".js-scroll-to-top")?.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  })
})
