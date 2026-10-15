let loginForm = document.getElementById("form");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");

loginForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@e-uvt\.ro$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{7,}$/;

    if (!emailRegex.test(email)) {
        alert("Forma emailului este gresita");
        return;
    }

    if (!passwordRegex.test(password)) {
        alert("Forma parolei este gresita");
        return;
    }

    alert("Login reușit!");
    window.location.href = "/HTML/home.html";
});