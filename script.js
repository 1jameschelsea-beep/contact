function sendEmail() {
    const templateParams = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        subject: document.querySelector("#subject").value,
        message: document.querySelector("#message").value,
    };

    emailjs.send('service_pi5cpei', 'template_ociwubk', templateParams)
        .then(() => alert("Email Sent!"))
        .catch(() => alert("Email not sent!"));
}

    var error = document.getElementById("error");
    var email = document.getElementById("email");
    var button = document.getElementById("button");

    button.addEventListener("click", function () {
        var emailValue = email.value.trim();
        var valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);

        if (valid) {
            error.textContent = "Valid email!";
            error.style.color = "green";
            error.style.display = "block";
        } else {
            error.textContent = "Please insert a valid email address.";
            error.style.color = "red";
            error.style.display = "block";
        }
    });