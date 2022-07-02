let checkTextInputs = (selector) => {
    let textInputs = document.querySelectorAll(selector);


    textInputs.forEach(input => {
        // input.addEventListener('keypress', function(e) {
        //     if (e.key.match(/[^а-яё 0-9]/ig)) {
        //         e.preventDefault();
        //     }
        // });
        input.addEventListener('input', function() {
            input.value = input.value.replace(/[^а-яё 0-9]/ig, '');
        });
    });
};

export default checkTextInputs;