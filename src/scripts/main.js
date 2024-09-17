document.addEventListener('DOMContentLoaded', function() {
    const hero = document.querySelector('.hero');
    const alturaHero = hero.clientHeight;

    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < alturaHero) {
            ocultaElementosDoHeader();
        } else {
            exibeElementosDoHeader();
        }
    })

    function ocultaElementosDoHeader () {
        const header = document.querySelector('header');
        header.classList.add('header--is-hidden');
    }

    function exibeElementosDoHeader () {
        const header = document.querySelector('header');
        header.classList.remove('header--is-hidden');
    }
})