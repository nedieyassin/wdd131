document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;

let reviewCount = parseInt(localStorage.getItem('reviewCount') || '0');
reviewCount += 1;
localStorage.setItem('reviewCount', reviewCount);
document.getElementById('review-count').textContent = 'Number of reviews completed: ' + reviewCount;