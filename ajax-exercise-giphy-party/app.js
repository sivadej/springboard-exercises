console.log("Let's get this party started!");

const API_KEY = 'gArSxUzbKNPJS6r3WDYR35rLJjA6F4sH';
const API_URL = 'https://api.giphy.com/v1/gifs/search';

const container = document.querySelector('#gifs-container');
const btnSubmit = document.querySelector('#btn-submit');
const btnClear = document.querySelector('#btn-clear');

// Button handlers
btnSubmit.addEventListener('click', handleSearchClick);
btnClear.addEventListener('click', handleBtnClear);

// -Use API call to GET single URL and alt tag from search query
// -Display image within container
async function getGIF(query) {
	const result = await axios.get(API_URL, {
		params: {
			api_key: API_KEY,
			q: query,
			limit: 1,
			offset: 0,
			rating: 'G',
			lang: 'en'
		}
	});
	const url = result.data.data[0].images.original.url;
	const alt = result.data.data[0].title;
    addImgToContainer(getImgElement(url, alt));
}

// Generate img html element for display
function getImgElement(url, alt) {
	const imgElement = document.createElement('IMG');
	imgElement.setAttribute('alt', alt);
	imgElement.src = url;
	return imgElement;
}

function addImgToContainer(element) {
	container.append(element);
}

// Handle submit button click
function handleSearchClick(evt) {
	evt.preventDefault();
	const input = document.querySelector('#search');
	getGIF(input.value);
	input.value = '';
	input.focus();
}

// Handle reset button click
function handleBtnClear(evt) {
	evt.preventDefault();
	container.innerHTML = '';
};