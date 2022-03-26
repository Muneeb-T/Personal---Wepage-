$("#gform").validate({
    errorClass: "validate",
    rules: {
        name: "required",
        email: {
            required: true,
            email: true
        },
        subject: "required",
        message: {
            required: true,
            minlength: 50,
        }
    },
    messages: {
        name: {
            required: "Please enter name"
        },
        email: {
            required: "Please enter email address",
            email: "Please enter valid email"
        },
        subject: {
            required: "Please enter subject"
        },
        message: {
            required: "Please type your message here",
            minlength: "Message must be in miniumum 50 characters"
        }
    }
});
