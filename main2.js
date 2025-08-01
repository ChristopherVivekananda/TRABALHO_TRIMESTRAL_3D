let trilho = document.getElementById('trilho');
        let body = document.body;

        trilho.addEventListener('click', () => {
            trilho.classList.toggle('dark');
            body.classList.toggle('dark');
        });
