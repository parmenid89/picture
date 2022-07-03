import modals from './modules/modals';
import sliders from './modules/sliders';
import forms from './modules/forms';
import mask from './modules/mask';
import checkTextInputs from './modules/checkTextInputs';
import showMoreStiles from './modules/showMoreStiles';
import calc from './modules/calc';
import changeCalcState from './modules/changeCalcState';
import filter from './modules/filter';
import pictureSize from './modules/pictureSize';
import accordion from './modules/accordion';
import burger from './modules/burger';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let state = {};

    changeCalcState(state);    
    modals();
    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical');
    forms(state);
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    mask('[name="phone"]');
    checkTextInputs('[name="message"]');
    showMoreStiles('.button-styles', '#styles .row');
    calc('#size', '#material', '#options', '.promocode', '.calc-price', state);
    filter();
    pictureSize('.sizes-block');
    accordion('.accordion-heading');
    burger('.burger-menu', '.burger');
});

