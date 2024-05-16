// Selecionar o elemento do switch (checkbox)
const switchElement = document.getElementById('flexSwitchCheckDefault');
switchElement.addEventListener('change', () => {
    const body = document.body;
    const header = document.querySelector('header');
    const logoImage = document.getElementById('logo');
    const headerLinks = document.querySelectorAll('header a');

   
    if (switchElement.checked) {
        // Mudar o tema para azul claro
        body.style.backgroundColor = '#93A6E0'; 
        header.style.backgroundColor = '#4682b4';
        footer.style.backgroundColor = '#4682b4';   
        logoImage.src = 'image/cor modo claro.png'; 
    } else {
        // Mudar de volta para o tema original
        body.style.backgroundColor = '#121213'; 
        header.style.backgroundColor = '#000711';  
        logoImage.src = 'image/cine senai.jpg';      
    }

 
    headerLinks.forEach(link => {
        link.style.color = switchElement.checked ? 'black' : 'white';
    });
});


function mostrarHorarios(filmeId) {
    const horariosDiv = document.getElementById(`horarios-${filmeId}`);
    if (horariosDiv.style.display === 'none') {
        horariosDiv.style.display = 'block';
    } else {
        horariosDiv.style.display = 'none';
    }
}


function selecionarPoltrona(filmeId, sessao) {
    const poltronas = document.querySelectorAll('.poltrona');

    poltronas.forEach(poltrona => {
        poltrona.addEventListener('click', () => {

            if (poltrona.classList.contains('selecionada')) {
                poltrona.classList.remove('selecionada');
                poltrona.style.backgroundColor = ''; 
            } else {
                poltrona.classList.add('selecionada');
                poltrona.style.backgroundColor = 'green';
            }
            calcularTotalCompra();
        });
    });

    const modal = document.getElementById('modalPoltronas');
    modal.style.display = 'block';
}

function calcularTotalCompra() {
    const poltronasSelecionadas = document.querySelectorAll('.poltrona.selecionada');
    const precoPorPoltrona = 10; 

    const totalCompra = poltronasSelecionadas.length * precoPorPoltrona;
    const totalElement = document.getElementById('totalCompra');
    totalElement.textContent = `Total da Compra: R$ ${totalCompra}`;
}




function fecharModal() {
    const modal = document.getElementById('modalPoltronas');
    modal.style.display = 'none'; 
}

function selecionarPoltrona(filmeId, sessao) {
    const poltronaSelecionada = `${filmeId}-${sessao}`; 

    const index = poltronasSelecionadas.indexOf(poltronaSelecionada);
    if (index === -1) {
        poltronasSelecionadas.push(poltronaSelecionada);
        const poltronaElement = document.getElementById(poltronaSelecionada);
        poltronaElement.style.backgroundColor = 'green'; 
        const modal = document.getElementById('modalPoltronas');
        modal.style.display = 'block';
    } else {
        poltronasSelecionadas.splice(index, 1);
        const poltronaElement = document.getElementById(poltronaSelecionada);
        poltronaElement.style.backgroundColor = ''; 
    }
}

function adicionarAoCarrinho() {
    const valorPorPoltrona = 10; 

    const poltronasSelecionadas = document.querySelectorAll('.poltrona.selecionada');
    const total = poltronasSelecionadas.length * valorPorPoltrona;
    const modalContent = document.querySelector('.modal-content');
    const totalCompraElement = document.getElementById('totalCompra');

    if (totalCompraElement) {
        totalCompraElement.innerHTML = '';
        totalCompraElement.textContent = `Total da Compra: R$${total}`;
    } else {
        const newTotalElement = document.createElement('div');
        newTotalElement.id = 'totalCompra';
        newTotalElement.textContent = `Total da Compra: R$${total}`;
        modalContent.appendChild(newTotalElement); 
    }
}

const buttonsVerSecao = document.querySelectorAll('.btn-ver');

buttonsVerSecao.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.getElementById('modalPoltronas');
        modal.style.display = 'block'; 
        const poltronas = document.querySelectorAll('.poltrona');

        poltronas.forEach(poltrona => {
            poltrona.addEventListener('click', () => {
                if (poltrona.classList.contains('selecionada')) {
                    poltrona.classList.remove('selecionada');
                    poltrona.style.backgroundColor = ''; 
                } else {
                    poltronas.forEach(item => {
                        item.classList.remove('selecionada'); 
                        item.style.backgroundColor = ''; 
                    });

                    poltrona.classList.add('selecionada');
                    poltrona.style.backgroundColor = 'green'; 
                }
            });
        });
    });
});

const btnFecharModal = document.querySelector('.btn-fechar-modal');
btnFecharModal.addEventListener('click', () => {
    const modal = document.getElementById('modalPoltronas');
    modal.style.display = 'none'; 
});

