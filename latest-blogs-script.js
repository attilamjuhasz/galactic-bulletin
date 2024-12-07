document.querySelector('.hamburger').addEventListener('click', function () {
    document.querySelector('.navbar').classList.toggle('active');
});


document.getElementById('blog-search').addEventListener('input', function () {
    const searchValue = this.value.toLowerCase();
    const blogCards = document.querySelectorAll('.card > a');

    blogCards.forEach(card => {
        const title = card.querySelector('h2').textContent.toLowerCase();
        if (title.includes(searchValue)) {
            card.style.display = 'flex'; // Ensure cards remain flex items for layout
        } else {
            card.style.display = 'none';
        }
    });
});
