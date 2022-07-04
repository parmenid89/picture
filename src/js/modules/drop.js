import {postData} from '../services/requests';

const drop = () => {
    // Есть 8 событий, которые связаны с перетаскиванием элементов на сайте:
    // drag * 
    // dragend * 
    // dragenter - возникает тогда, когда обьект событие перетаскивается над dropArea
    // dragexit *
    // dragleave - обьект за пределами dropArea
    // dragover - обьект зависает над dropArea и двигается в ее пределах (срабатывает через каждые неколько миллисекунд)
    // dragstart * 
    // drop - возникает тогда, когда пользовательно отпустил кнопку мышки и обьект упал в dropArea
    // * - срабатывают на элементе, который мы перетаскиваем в дом элементе, а не с файловой системы

    const fileInputs = document.querySelectorAll('[name=upload]');

    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, preventDefaults, false);
        });
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function highlight(item) {
        item.closest('.file_upload').style.border = '5px solid yellow';
        item.closest('.file_upload').style.backgroundColor = 'rgba(0,0,0, .7)';
    }

    function unhighlight(item) {
        item.closest('.file_upload').style.border = 'none';
        if (item.closest('.calc_form')) {
            item.closest('.file_upload').style.backgroundColor = '#ffffff';
        } else  if (item.closest('.hidden-xs')) {
            item.closest('.file_upload').style.backgroundColor = '#F7E7E6';
        } else {
            item.closest('.file_upload').style.backgroundColor = '#ededed';
        }
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => highlight(input), false);
        });
    });

    ['dragleave', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => unhighlight(input), false);
        });
    });

    fileInputs.forEach(input => {
        input.addEventListener('drop', (e) => {
            input.files = e.dataTransfer.files;
            let dots;
            const arr = input.files[0].name.split('.');

            arr[0].length > 6 ? dots = "..." : dots = '.';
            const name = arr[0].substring(0, 6) + dots + arr[1];
            input.previousElementSibling.textContent = name;
            
            if (input.closest('.hidden-xs')) {
                let formData = new FormData();
                [...input.files].forEach(e => {
                    formData.append('file', e);
                });
                postData('assets/server.php', formData)
                    .then(res => {
                        console.log(res);
                    })
                    .catch(() => {
                        console.log('Ошибка отправки изображения');
                    });
            }
        });
    });

};

export default drop; 
