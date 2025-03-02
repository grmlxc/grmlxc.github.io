// JavaScript Document

// Array of image URLs
const images = [
    'images/bg1.jpg',
    'images/bg2.jpg',
    'images/bg3.jpg',
    'images/bg4.jpg',
	'images/bg5.jpg',
	'images/bg6.jpg',
	'images/bg7.jpg',
	'images/bg8.jpg',
	'images/bg9.jpg',
	'images/bg10.jpg',
	'images/bg11.jpg',
	'images/bg12.jpg',
];

// Function to set a random background image
function setRandomBackground() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const selectedImage = images[randomIndex];
    document.getElementById('custom-header').style.backgroundImage = `url('${selectedImage}')`;
}

// Set a random background image on page load
window.onload = setRandomBackground;