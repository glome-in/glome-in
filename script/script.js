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
        alert("✅ Message sent! Thank you for contacting Murdi Gaming.");
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
  
    console.log("✅ Murdi Gaming scripts loaded and responsive.");
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