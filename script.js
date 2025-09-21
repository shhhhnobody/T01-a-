document.addEventListener("DOMContentLoaded", () => {
  const currentPage = document.title.toLowerCase().replace(" ", "");
  const links = document.querySelectorAll("nav ul li a");
  const pageTitle = document.getElementById("page-title");

  links.forEach(link => {
    // highlight active menu link
    if (link.dataset.page === currentPage) {
      link.classList.add("active");
    }

    // swap pages
    link.addEventListener("click", (event) => {
      event.preventDefault(); 
      const targetPage = link.dataset.page + ".html";
      window.location.href = targetPage; 
    });
  });

  // clickable logo
  const logo = document.querySelector("nav img");
  if (logo) {
    logo.addEventListener("click", () => {
      window.location.href = "home.html";
    });
  }
});
