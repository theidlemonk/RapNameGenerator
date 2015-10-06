$(document).ready(function() {
    setFormBindings();
});

function setFormBindings() {
    $('#enter').on('click', function() {
        var user_input = $('#user-input').val();
        if (user_input) {
            var engine = new Generator;
            var name = engine.generateName(user_input);
            $('.response').html(name).show();
        } else {
            $('.error').show();
        }
    });

    $('#user-input').focus(function() {
        $('.error').hide();
        $('.response').html("").hide();
    });

}
