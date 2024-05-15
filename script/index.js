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
function selecionarPoltrona(filmeId, sessao) {
    const modal = document.getElementById('modalPoltronas');
    modal.style.display = 'block'; // Mostrar o modal

    // Atualizar informações da poltrona selecionada na sua lógica
    // Por exemplo, usar o filmeId e a sessao para identificar a sessão selecionada
}

// Função para fechar o modal
function fecharModal() {
    const modal = document.getElementById('modalPoltronas');
    modal.style.display = 'none'; // Esconder o modal ao fechar
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

