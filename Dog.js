const dogImagesDiv = document.getElementById('dogImages');
const getNewDogButton = document.getElementById('getNewDog');

// Function to fetch and display a random dog image
function fetchRandomDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            const imageUrl = data.message;

            // Create an image element and set its source
            const img = document.createElement('img');
            img.src = imageUrl;
            img.alt = 'Random Dog';

            // Clear previous dog images and display the new one
            dogImagesDiv.innerHTML = '';
            dogImagesDiv.appendChild(img);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Event listener to fetch a new random dog image when the button is clicked
getNewDogButton.addEventListener('click', fetchRandomDogImage);

// Initial load of a random dog image
fetchRandomDogImage();