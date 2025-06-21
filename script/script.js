document.addEventListener("DOMContentLoaded", () => {
    // Scroll to the games section on Browse Now button click
    const browseBtn = document.querySelector(".hero-text button");
    const gamesSection = document.querySelector("#games");
  
    if (browseBtn && gamesSection) {
      browseBtn.addEventListener("click", () => {
        gamesSection.scrollIntoView({ behavior: "smooth" });
      });
    }
  
    // Handle form submission
    const contactForm = document.querySelector(".contact-form");
    if (contactForm) {
      contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("✅ Message sent! Thank you for contacting Murdi Gaming.");
        contactForm.reset();
      });
    }
  
    // Handle clicks on game cards
    const gameCards = document.querySelectorAll(".game-card");
    gameCards.forEach((card) => {
      card.addEventListener("click", () => {
        const gameName = card.querySelector("h3")?.textContent || "This game";
        alert(`🎮 Launching ${gameName}...`);
        // Optionally: Redirect to game page
        // window.location.href = `./games/${gameName.toLowerCase().replace(/\s+/g, '-')}.html`;
      });
    });
  
    console.log("✅ Murdi Gaming scripts loaded.");
  });
  