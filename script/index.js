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
        body.style.backgroundColor = '#f0f8ff';      // Azul claro
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
