// Selecionar o elemento do switch (checkbox)
const switchElement = document.getElementById('flexSwitchCheckDefault');

// Adicionar um ouvinte de evento para o evento 'change'
switchElement.addEventListener('change', () => {
    const body = document.body;
    const header = document.querySelector('header');
    const logoImage = document.getElementById('logo');
    const headerLinks = document.querySelectorAll('header a');

    // Verificar se o switch está marcado (ativado)
    if (switchElement.checked) {
        // Mudar o tema para azul claro
        body.style.backgroundColor = '#93A6E0';      // Azul claro
        header.style.backgroundColor = '#4682b4';    // Azul aço
        logoImage.src = 'image/cor modo claro.png'; // Alterar imagem do logo para azul
    } else {
        // Mudar de volta para o tema original
        body.style.backgroundColor = '#121213';      // Cor de fundo original
        header.style.backgroundColor = '#000711';    // Cor de fundo original do cabeçalho
        logoImage.src = 'image/cine senai.jpg';      // Reverter para imagem original do logo
    }

    // Alterar a cor do texto nos links do cabeçalho
    headerLinks.forEach(link => {
        link.style.color = switchElement.checked ? 'black' : 'white';
    });
});




// Função para mostrar os horários do filme
function mostrarHorarios(filmeId) {
    const horariosDiv = document.getElementById(`horarios-${filmeId}`);
    if (horariosDiv.style.display === 'none') {
        horariosDiv.style.display = 'block';
    } else {
        horariosDiv.style.display = 'none';
    }
}

// Função para selecionar a poltrona em uma sessão específica do filme
// Função para selecionar/desselecionar poltronas
function selecionarPoltrona(filmeId, sessao) {
    // Recuperar todas as poltronas disponíveis
    const poltronas = document.querySelectorAll('.poltrona');

    // Adicionar evento de clique a cada poltrona
    poltronas.forEach(poltrona => {
        poltrona.addEventListener('click', () => {
            // Alternar o estado de seleção da poltrona
            if (poltrona.classList.contains('selecionada')) {
                // Se já estiver selecionada, desselecione-a
                poltrona.classList.remove('selecionada');
                poltrona.style.backgroundColor = ''; // Restaurar cor de fundo original
            } else {
                // Se não estiver selecionada, adicione a classe de seleção
                poltrona.classList.add('selecionada');
                poltrona.style.backgroundColor = 'green'; // Alterar a cor de fundo para verde
            }

            // Recalcular e exibir o total da compra
            calcularTotalCompra();
        });
    });

    // Exibir o modal ao clicar no botão "Ver opções"
    const modal = document.getElementById('modalPoltronas');
    modal.style.display = 'block';
}

// Função para calcular o total da compra com base nas poltronas selecionadas
function calcularTotalCompra() {
    const poltronasSelecionadas = document.querySelectorAll('.poltrona.selecionada');
    const precoPorPoltrona = 10; // Preço por poltrona selecionada

    // Calcular o total com base no número de poltronas selecionadas
    const totalCompra = poltronasSelecionadas.length * precoPorPoltrona;

    // Atualizar o elemento que exibe o total da compra
    const totalElement = document.getElementById('totalCompra');
    totalElement.textContent = `Total da Compra: R$ ${totalCompra}`;
}



// Função para fechar o modal
function fecharModal() {
    const modal = document.getElementById('modalPoltronas');
    modal.style.display = 'none'; // Esconder o modal ao fechar
}

function selecionarPoltrona(filmeId, sessao) {
    const poltronaSelecionada = `${filmeId}-${sessao}`; // Cria um identificador único para a poltrona

    // Verifica se a poltrona já está selecionada
    const index = poltronasSelecionadas.indexOf(poltronaSelecionada);
    if (index === -1) {
        // Se não estiver selecionada, adiciona à lista de poltronas selecionadas
        poltronasSelecionadas.push(poltronaSelecionada);

        // Altera o estilo da poltrona selecionada (exemplo: altera cor de fundo)
        const poltronaElement = document.getElementById(poltronaSelecionada);
        poltronaElement.style.backgroundColor = 'green'; // Altera a cor de fundo para indicar seleção

        // Exibe o modal de adicionar ao carrinho ao selecionar a primeira poltrona
        const modal = document.getElementById('modalPoltronas');
        modal.style.display = 'block';
    } else {
        // Se já estiver selecionada, remove da lista de poltronas selecionadas
        poltronasSelecionadas.splice(index, 1);

        // Restaura o estilo da poltrona (exemplo: restaura cor de fundo original)
        const poltronaElement = document.getElementById(poltronaSelecionada);
        poltronaElement.style.backgroundColor = ''; // Restaura a cor de fundo original
    }
}

function adicionarAoCarrinho() {
    const valorPorPoltrona = 10; // Valor por cada poltrona selecionada (exemplo: R$10)

    // Seleciona todas as poltronas marcadas como selecionadas
    const poltronasSelecionadas = document.querySelectorAll('.poltrona.selecionada');

    // Calcula o total com base no número de poltronas selecionadas
    const total = poltronasSelecionadas.length * valorPorPoltrona;

    // Exibe o total da compra no modal
    const modalContent = document.querySelector('.modal-content');
    const totalCompraElement = document.getElementById('totalCompra');

    if (totalCompraElement) {
        // Limpa o conteúdo anterior e adiciona o novo valor
        totalCompraElement.innerHTML = ''; // Limpa o conteúdo existente
        totalCompraElement.textContent = `Total da Compra: R$${total}`; // Adiciona o total da compra
    } else {
        // Se o elemento não existe, cria e adiciona
        const newTotalElement = document.createElement('div');
        newTotalElement.id = 'totalCompra';
        newTotalElement.textContent = `Total da Compra: R$${total}`;
        modalContent.appendChild(newTotalElement); // Adiciona ao conteúdo do modal
    }
}


// Selecionar todos os botões "Ver seção" e adicionar evento de clique
const buttonsVerSecao = document.querySelectorAll('.btn-ver');

buttonsVerSecao.forEach(button => {
    button.addEventListener('click', () => {
        // Exibir o modal ao clicar no botão "Ver seção"
        const modal = document.getElementById('modalPoltronas');
        modal.style.display = 'block'; // Mostrar o modal

        // Event listener para as poltronas dentro do modal
        const poltronas = document.querySelectorAll('.poltrona');

        poltronas.forEach(poltrona => {
            poltrona.addEventListener('click', () => {
                // Verificar se a poltrona já está selecionada
                if (poltrona.classList.contains('selecionada')) {
                    // Se já estiver selecionada, remover a classe e restaurar cor normal
                    poltrona.classList.remove('selecionada');
                    poltrona.style.backgroundColor = ''; // Restaurar cor de fundo original ou padrão
                } else {
                    // Se não estiver selecionada, adicionar classe e alterar a cor de fundo
                    poltronas.forEach(item => {
                        item.classList.remove('selecionada'); // Remover seleção de outras poltronas
                        item.style.backgroundColor = ''; // Restaurar cor de fundo original em outras poltronas
                    });

                    poltrona.classList.add('selecionada');
                    poltrona.style.backgroundColor = 'green'; // Altera a cor de fundo para verde ao selecionar
                }
            });
        });
    });
});

// Adicionar evento para fechar o modal ao clicar no botão Fechar
const btnFecharModal = document.querySelector('.btn-fechar-modal');
btnFecharModal.addEventListener('click', () => {
    const modal = document.getElementById('modalPoltronas');
    modal.style.display = 'none'; // Esconder o modal ao fechar
});

