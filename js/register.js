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
    // password = $('#password').val();
    // confirm_password = $('#confirm_password').val();
    $('#register').validate({
        rules: {
            username: {
                required: true,
                minlength: 6
            },
            password: {
                required: true,
                minlength: 6
            },
            confirm_password: {
                required: true,
                minlength: 6,
                equalTo: "#password"
            }
        },
        message: {
            username: {
                required: "Please input username",
                minlength: "Your password must be at least 6 characters."
            },
            password: {
                required: "Please input password",
                minlength: "Your password must be at least 6 characters."
            },
            confirm_password: {
                required: "Please confirm password",
                minlength: "Your password must be at least 6 characters.",
                equalTo: "Please enter the same password as above"
            }
        },
        debug: true
    });
});