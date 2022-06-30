const showMoreStiles = (trigger, styleCards) => {
    const cards = document.querySelectorAll(styleCards),
          btn = document.querySelector(trigger);

    styleCards.forEach(card => {
        card.classList.add('animated', 'fadeInUp');
    });

    btn.addEventListener('click', () => {
        styleCards.forEach(card => {
            card.classList.remove('animated', 'fadeInUp');
            card.classList.add('animated', 'fadeInUp');
        });
    });
};

export default showMoreStiles;