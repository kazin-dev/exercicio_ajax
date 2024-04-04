document.addEventListener('DOMContentLoaded', function () {
    // Seleciona os elementos do HTML pelos seus respectivos classes e IDs
    const nameElement = document.querySelector('.profile-name');
    const avatarElement = document.querySelector('.profile-avatar');
    const reposElement = document.querySelector('.repos');
    const followersElement = document.querySelector('.followers');
    const followingElement = document.querySelector('.following');
    const linkElement = document.querySelector('.profile-link');

    // Faz a requisição para o endpoint da sua API
    fetch('https://api.github.com/users/kazin-dev')
        .then(function (res) {
            return res.json(); // Converte a resposta para JSON
        })
        .then(function (json) {
            // Define o conteúdo dos elementos com base nos dados recebidos
            nameElement.innerText = json.name; // Nome do usuário
            avatarElement.src = json.avatar_url; // URL do avatar do usuário
            reposElement.innerText = json.public_repos; // Quantidade de repositórios públicos
            followersElement.innerText = json.followers; // Quantidade de seguidores
            followingElement.innerText = json.following; // Quantidade de pessoas que o usuário segue
            linkElement.href = json.html_url; // URL do perfil do usuário
        });
});





