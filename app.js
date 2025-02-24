const amigosCadastrados = [];
const lista = document.getElementById('listaAmigos');
const inputNome = document.querySelector('input');
const resultado = document.getElementById('resultado');

// Função para adicionar amigos
function adicionarAmigo() {
    const nome = inputNome.value.trim();

    if (!nome) {
        alert("Você não pode deixar o espaço vazio, antes de adicionar digite um nome");
        return;
    }

    amigosCadastrados.push(nome);
    limparCampo();
    atualizarLista();
    console.log('Nome adicionado:', nome);
}

// Função para limpar o campo de entrada
function limparCampo() {
    inputNome.value = '';
}

// Função para atualizar a lista exibida
function atualizarLista() {
    lista.innerHTML = ''; // Limpar a lista que já existe

    if (amigosCadastrados.length === 0) {
        lista.innerHTML = '<li>Nenhum amigo adicionado.</li>';
        return;
    }

    amigosCadastrados.forEach(amigo => {
        const item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

// Função para sortear um amigo
function sortearAmigo() {
    if (amigosCadastrados.length < 2) {
        alert('Adicione pelo menos dois amigos para realizar o sorteio!');
        return;
    }

    const amigoSorteado = amigosCadastrados[Math.floor(Math.random() * amigosCadastrados.length)];
    resultado.textContent = `O amigo secreto é: ${amigoSorteado}`;
}

// Função para limpar a lista e reiniciar o sorteio
function limparLista() {
    amigosCadastrados.length = 0; // Forma de esvaziar um array
    atualizarLista();
    resultado.textContent = '';
}
