import { animeData } from './data.js';


async function loadTrendingAnime() {
    const trendingAnimeGrid = document.querySelector('#trending-anime-grid');
    if (!trendingAnimeGrid) return;


    try {



        const anime = animeData[Math.floor(Math.random() * animeData.length)];

        if (anime) {
            const heroSection = document.querySelector('#hero-section');
            if (!heroSection) return;

            const image = document.createElement('img');
            image.src = anime.images.webp?.image_url || anime.images.jpg.image_url;
            image.alt = "Hero Anime";
            image.classList.add("hero-background");

            heroSection.prepend(image);
        }

        if (animeData && animeData.length > 0) {
            trendingAnimeGrid.innerHTML = '';
            animeData.sort((a, b) => b.score - a.score).forEach(anime => {
                const animeCard = document.createElement('div');

                animeCard.classList.add('anime-card');
                const title = anime.title_english || anime.title || anime.title_japanese;

                const imageUrl = anime.images.webp?.image_url || anime.images.jpg.image_url;

                animeCard.innerHTML = `
                        <img src="${imageUrl}" alt="${title}" loading="lazy" width="200" height="300">
                        <h3>${title}</h3>
                        <p class="anime-genres">${anime.genres.map(g => g.name).join(', ')}</p>
                        <p class="anime-score">Rating: ${anime.score || 'N/A'}</p>
                        <a href="anime-detail.html?mal_id=${anime.mal_id}" class="details-button">View Details</a>
                    `;
                trendingAnimeGrid.appendChild(animeCard);
            });
        } else {
            trendingAnimeGrid.innerHTML = '<p>No trending anime found at this time.</p>';
        }
    } catch (error) {
        console.error('Error fetching trending anime:', error);
        trendingAnimeGrid.innerHTML = '<p>Failed to load trending anime. Please try again later.</p>';
    }
}


loadTrendingAnime(); 
