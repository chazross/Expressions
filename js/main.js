const apiKey = 'apikey'; 
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const gifContainer = document.getElementById('gif-container');


searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
        fetchGifs(query);
    }
});

async function fetchGifs(query) {
    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=10`);
        const data = await response.json();
        displayGifs(data.data);
    } catch (error) {
        console.error('Error fetching GIFs:', error);
    }
}

function displayGifs(gifs) {
    gifContainer.innerHTML = '';
    gifs.forEach(gif => {
        const gifItem = document.createElement('div');
        gifItem.className = 'gif-item';
        gifItem.innerHTML = `<img src="${gif.images.fixed_height.url}" alt="${gif.title}">`;
        gifContainer.appendChild(gifItem);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navbarMenu = document.getElementById('navbar-menu');
  
    hamburgerMenu.addEventListener('click', () => {
      navbarMenu.classList.toggle('active');
    });
  });









 
