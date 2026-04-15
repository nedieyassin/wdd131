const submissionCount = document.querySelector('#submission-count');
const urlParams = new URLSearchParams(window.location.search);
const submissionCountKey = "submissionCount";



// Get data from URL parameters
const animeTitle = urlParams.get('anime_title') || 'Not provided';
const malId = urlParams.get('anime_id') || 'Not provided';
const userName = urlParams.get('user_name') || 'Anonymous';
const reviewText = urlParams.get('review_text') || 'No review content provided.';


document.getElementById('display-animeTitle').textContent = animeTitle;
document.getElementById('display-malId').textContent = malId;
document.getElementById('display-userName').textContent = userName;
document.getElementById('display-reviewText').textContent = reviewText;



function displaySubmissionCount() {
    let count = parseInt(localStorage.getItem(submissionCountKey) || '0');  

submissionCount.textContent = `You have submitted recommendations for ${count} times.`;
    
}

displaySubmissionCount();