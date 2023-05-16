const form = document.getElementById('formulario');
let linhas = '';
form.addEventListener('submit', function(e){
    e.preventDefault();

    const InputNome = document.getElementById('nome');
    const InputNumero = document.getElementById('numero');

    let linha = '<tr>';
    linha += `<td>${InputNome.value}</td>`;
    linha += `<td>${InputNumero.value}</td>`;
    linha += '</td>'

    linhas += linha;

    const CorpoTabela = document.querySelector('tbody');
    CorpoTabela.innerHTML = linhas;

    InputNome.value = '';
    InputNumero.value = '';
})
