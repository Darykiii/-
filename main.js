document.addEventListener('DOMContentLoaded', function() {
    const homeLink = document.getElementById('home-link');
    const recipesLink = document.getElementById('recipes-link');
    const routesLink = document.getElementById('routes-link');
    const mainContent = document.getElementById('main-content');

    homeLink.addEventListener('click', function(event) {
        event.preventDefault();
        mainContent.innerHTML = '<h2>Bem-vindo à nossa página de comida brasileira!</h2><p>Explore nossas receitas e rotas para descobrir o melhor da culinária do Brasil.</p>';
    });

    recipesLink.addEventListener('click', function(event) {
        event.preventDefault();
        mainContent.innerHTML = '<h2>Receitas Brasileiras</h2><p>Aqui você encontrará uma variedade de receitas deliciosas da culinária brasileira.</p>';
    });

    routesLink.addEventListener('click', function(event) {
        event.preventDefault();
        mainContent.innerHTML = '<h2>Rotas de Comida</h2><p>Descubra as melhores rotas gastronômicas para explorar a diversidade culinária do Brasil.</p>';
    });
});