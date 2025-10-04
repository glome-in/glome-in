function createHeader(prefix_path) {
  document.getElementById("my-navbar").innerHTML =
    '<div class="logo" style="display: flex; align-items: center; gap: 8px;">\
        <img src="' +
    prefix_path +
    '/assets/high_logo.png" alt="Glome Logo" class="game-logo">\
        <span>Glome</span></div>\
    <input type="text" placeholder="Search here..." class="search-bar" id="search-text"/>\
    <button class="nav-toggle" aria-label="Toggle menu">☰</button>\
    <nav>\
      <ul class="nav-menu">\
        <li><a href="' +
    prefix_path +
    '/">Home</a></li>\
        <li><a href="' +
    prefix_path +
    '/games">Games</a></li>\
        <li><a href="' +
    prefix_path +
    '/apps">Apps</a></li>\
        <li><a href="' +
    prefix_path +
    '/softwares">Software</a></li>\
        <li><a href="' +
    prefix_path +
    '/products">Products</a></li>\
        <li><a href="' +
    prefix_path +
    '/pages/career.html">Careers</a></li>\
        <li><a href="#about">About</a></li>\
        <li><a href="#contact">Contact</a></li>\
      </ul>\
    </nav>';
}

function createFooter(prefix_path) {
  document.getElementById("footer").innerHTML =
    '<h2>About Us</h2>\
      <p><strong>Glome</strong> is a creative startup tech company focused on building impactful <strong>Softwares, Mobile Applications</strong> and <strong>Mobile Games</strong>. We are passionate about combining technology with imagination to deliver applications and games that are both functional and fun.</p>\
      <p>From developing user-friendly tools to designing immersive digital worlds, our team is committed to quality, innovation, and user experience. Whether you\'re a gamer, a business, or an everyday user — Glome is here to bring ideas to life through code, creativity, and commitment. Our Products can be accessible from the play store and app store</p>\
    <p>Have a question or want to work with us? Reach out at:</p>\
    <p><a href="mailto:nandini.tandon@glome.in" style="color: white;">nandini.tandon@glome.in</a></p>\
    <p><b>Registered Office Address</b> : Glome.in (OPC) Private Limited Seat-149, 1st Floor, BLOCK: H-1/A 20 Sector 63, Noida, Uttar Pradesh - 201301</p>\
    <div class="social-icons">\
      <p><strong>Connect with Us</strong></p>\
      <a href="https://www.instagram.com/glome.in" target="_blank">\
        <img src="' +
    prefix_path +
    '/assets/instagram.png" alt="Instagram" class="social-img">\
      </a>\
      <a href="https://www.facebook.com/glome.in.official" target="_blank">\
        <img src="' +
    prefix_path +
    '/assets/facebook.png" alt="Facebook" class="social-img">\
      </a>\
       <a href="https://www.youtube.com/@glome-in" target="_blank">\
        <img src="' +
    prefix_path +
    '/assets/youtube.png" alt="Youtube" class="social-img">\
      </a>\
       <a href="https://x.com/glome_in" target="_blank">\
        <img src="' +
    prefix_path +
    '/assets/twitter.png" alt="X" class="social-img">\
      </a>\
      <a href="https://www.threads.com/@glome.in" target="_blank">\
        <img src="' +
    prefix_path +
    '/assets/threads.png" alt="Threads" class="social-img">\
      </a>\
      <a href="https://www.linkedin.com/company/glome-in" target="_blank">\
        <img src="' +
    prefix_path +
    '/assets/linkedin.png" alt="LinkedIn" class="social-img">\
      </a>\
      <p> Copyright &copy; 2025 Glome. All rights reserved.</p>\
    </div>';
}

document.addEventListener("DOMContentLoaded", () => {
  // Click action on game cards
  const gameCards = document.querySelectorAll(".game-card");
  gameCards.forEach((card) => {
    card.addEventListener("click", () => {
      const gameName = card.querySelector("h3")?.textContent || "this game";
    });
  });

  // 🔽 Responsive nav toggle (if you add burger icon in HTML)
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector("nav ul");
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("nav-open");
    });
  }

  if (navToggle) {
    addEventListener("click", () => {
      document.querySelector(".nav-menu").classList.toggle("active");
    });
  }

  const main_body = document.getElementById("main-body");
  if (main_body) {
    main_body.style.height = window.innerWidth < 930 ? "50vh" : "100vh";
  }

  // Auto-close menu on nav link click (mobile)
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navMenu.classList.contains("nav-open")) {
        navMenu.classList.remove("nav-open");
      }
    });
  });
});
