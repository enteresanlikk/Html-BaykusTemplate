$(function(){
    $("input[name=send]").click(function () {
        var form = $('#contact-form');
        if ($(form).length > 0) {
            $(form).find('input[required],textarea[required]').each(function (i, item) {
                $(item).val($(item).val().trim())
            });

            if ($(form).valid())
                $(form).submit();
        }
    });

    $("input[name=loginSend]").click(function () {
        var form = $('#loginForm');
        if ($(form).length > 0) {
            $(form).find('input[required],textarea[required]').each(function (i, item) {
                $(item).val($(item).val().trim())
            });

            if ($(form).valid())
                $(form).submit();
        }
    });

    $("input[name=registerSend]").click(function () {
        var form = $('#registerForm');
        if ($(form).length > 0) {
            $(form).find('input[required],textarea[required]').each(function (i, item) {
                $(item).val($(item).val().trim())
            });

            if ($(form).valid())
                $(form).submit();
        }
    });

});