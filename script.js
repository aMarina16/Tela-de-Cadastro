const cadastro = document.getElementById('cadastro');
const botaocad = document.getElementById('botao');

botaocad.addEventListener('click', function(event) {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmacao = document.getElementById('confirmacao-senha').value;

    if (!nome || !email || !senha ||confirmacao) {
        alert('Por favor, preencha todas as informações.');
        event.preventDefault();
    } else {
        alert('Cadastro concluído');
    }

    cadastro.submit();
});