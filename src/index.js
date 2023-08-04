document.addEventListener("DOMContentLoaded", function () {
    const ctaButton = document.querySelector(".cta-button");
    
    ctaButton.addEventListener("click", function (event) {
      event.preventDefault();
      const contactSection = document.querySelector("#contact");
      
      // Scroll to the contact section
      contactSection.scrollIntoView({ behavior: "smooth" });
    });
  });