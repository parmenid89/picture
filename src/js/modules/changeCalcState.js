const changeCalcState = (state) => {
    const sizePicture = document.querySelector('#size'),
          materialPicture = document.querySelector('#material'),
          optionsPicture = document.querySelector('#options'),
          promoPicture = document.querySelector('.promocode');


    function bindActionToElems(event, elem, prop) {
            elem.addEventListener(event, () => {
                switch(elem.nodeName) {
                    case 'INPUT':
                        state[prop] = elem.value;
                        break;
                    case 'SELECT':
                        state[prop] = elem.value;
                        break;
                }
                console.log(state);
            });

    }

    bindActionToElems('change', sizePicture, 'size');
    bindActionToElems('input', materialPicture, 'material');
    bindActionToElems('input', optionsPicture, 'options');
    bindActionToElems('change', promoPicture, 'promocode');
};

export default changeCalcState;