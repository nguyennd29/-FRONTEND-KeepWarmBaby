let count = 1;

$(document).ready(function () {
    $('#form2').hide();
    $('#form3').hide();
    $('#form1').hide();
    let url = window.location.href; // or window.location.href for current url
    let captured = /id=([^&]+)/.exec(url)[1]; // Value is in [1] ('384' in our case)
    let uid = captured ? captured : 1;
    console.log(uid);
    $.ajax({
        url: `http://localhost:6969/api/flirt/${uid}`,
        method: 'GET',
        success: function (data) {
            // console.log(data);
            if(data.flirt.receiver[0]) {
                $('#mail0').val(data.flirt.receiver[0].mail);
                $('#mail-content0').val(data.flirt.receiver[0].mailContent);
            }
            if(data.flirt.receiver[1]) {
                $('#mail1').val(data.flirt.receiver[1].mail);
                $('#mail-content1').val(data.flirt.receiver[1].mailContent);
                $('#form1').show();
                count++;
            }
            if(data.flirt.receiver[2]) {
                $('#mail2').val(data.flirt.receiver[2].mail);
                $('#mail-content2').val(data.flirt.receiver[2].mailContent);
                $('#form2').show();
                count++;
            }
            if(data.flirt.receiver[3]) {
                $('#mail3').val(data.flirt.receiver[3].mail);
                $('#mail-content3').val(data.flirt.receiver[3].mailContent);
                $('#form3').show();
                count++;
            }
        },
        error: function (result) {
            $('#out_fail').append(`
                    <p>${JSON.stringify(result)}</p>
                `)
        }
    });

    $('#log_out').on("click", function (e) {
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

    $('#sending_mail1').on('submit', function (e) {
        e.preventDefault();
        let mailx = $('#mail').val();
        let mailContentx = $('#mail_content').val();
        $.ajax({
            // url: 'https://svflirt.herokuapp.com/api/sending'||'http://localhost:6969/api/sending',
            url: `http://localhost:6969/api/flirt/${uid}`,
            method: 'POST',
            data: {mail: mailx, mailContent: mailContentx},
            success: function () {
                alert("Success");
            },
            error: function (result) {
                $('#sending_fail').append(`
                    <p>${JSON.stringify(result)}</p>
                    `);
            }
        });
    });

    $('#sending_mail2').on('submit', function (e) {
        e.preventDefault();
        let mailx = $('#mail').val();
        let mailContentx = $('#mail_content').val();
        let url = window.location.href; // or window.location.href for current url
        let captured = /id=([^&]+)/.exec(url)[1]; // Value is in [1] ('384' in our case)
        let uid = captured ? captured : 1;
        console.log(uid);
        $.ajax({
            // url: 'https://svflirt.herokuapp.com/api/sending'||'http://localhost:6969/api/sending',
            url: `http://localhost:6969/api/flirt/${uid}`,
            method: 'POST',
            data: {mail: mailx, mailContent: mailContentx},
            success: function () {
                alert("Success");
            },
            error: function (result) {
                $('#sending_fail').append(`
                    <p>${JSON.stringify(result)}</p>
                    `);
            }
        });
    });

    $('#sending_mail3').on('submit', function (e) {
        e.preventDefault();
        let mailx = $('#mail').val();
        let mailContentx = $('#mail_content').val();
        let url = window.location.href; // or window.location.href for current url
        let captured = /id=([^&]+)/.exec(url)[1]; // Value is in [1] ('384' in our case)
        let uid = captured ? captured : 1;
        console.log(uid);
        $.ajax({
            // url: 'https://svflirt.herokuapp.com/api/sending'||'http://localhost:6969/api/sending',
            url: `http://localhost:6969/api/flirt/${uid}`,
            method: 'POST',
            data: {mail: mailx, mailContent: mailContentx},
            success: function () {
                alert("Success");
            },
            error: function (result) {
                $('#sending_fail').append(`
                    <p>${JSON.stringify(result)}</p>
                    `);
            }
        });
    });

    $('#sending_mail4').on('submit', function (e) {
        e.preventDefault();
        let mailx = $('#mail').val();
        let mailContentx = $('#mail_content').val();
        let url = window.location.href; // or window.location.href for current url
        let captured = /id=([^&]+)/.exec(url)[1]; // Value is in [1] ('384' in our case)
        let uid = captured ? captured : 1;
        console.log(uid);
        $.ajax({
            // url: 'https://svflirt.herokuapp.com/api/sending'||'http://localhost:6969/api/sending',
            url: `http://localhost:6969/api/flirt/${uid}`,
            method: 'POST',
            data: {mail: mailx, mailContent: mailContentx},
            success: function () {
                alert("Success");
            },
            error: function (result) {
                $('#sending_fail').append(`
                    <p>${JSON.stringify(result)}</p>
                    `);
            }
        });
    });

    $('#delete-button1').on('click', function (e) {
        e.preventDefault();
        let url = window.location.href; // or window.location.href for current url
        let captured = /id=([^&]+)/.exec(url)[1]; // Value is in [1] ('384' in our case)
        let uid = captured ? captured : 1;
        console.log(uid);
        let fid = 0;
        $.ajax({
            // url: 'https://svflirt.herokuapp.com/api/sending'||'http://localhost:6969/api/sending',
            url: `http://localhost:6969/api/flirt/${uid}/0`,
            method: 'DELETE',
            // data: {mail: mailx,mailContent: mailContentx},
            success: function () {
                alert("Success");
            },
            error: function (result) {
                $('#sending_fail').append(`
                    <p>${JSON.stringify(result)}</p>
                    `);
            }
        });
    });

    $('#delete-button2').on('click', function (e) {
        e.preventDefault();
        let url = window.location.href; // or window.location.href for current url
        let captured = /id=([^&]+)/.exec(url)[1]; // Value is in [1] ('384' in our case)
        let uid = captured ? captured : 1;
        console.log(uid);
        let fid = 0;
        $.ajax({
            // url: 'https://svflirt.herokuapp.com/api/sending'||'http://localhost:6969/api/sending',
            url: `http://localhost:6969/api/flirt/${uid}/1`,
            method: 'DELETE',
            // data: {mail: mailx,mailContent: mailContentx},
            success: function () {
                alert("Success");
            },
            error: function (result) {
                $('#sending_fail').append(`
                    <p>${JSON.stringify(result)}</p>
                    `);
            }
        });
    });

    $('#delete-button3').on('click', function (e) {
        e.preventDefault();
        let url = window.location.href; // or window.location.href for current url
        let captured = /id=([^&]+)/.exec(url)[1]; // Value is in [1] ('384' in our case)
        let uid = captured ? captured : 1;
        console.log(uid);
        let fid = 0;
        $.ajax({
            // url: 'https://svflirt.herokuapp.com/api/sending'||'http://localhost:6969/api/sending',
            url: `http://localhost:6969/api/flirt/${uid}/2`,
            method: 'DELETE',
            // data: {mail: mailx,mailContent: mailContentx},
            success: function () {
                alert("Success");
            },
            error: function (result) {
                $('#sending_fail').append(`
                    <p>${JSON.stringify(result)}</p>
                    `);
            }
        });
    });

    $('#delete-button4').on('click', function (e) {
        e.preventDefault();
        let url = window.location.href; // or window.location.href for current url
        let captured = /id=([^&]+)/.exec(url)[1]; // Value is in [1] ('384' in our case)
        let uid = captured ? captured : 1;
        console.log(uid);
        $.ajax({
            // url: 'https://svflirt.herokuapp.com/api/sending'||'http://localhost:6969/api/sending',
            url: `http://localhost:6969/api/flirt/${uid}/3`,
            method: 'DELETE',
            // data: {mail: mailx,mailContent: mailContentx},
            success: function () {
                alert("Success");
            },
            error: function (result) {
                $('#sending_fail').append(`
                    <p>${JSON.stringify(result)}</p>
                    `);
            }
        });
    });

    $('#add-button').on('click', function (e) {
        console.log('clicked');
        count++;
        // $('#sending_mail').stepUp();
        if (count > 4)
            $('.add-tab').hide();
        else if (count===2)
            $('#form1').show();
        else if (count===3)
            $('#form2').show();
        else if (count===4) {
            $('#form3').show();
            $('.add-tab').hide();
        }
    });
});