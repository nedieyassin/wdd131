import { recommendations } from "./data.js";

const recommendationGrid = document.querySelector('#recommendation-grid');
const recommendationForm = document.querySelector('#recommendation-form');
const formMessage = document.querySelector('#form-message');
const submissionCountKey = "submissionCount";


function displayRecommendations(recommendations) {


    recommendationGrid.innerHTML = '';

    if (recommendations && recommendations.length > 0) {
        recommendations.slice(0, 30).forEach(rec => {
            const title = rec.entry[0]?.title || 'Unknown Title';
            const malId = rec.entry[0]?.mal_id;
            const recommenderUsername = rec.user?.username || 'Anonymous';
            const reviewContent = rec.content || 'No review content provided.';

            const recCard = `
                    <div class="recommendation-card card">
                        <h3>${title}</h3>
                        <p class="recommender">Recommended by <span>${recommenderUsername}</span></p>
                        <p class="review">"${reviewContent}"</p>
                        ${malId ? `<a href="anime-detail.html?mal_id=${malId}" class="details-button">View Anime</a>` : ''}
                    </div>
                `;
            recommendationGrid.insertAdjacentHTML('beforeend', recCard);
        });
    } else {
        recommendationGrid.innerHTML = '<p>No recommendations found.</p>';
    }
}

recommendationForm.addEventListener('submit', (event) => {

    formMessage.style.display = 'none';

    const formData = new FormData(recommendationForm);
    const animeTitle = formData.get('anime_title').trim();
    const userName = formData.get('user_name').trim();
    const reviewText = formData.get('review_text').trim();

    if (!animeTitle || !userName || !reviewText) {
        displayFormMessage('error', 'Please fill in all required fields (Anime Title, Your Name, Review).');
        event.preventDefault();
    }



let count = parseInt(localStorage.getItem(submissionCountKey) || '0');
count += 1;
localStorage.setItem(submissionCountKey, count);

});


function displayFormMessage(type, message) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';
}

displayRecommendations(recommendations);
