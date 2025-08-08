

    document.addEventListener("DOMContentLoaded", function () {
    const loginLinks = document.querySelectorAll("a[href='login.html']");

    loginLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            Swal.fire({
                title: 'Você precisa estar logado!',
                text: "Deseja fazer login agora?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#007bff',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sim, fazer login',
                cancelButtonText: 'Não, continuar aqui'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = 'login.html';
                }
            });
        });
    });
});