document.addEventListener('DOMContentLoaded', () => {
    const carrossel = document.querySelector('.carrossel');
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');

    let index = 0;

    
    function atualizarCarrossel() {
        const largura = carrossel.clientWidth;
        slides.style.transform = `translateX(${-index * largura}px)`;
    }

    nextButton.addEventListener('click', () => {
        index = (index + 1) % totalSlides;
        atualizarCarrossel();
    });

    prevButton.addEventListener('click', () => {
        index = (index - 1 + totalSlides) % totalSlides;
        atualizarCarrossel();
    });
    window.addEventListener('resize', atualizarCarrossel);

    const carrosselProfissionais = document.querySelector('.carrossel-profissionais');
    const slidesProfissionais = document.querySelector('.slides-profissionais');
    const totalSlidesProfissionais = document.querySelectorAll('.profissional').length;
    const nextButtonProfissionais = document.querySelector('.nextProfissionais');
    const prevButtonProfissionais = document.querySelector('.prevProfissionais');

    let indexProfissionais = 0;

    function atualizarCarrosselProfissionais() {
        const largura = carrosselProfissionais.clientWidth;
        slidesProfissionais.style.transform = `translateX(${-indexProfissionais * largura}px)`;
    }

    nextButtonProfissionais.addEventListener('click', () => {
        indexProfissionais = (indexProfissionais + 1) % totalSlidesProfissionais;
        atualizarCarrosselProfissionais();
    });

    prevButtonProfissionais.addEventListener('click', () => {
        indexProfissionais = (indexProfissionais - 1 + totalSlidesProfissionais) % totalSlidesProfissionais;
        atualizarCarrosselProfissionais();
    });
    window.addEventListener('resize', atualizarCarrosselProfissionais);
});
