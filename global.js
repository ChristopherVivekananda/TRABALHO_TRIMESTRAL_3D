document.addEventListener("DOMContentLoaded", () => {
    const modoEscuroAtivado = localStorage.getItem("darkMode") === "true";
    if (modoEscuroAtivado) {
        document.body.classList.add("dark");
        const trilho = document.getElementById("trilho");
        if (trilho) trilho.classList.add("dark");
    }

    // Botão de alternar modo escuro
    const trilho = document.getElementById("trilho");
    if (trilho) {
        trilho.addEventListener("click", () => {
            const ativado = document.body.classList.toggle("dark");
            trilho.classList.toggle("dark");
            localStorage.setItem("darkMode", ativado);
        });
    }
});
