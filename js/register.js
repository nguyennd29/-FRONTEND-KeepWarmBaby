// var password, confirm_password;
//
// $(document).ready(function () {
//     password = $('#password').val();
//     confirm_password = $('#confirm_password').val();
//     $('#confirm_password').on('input', function (e) {
//         validatePassword(password,confirm_password);
//     });
// });
//
// function validatePassword(password,confirm_password) {
//     if (password !== confirm_password) {
//         $('#confirm_password')[0].setCustomValidity("Passwords Don't Match");
//     } else {
//         $('#confirm_password')[0].setCustomValidity('');
//     }
// }
// var password, confirm_password;
//
$(document).ready(function () {
    $('#register').on('submit', function (e) {
        e.preventDefault();
        var name = $('#username').val();
        var pass = $('#password').val();
        var re_pass = $('#confirm_password').val();
        if (name === '' || pass === '' || re_pass === '') {
            alert("Please fill all fields...!!!!!!");
        } else if ((pass.length) < 6) {
            $('#pass_fail').html("Password should at least 8 character in length...!!!!!!");
        } else if (!(pass).match(re_pass)) {
            $('#re_pass_fail').html("Your passwords don't match. Try again?");
        } else if ((name.length) <5) {
            $('#name_fail').html("Your name should at least 5 characters in length...!!!!!!");
        } else {
            $.ajax({
                // url: 'https://svflirt.herokuapp.com/api/user'||'http://localhost:6969/api/user',
                url: 'http://localhost:6969/api/user',
                method: 'POST',
                data: {username: name, password: pass},
                success: function () {
                    window.location.href = './login.html';
                },
                error: function (result) {
                    console.log(JSON.stringify(result));
                    $('#sign_fail').append(`<p>
					Sign up fail! Try Again! 
					</p>
					`);
                }
            });
        }
    });
});