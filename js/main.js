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

    $('#sending_mail').on('submit', function (e) {
        e.preventDefault();
        let mailx = $('#mail').val();
        let mailContentx = $('#mail_content').val();
        $.ajax({
            url: 'https://svflirt.herokuapp.com/api/sending'||'http://localhost:6969/api/sending',
            method: 'POST',
            data: {mail: mailx,mailContent: mailContentx},
            success: function() {
                alert("Success");
            },
            error: function (result) {
                $('#sending_fail').append(`
                    <p>${JSON.stringify(result)}</p>
                    `);
            }
        });
    });

    $('#add-button').on('click',function(e){
        console.log('clicked');
        $('.add-tab').before(` <div class="mail-tab col-5 input-tab">
        <form id="sending_mail">
            <div class="form-group receiver">
                <label for="mail">Email address</label>
                <input type="email" class="form-control input-box-css" id="mail" aria-describedby="emailHelp" placeholder="Enter email">
                <!--<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>-->
            </div>
            <div class="form-group mail_content">
                <label for="mail-content">Write your message</label>
                <textarea class="form-control input-box-css" id="mail-content" rows="15"></textarea>
            </div>
            <input type="submit" id="mail-button" class="btn btn-primary" value="Save"></input>
            <input type="submit" class="btn btn-danger" id="delete-button" value="Delete"></input>

        </form>
    </div>`);
    
    })
});