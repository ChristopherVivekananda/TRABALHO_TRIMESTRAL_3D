document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("password").value;

    if (email === "teste@email.com" && senha === "123456") {
        localStorage.setItem("email", email);
        window.location.href = "principal.html";
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Erro no login',
            text: 'Email ou senha incorretos!',
            confirmButtonColor: '#006aff'
        });
    }
});
