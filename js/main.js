function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

// Inject navbar & footer
fetch("pages/navbar.html")
  .then((res) => res.text())
  .then((data) => (document.getElementById("navbar").innerHTML = data));

fetch("pages/footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer-placeholder").innerHTML = data;
  })
  .catch((error) => console.error("Error loading footer:", error));
