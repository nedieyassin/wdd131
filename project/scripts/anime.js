import { animeData } from './data.js';


const animeListGrid = document.querySelector('#anime-list-grid');
const searchInput = document.querySelector('#anime-search-input');
const searchButton = document.querySelector('#anime-search-button');



function renderAnimeCards(animes) {

    animeListGrid.innerHTML = '';


    if (animes.length === 0) {
        animeListGrid.innerHTML = '<p>No anime found. Try a different search!</p>';
        return;
    }

    animes.forEach(anime => {
        const animeCard = document.createElement('div');
        animeCard.classList.add('anime-card');

        const title = anime.title_english || anime.title || anime.title_japanese;
        const imageUrl = anime.images.webp?.image_url || anime.images.jpg?.image_url;

        animeCard.innerHTML = `
                <img src="${imageUrl}" alt="${title}" loading="lazy" width="200" height="300">
                <h3>${title}</h3>
                <p class="anime-genres">${anime.genres.map(g => g.name).join(', ') || 'N/A'}</p>
                <p class="anime-score">Rating: ${anime.score || 'N/A'}</p>
                <a href="anime-detail.html?mal_id=${anime.mal_id}" class="details-button">View Details</a>
            `;
        animeListGrid.appendChild(animeCard);
    });
}

function fetchAnime(query = '') {
        const filteredAnime = animeData.filter(anime => {
            const title = anime.title_english || anime.title || anime.title_japanese;
            return title.toLowerCase().includes(query.toLowerCase());
        });
        renderAnimeCards(filteredAnime);
}

searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    fetchAnime(query);
});

// Event Listener for Enter key in search input
searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        searchButton.click();
    }
});


fetchAnime('');