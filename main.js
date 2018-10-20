$(document).ready(function() {
	$('#search').on('submit', function(e) {
		e.preventDefault();
		const city_name = $('#keyword').val();
		$('#root').empty();
		$.ajax({
			url:`http://api.apixu.com/v1/current.json?key=e51fc4c9af264ce69be71045182010&q=${city_name}`,
			method: 'GET',
			success: function(data) {
				$('#root').append(`<h1>
					${data.current.temp_c}°C
					</h1>`);
			},
			error: function() {
				console.log("error");
				$('#root').append(`<h1>
					No Information! Please Try Again!
					</h1>`);
			} 
		});
	});
});