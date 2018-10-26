$(document).ready(function() {
	$('#search').on('submit', function(e) {
		e.preventDefault();
		const city_name = $('#keyword').val();
		$('#root').empty();
		$.ajax({
			url:`http://api.apixu.com/v1/current.json?key=e51fc4c9af264ce69be71045182010&q=${city_name}`,
			method: 'GET',
			success: function(data) {
				// var img = 'http' + data.current.condition.icon; 
				$('#root').append(`
					<div class="col-3">
					<h1 class="text-white" id="temp">
					${data.current.temp_c}°C 
					</h1>
					<img src=${data.current.condition.icon}> 
					</div>
					`);
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