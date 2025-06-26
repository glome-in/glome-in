function createHeader(prefix_path) {
  document.getElementById('my-navbar').innerHTML=
   '<div class="logo" style="display: flex; align-items: center; gap: 8px;">\
        <img src="'+prefix_path+'/assets/high_logo.png" alt="Glome Logo" class="game-logo">\
        <span>Glome</span></div>\
    <input type="text" placeholder="Search games..." class="search-bar" />\
    <button class="nav-toggle" aria-label="Toggle menu">☰</button>\
    <nav>\
      <ul class="nav-menu">\
        <li><a href="'+prefix_path+'/">Home</a></li>\
        <li><a href="'+prefix_path+'/games">Games</a></li>\
        <li><a href="'+prefix_path+'/apps">Apps</a></li>\
        <li><a href="'+prefix_path+'/softwares">Software</a></li>\
        <li><a href="'+prefix_path+'/products">Products</a></li>\
        <li><a href="'+prefix_path+'/pages/career.html">Careers</a></li>\
        <li><a href="#about">About</a></li>\
        <li><a href="#contact">Contact</a></li>\
      </ul>\
    </nav>';
}

function createFooter(prefix_path) {
  document.getElementById('footer').innerHTML =
      '<h2>About Us</h2>\
      <p><strong>Glome</strong> is a creative tech company focused on building impactful <strong>software products</strong> and <strong>gaming experiences</strong>. We are passionate about combining technology with imagination to deliver applications and games that are both functional and fun.</p>\
      <p>From developing user-friendly tools to designing immersive digital worlds, our team is committed to quality, innovation, and user experience. Whether you\'re a gamer, a business, or an everyday user—Glome is here to bring ideas to life through code, creativity, and commitment.</p>\
    <p>Have a question or want to work with us? Reach out at:</p>\
    <p><a href="mailto:nandini.tandon@glome.in" style="color: white;">nandini.tandon@glome.in</a></p>\
    <p> Copyright &copy; 2025 Glome. All rights reserved.</p>\
    <div class="social-icons">\
      <p>Follow Glome</p>\
      <a href="https://www.linkedin.com" target="_blank">\
        <img src="'+prefix_path+'/assets/linkedin.png" alt="LinkedIn" class="social-img">\
      </a>\
      <a href="https://www.instagram.com" target="_blank">\
        <img src="'+prefix_path+'/assets/instagram.png" alt="Instagram" class="social-img">\
      </a>\
    </div>';
}



document.addEventListener("DOMContentLoaded", () => {
    // Scroll to games section on Browse Now button
    const browseBtn = document.querySelector(".hero-text button");
    const gamesSection = document.querySelector("#games");
  
    if (browseBtn && gamesSection) {
      browseBtn.addEventListener("click", () => {
        gamesSection.scrollIntoView({ behavior: "smooth" });
      });
    }
  
    // Contact form submit handler
    const contactForm = document.querySelector(".contact-form");
    if (contactForm) {
      contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("✅ Message sent! Thank you for contacting Glome");
        contactForm.reset();
      });
    }
  
    // Click action on game cards
    const gameCards = document.querySelectorAll(".game-card");
    gameCards.forEach((card) => {
      card.addEventListener("click", () => {
        const gameName = card.querySelector("h3")?.textContent || "this game";
        alert(`🎮 Launching ${gameName}...`);
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
document.querySelector('.nav-toggle').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('active');
  });
  document.querySelectorAll('.nav-menu a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()})
    });
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })};
        
    document.querySelectorAll('.nav-menu a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
