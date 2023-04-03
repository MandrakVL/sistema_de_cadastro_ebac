
// const submitButton = document.querySelector('#button-submit');
const form = document.querySelector('#form-atividade');
let linhas = '';
const atividades = [];

    form.addEventListener('submit', function(e) {
        e.preventDefault()


        const nomeInput = document.querySelector('#nome-pessoa');
        const telefoneInput = document.querySelector('#telefone-pessoa');


        let linha = '<tr>';
        linha += `<td>${nomeInput.value}</td>`;
        linha += `<td>${telefoneInput.value}</td>`;
        linha += `</tr>`;

        linhas += linha; 

        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas;

        nomeInput.value = '';
        telefoneInput.value = '';
    });