$(document).ready(function () {
    $('#log_out').on("click",function (e) {
        e.preventDefault();
        $.ajax({
            url: 'http://localhost:6969/api/auth/logout',
            method: 'DELETE',
            // data: {username: name, password: pass},
            success: function () {
                window.location.href = './index.html';
            },
            error: function (result) {
                $('#out_fail').append(`
                    <p>${JSON.stringify(result)}</p>
                `)
            }
        });
    });

});