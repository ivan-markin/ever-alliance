function importAll(r) {
    r.keys().forEach(r);
}
importAll(require.context('./images/', true, /\.(jpe?g|png|gif|svg|mp4|ico)$/));
importAll(require.context('./fonts/', true, /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/));
import './scss/style.scss';

import Swiper from 'swiper';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper/core';

document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.header__menu-button');
    const menuClose = document.querySelector('.mobile-menu__close');
    const mobileMenuEl = document.querySelector('.mobile-menu');
    const tabs = document.querySelectorAll('.help-with__link');
    const tabsCaptions = document.querySelectorAll('.help-with__title');
    const formButtons = document.querySelectorAll('.form-button');
    const formPopup = document.querySelector('.join-form');
    const closeFormBtn = document.querySelector('.join-form__close');
    
    SwiperCore.use([Navigation, Pagination, Autoplay]);
    const swiper = new Swiper('.swiper', {
        freeMode: true,
        spaceBetween: 25,
        slidesPerView: 'auto',        
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true            
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })    

    function openForm() {
        formPopup?.classList.add('active');
        document.body.style.position = 'fixed';
        document.addEventListener('click', closeFormHelper);
    }

    function closeForm() {
        formPopup?.classList.remove('active');
        document.body.style.position = 'static';
        document.removeEventListener('click', closeFormHelper);
    }

    function closeFormHelper(event) {
        event.target.classList.contains('join-form') && closeForm();
    }
    
    function mobileMenuHandler() {
        mobileMenuEl?.classList.toggle('active');
        document.body.classList.toggle('fixed');
    }

    function tabHandler(event) {
        tabs.forEach(tab => tab.classList.remove('active'));        
        event.target.classList.add('active');
        tabsCaptions.forEach(caption => {            
            caption.classList.remove('active');
            caption.id == `${event.target.id}Content` && caption.classList.add('active');
        });
    }   

    tabs?.forEach(tab => {
        tab.addEventListener('click', tabHandler);
    });
    formButtons?.forEach(button => {
        button.addEventListener('click', openForm);
    });
    closeFormBtn?.addEventListener('click', closeForm);
    menuButton?.addEventListener('click', mobileMenuHandler);
    menuClose?.addEventListener('click', mobileMenuHandler);    
});