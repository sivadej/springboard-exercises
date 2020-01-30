const API_SEARCH_URL = 'http://api.tvmaze.com/search/shows';
const MISSING_IMG_URL = 'https://tinyurl.com/tv-missing';

/** Given a query string, return array of matching shows:
 *     { id, name, summary, episodesUrl }
 */

/** Search Shows
 *    - given a search term, search for tv shows that
 *      match that query.  The function is async show it
 *       will be returning a promise.
 *
 *   - Returns an array of objects. Each object should include
 *     following show information:
 *    {
        id: <show id>,
        name: <show name>,
        summary: <show summary>,
        image: <an image from the show data, or a default imege if no image exists, (image isn't needed until later)>
      }
 */
async function searchShows(query) {
	const result = await axios.get(API_SEARCH_URL, {
		params: { q: query }
	});
	const showsList = [];
	for (res of result.data) {
		showsList.push({
			id: res.show.id,
			name: res.show.name,
			summary: res.show.summary,
			image: !res.show.image ? MISSING_IMG_URL : res.show.image.medium
		});
  }
	return showsList;
}

/** Populate shows list:
 *     - given list of shows, add shows to DOM
 */
function populateShows(shows) {
	const $showsList = $('#shows-list');
	$showsList.empty();
	for (let show of shows) {
		let $item = $(
			`<div class="col-md-6 col-lg-3 Show" data-show-id="${show.id}">
         <div class="card" data-show-id="${show.id}">
         <img class="card-img-top" src="${show.image}">
             <div class="card-body">
             <h5 class="card-title">${show.name}</h5>
             <p class="card-text">${show.summary}</p>
             <a href="#" class="btn btn-primary">Show Episodes</a>
           </div>
         </div>
       </div>
      `
		);

		$showsList.append($item);
	}
}

/** Handle search form submission:
 *    - hide episodes area
 *    - get list of matching shows and show in shows list
 */
$('#search-form').on('submit', async function handleSearch(evt) {
	evt.preventDefault();

	let query = $('#search-query').val();
	if (!query) return;

	$('#episodes-area').hide();

	let shows = await searchShows(query);

	populateShows(shows);
});

/** Given a show ID, return list of episodes:
 *      { id, name, season, number }
 */
async function getEpisodes(id) {
	  const episodes = [];
  const result = await axios.get(`http://api.tvmaze.com/shows/${id}/episodes`);
  for (ep of result.data){
    episodes.push({
      id: ep.id,
      name: ep.name,
      season: ep.season,
      number: ep.number 
    })
  }
  return episodes;
}

// Populate list of episode information of the selected show to list at bottom of the page
function populateEpisodes(episodes){
  const $episodesList = $('#episodes-list');
  $episodesList.empty();
  for (ep of episodes) {
    let $item = $(
      `<li><b>S${ep.season}E${ep.number}:</b> ${ep.name}</li>`
    );
    $episodesList.append($item);
  }
  document.getElementById('episodes-area').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

// Handle "Show Episodes" buttons:
// On click, pass the targeted show id to getEpisodes(id)
// Targeted id determined by the parent element card 'data-show-id' attribute
$('#shows-list').on('click','a', async function(e){
  e.preventDefault();
  const showID = $(this).parents('.card').data('show-id');
  const episodes = await getEpisodes(showID);
  $('#episodes-area').show();
  populateEpisodes(episodes);
});
