export const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
        items = menu.querySelectorAll('li'),
        wrapper = document.querySelector('.portfolio-wrapper'),
        markAll = wrapper.querySelectorAll('.all'),
        no = document.querySelector('.portfolio-no');

    const typeFilter = (markType) => {
        markAll.forEach(mark => {
            mark.style.display = 'none';
            mark.classList.remove('animated', 'fadeIn');
        });

        no.style.display = 'none';
        no.classList.remove('animated', 'fadeIn');

        if (markType.length) {
            markType.forEach(mark => {
                mark.style.display = 'block';
                mark.classList.add('animated', 'fadeIn');
            });
        } else {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
        }
    };

    items.forEach(item => {
        item.addEventListener('click', (e) => {
            let target = e.target;
            if (target && target.tagName == 'LI') {
                items.forEach(btn => btn.classList.remove('active'));
                target.classList.add('active');
                const markType = wrapper.querySelectorAll(`.${target.classList[0]}`);
                typeFilter(markType);
            }
        });
    });
};

export default filter;