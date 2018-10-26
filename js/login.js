$(document).ready(function () {
    $('#login').on('submit', function (e) {
        e.preventDefault();
        var name = $('#username').val();
        var pass = $('#password').val();
        $.ajax({
            url: 'http://localhost:6969/api/auth/login',
            method: 'POST',
            data: {username: name, password: pass},
            success: function () {
                    window.location.href = '/main.html';
            },
            error: function (result) {
                console.log(result);
                $('#log_fail').empty();
                $('#log_fail').append(`<p>
					${result.responseJSON.error}
					</p>
					`);
            }
        });
    });
});