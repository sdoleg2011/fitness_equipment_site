﻿const button = document.querySelector('.burger-button');

button.addEventListener('click', () => {
    document.querySelector(".equipments_list").classList.toggle("show-menu");
    document.querySelector(".header_logo").classList.toggle("show");
});