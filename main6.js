document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("password").value.trim();
    const confirmarSenha = document.getElementById("confirmPassword").value.trim();

    if (senha !== confirmarSenha) {
        Swal.fire({
            icon: 'error',
            title: 'Senhas diferentes',
            text: 'As senhas não coincidem!',
            confirmButtonColor: '#006aff'
        });
        return;
    }

    const jaCadastrado = localStorage.getItem(`user_${email}`);

    if (jaCadastrado) {
        Swal.fire({
            icon: 'warning',
            title: 'Email já cadastrado',
            text: 'Esse email já está em uso. Faça login ou use outro.',
            confirmButtonColor: '#006aff'
        });
        return;
    }

    localStorage.setItem(`user_${email}`, senha);
    Swal.fire({
        icon: 'success',
        title: 'Cadastro realizado!',
        text: 'Você foi cadastrado com sucesso!',
        confirmButtonColor: '#006aff'
    }).then(() => {
        window.location.href = "principal.html";
    });
});
