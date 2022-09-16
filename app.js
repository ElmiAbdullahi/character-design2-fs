/* Imports */
/* Get DOM Elements */
// water change DOM elements
const waterSelect = document.getElementById('water-select');
const waterPlace = document.getElementById('water-place');
// city change DOM Elements
const citySelect = document.getElementById('city-select');
const cityPlace = document.getElementById('destination-place');
//country change DOM Elements
const countrySelect = document.getElementById('country-select');
const countryPlace = document.getElementById('countries-place');
const nameInput = document.getElementById('dream-city');
const sloganList = document.getElementById('slogan-list');
const sloganInput = document.getElementById('slogan-input');
const addSloganButton = document.getElementById('add-slogan-button');
const destinationArticle = document.getElementById('destination-article');
const destinationHeader = document.getElementById('destination-header');
// const destinationCountries = document.getElementById('');

/* State */
let destination = {
    name: '',
    water: 'beach',
    city: 'medium-city',
    country: 'UK',
    slogan: [],
};

/* Events */
nameInput.addEventListener('input', () => {
    // change the destination.name property
    destination.name = nameInput.value;
    // redisplay
    displayDestination();
});
waterSelect.addEventListener('change', () => {
    destination.water = waterSelect.value;

    displayDestination();
});
citySelect.addEventListener('change', () => {
    destination.city = citySelect.value;

    displayDestination();
});
countrySelect.addEventListener('change', () => {
    destination.country = countrySelect.value;
    displayDestination();
});
addSloganButton.addEventListener('click', () => {
    console.log(sloganInput);
    // get the slogan from the input
    const slogan = sloganInput.value;
    // add the slogan to the destination.slogan array
    destination.slogan.push(slogan);
    // redisplay the slogans
    displaySlogan();

    // reset the skill input
    sloganInput.value = '';
});

/* Display Functions */
function displayDestination() {
    destinationArticle.classList.value = destination.country;
    destinationHeader.textContent = destination.name;

    waterPlace.src = 'assets/places/' + destination.water + '.png';
    waterPlace.atl = destination.water;

    countryPlace.src = 'assets/places/' + destination.country + '.png';
    countryPlace.alt = destination.country;

    cityPlace.src = 'assets/places/' + destination.city + '.png';
    cityPlace.alt = destination.city;
}

function displaySlogan() {
    sloganList.innerHTML = '';

    for (let slogan of destination.slogan) {
        const li = document.createElement('li');
        li.textContent = slogan;
        sloganList.append(li);
    }
}

// (don't forget to call any display functions you want to run on page load!)
displayDestination();
displaySlogan();
