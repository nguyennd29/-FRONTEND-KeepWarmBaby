$(document).ready(function() {
	$('#login').on('submit', function(e) {
		e.preventDefault();
		var name = $('#username').val();
		var pass = $('#password').val();
		$.ajax({
			url:'http://localhost:6969/api/auth/login',
			method: 'POST',
			data: {username: name, password: pass},
			success: function(data) {
				window.location.href = '/'; 
			},
			error: function() {
				console.log("error");
			} 
		});
	});
});