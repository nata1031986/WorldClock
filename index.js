document.addEventListener('DOMContentLoaded', function () {
    // Wait for the document to be fully loaded

    // Get references to the elements
    const citySelect = document.getElementById('citySelect');
    const cityNameElement = document.getElementById('cityName');
    const cityInfoElement = document.getElementById('cityInfo');
    const cityDateElement = document.getElementById('cityDate');
    const cityTimeElement = document.getElementById('cityTime');

    // Add event listener to the city dropdown
    citySelect.addEventListener('change', function () {
        // Get the selected city
        const selectedCity = citySelect.value;

        // Update the displayed information based on the selected city
        updateCityInfo(selectedCity);
    });

    // Function to update city information
    function updateCityInfo(city) {
        switch (city) {
            case 'Kyiv':
                updateCityInfoDetails('Kyiv', 'Ukraine', 'Europe/Kiev');
                break;
            case 'Chicago':
                updateCityInfoDetails('Chicago', 'USA', 'America/Chicago');
                break;
            case 'Sacramento':
                updateCityInfoDetails('Sacramento', 'USA', 'America/Los_Angeles');
                break;
            case 'Toronto':
                updateCityInfoDetails('Toronto', 'Canada', 'America/Toronto');
                break;
            default:
                // Handle the default case or no city selected
                cityNameElement.textContent = '';
                cityInfoElement.textContent = '';
                cityDateElement.textContent = '';
                cityTimeElement.textContent = '';
                break;
        }
    }

    // Function to update city details using moment.js
    function updateCityInfoDetails(city, country, timeZone) {
        const now = moment().tz(timeZone);

        cityNameElement.textContent = `${city}, ${country}`;
        cityInfoElement.textContent = `Additional city information for ${city}`;
        cityDateElement.textContent = now.format('MMM D, YYYY');
        cityTimeElement.textContent = now.format('h:mm:ss A');
    }
});