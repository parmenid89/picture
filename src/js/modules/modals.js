export function autoCloseModal(modalWindowSelector) {
    const modalWindowCalc = document.querySelectorAll(modalWindowSelector);
    modalWindowCalc.forEach(item => {
        setTimeout(() => {
        item.style.display = 'none';
        document.body.style.overflow = '';
    }, 2000);
    });
}

const modals = () => {
    let btnPressed = false; 
    function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {
        const trigger = document.querySelectorAll(triggerSelector),
              modalWindow = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]');
              

        

        trigger.forEach(item => {
            item.addEventListener('click', (elem) => {
                if (elem.target) {
                    elem.preventDefault();
                }

                btnPressed = true;

                if (destroy) {
                    item.remove();
                }
    
                windows.forEach(item => {
                    item.style.display = 'none';
                    item.classList.add('animated', 'fadeIn');
                });

                showModal(modalWindow);
            });
        });

        close.addEventListener('click', () => {
            windows.forEach(item => {
                item.style.display = 'none';
            });

            modalWindow.style.display = 'none';
            document.body.style.overflow = '';
        });

        modalWindow.addEventListener('click', (e) => {
            if (e.target === modalWindow) {
                windows.forEach(item => {
                    item.style.display = 'none';
                });
                modalWindow.style.display = 'none';
                document.body.style.overflow = '';
            }
        });

    }

    function showModalByTime (selector, time) {
        setTimeout(() => {
            let display;

            document.querySelectorAll('[data-modal]').forEach(item => {
                if (getComputedStyle(item).display !== 'none') {
                    display = 'block';
                }
            });

            if (!display) {
                document.querySelector(selector).style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
            
        }, time);
    }

    function openByScroll(selector) {
        window.addEventListener('scroll', () => {
            if (!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= 
                document.documentElement.scrollHeight)) {
                    document.querySelector(selector).click();
            }
        });
    }

    function showModal(modalWindow) {
        modalWindow.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    // function calcScroll() {         /* Функция для расчета ширины скролла */
    //     let div = document.createElement('div');

    //     div.style.width = '50px';
    //     div.style.height = '50px';
    //     div.style.overflowY = 'scroll';
    //     div.style.visibility = 'hidden';

    //     document.body.appendChild(div);
    //     let scrollWidth = div.offsetWidth - div.clientWidth;
    //     div.remove();

    //     return scrollWidth;
    // }

    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
    openByScroll('.fixed-gift');
    // showModalByTime('.popup-consultation', 60000);
};


export default modals;