        let trilho = document.getElementById('trilho');
        let body = document.body;

        trilho.addEventListener('click', () => {
            trilho.classList.toggle('dark');
            body.classList.toggle('dark');
        });

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("password").value;

    if (email === "teste@gmail.com" && senha === "123456") {
        window.location.href = "principal.html";
    } else {
        alert("Email ou senha incorretos!");
    }
});
