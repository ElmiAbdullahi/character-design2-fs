/* Imports */
/* Get DOM Elements */
const nameInput = document.getElementById('dream-city');
const waterSelect = document.getElementById('water-select');
const citySelect = document.getElementById('city-select');
const countrySelect = document.getElementById('country-select');
const sloganList = document.getElementById('slogan-list');
const sloganInput = document.getElementById('skill-input');
const addSloganButton = document.getElementById('add-slogan-button');

/* State */
let destination = {
    name: 'yolo',
    water: 'Beach',
    city: 'Medium city',
    country: 'UK',
    slogan: [],
};
/* Events */
nameInput.addEventListener('input', () => {
    // change the destination.name property
    destination.name = nameInput.value;
    // redisplay
});
waterSelect.addEventListener('input', () => {
    destination.water = waterSelect.value;
});
citySelect.addEventListener('input', () => {
    destination.city = citySelect.value;
});
countrySelect.addEventListener('input', () => {
    destination.country = countrySelect.value;
});
addSloganButton.addEventListener('input', () => {
    // get the slogan from the input
    const slogan = sloganInput.value;
    // add the slogan to the destination.slogan array
    destination.slogan.push(slogan);
    // redisplay the slogans

    // reset the skill input
    sloganInput.value = '';
});
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
