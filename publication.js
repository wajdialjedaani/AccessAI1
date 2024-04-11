const buttons = document.querySelectorAll(".btn-research");

// Iterate over buttons to add click event listeners
buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    // Remove "active" class from all buttons
    buttons.forEach((b) => b.classList.remove("active"));

    // Add "active" class to the clicked button
    this.classList.add("active");
  });
});

document.querySelectorAll(".btn-research").forEach((button) => {
  button.addEventListener("click", function () {
    const category = this.getAttribute("data-category");
    const cards = document.querySelectorAll(".research-card");
    const cardsContainer = document.getElementById("research-cards");

    if (category === "all") {
      cards.forEach((card) => (card.style.display = ""));
    } else {
      cards.forEach((card) => {
        card.getAttribute("data-category") === category
          ? (card.style.display = "")
          : (card.style.display = "none");
      });
    }

    cardsContainer.style.display = "flex"; // Show the container
  });
});
