window.onload = () => {
  getMovies();
  printMovies();
}

function getMovies() {	
	// const apiKey = '75cebad891e54c9abf4957bd9313bf07';
	// const url = `https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=${apiKey}`;
	let url = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json';
	url += '?' + $.param({
	  'api-key': '75cebad891e54c9abf4957bd9313bf07',
	  // 'offset': '3',
	  // 'order': 'by-publication-date',
	});

	$.ajax({
	  url: url,
	  method: 'GET',
	}).done((result) => {
		const results = result['results'];
		results.forEach(printMovies);
	}).fail((err) => {
	  throw err;
	});
}

function printMovies(item) {
	$('.main').append(`
		<div class="card">
			<div class="head-card">
				<div class="titles-card">
					<h6>${item['publication_date']}</h6>
					<h2>${item['display_title']}</h2>
					<h4>${item['headline']}</h4>
				</div>
				<div class="image-card">
					<img src="${item['multimedia']['src']}">
				</div>
			</div>			
			<div class="body-card">				
				<h5 class="critic">Review by ${item['byline']}</h5>
				<p>${item['summary_short']}</p>
			</div>
			<div class="link">
				<a href="${item['link']['url']}" target="_blank"><h6>${item['link']['suggested_link_text']}</h6></a>
			</div>
		</div>
	`);

	console.log(item);
}

// document.getElementById('teste').addEventListener('click', () => {
// 	// alert('OK')
// 	getMovies();
// });