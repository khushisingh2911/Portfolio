document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('change', function () {
    document.body.classList.toggle('dark-theme');
    // If you have a light-theme class, toggle it as necessary:
    // document.body.classList.toggle('light-theme');
  });
});

function toggleDetails(card) {
  // Find the .card-content element within the clicked card
  var cardContent = card.querySelector('.card-content');
  // Toggle the 'hidden' class on the .skills-list within this card
  cardContent.querySelector('.skills-list').classList.toggle('hidden');
}
