// my api key gArSxUzbKNPJS6r3WDYR35rLJjA6F4sH
// example search request:
// https://api.giphy.com/v1/gifs/search?api_key=gArSxUzbKNPJS6r3WDYR35rLJjA6F4sH&q=pikachu&limit=25&offset=0&rating=G&lang=en
// q = search query
// imgResult = object containing image url and alt tag => { url: string, alt: string }

console.log("Let's get this party started!");

const API_KEY = 'gArSxUzbKNPJS6r3WDYR35rLJjA6F4sH';
const container = document.querySelector('#gifs-container');

// Use API call to GET single URL from search query
async function getGIF(query) {
	const result = await axios.get('https://api.giphy.com/v1/gifs/search', {
		params: {
			api_key: API_KEY,
			q: query,
			limit: 1,
			offset: 0,
			rating: 'G',
			lang: 'en'
		}
	});
	const imgResult = {
		url: result.data.data[0].images.original.url,
		alt: result.data.data[0].title
	};
	addImgToContainer(getImgElement(imgResult));
}

function getImgElement(imgObj) {
	const imgElement = document.createElement('IMG');
	imgElement.setAttribute('alt', imgObj.alt);
	imgElement.src = imgObj.url;
	return imgElement;
}

function addImgToContainer(element) {
	container.append(element);
}

// Handle submit button click
const btnSubmit = document.querySelector('#btn-submit');
btnSubmit.addEventListener('click', function(e) {
    e.preventDefault();
    const input = document.querySelector('#search');
    getGIF(input.value);
    input.value = '';
    input.focus();
});

// Handle reset button click
const btnClear = document.querySelector('#btn-clear');
btnClear.addEventListener('click', function(e) {
    e.preventDefault();
    container.innerHTML = '';
});