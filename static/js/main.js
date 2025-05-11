"use strict";

var mobileMenuLink = document.querySelectorAll('.mobile-menu-item');
var menuSwitcher = document.querySelector('.mobile-nav-switcher');
var menu = document.querySelector('.mobile-menu');
var header = document.querySelector('.header');
mobileMenuLink.forEach(function (link) {
  link.addEventListener('click', function () {
    menu.classList.remove('active');
    header.classList.remove('open');
    menu.classList.add('closed');
  });
});
menuSwitcher.addEventListener('click', function () {
  if (menu.classList.contains('active')) {
    menu.classList.remove('active');
    menu.classList.add('closed');
    header.classList.remove('open');
  } else {
    menu.classList.add('active');
    header.classList.add('open');
  }
});
var popup = document.querySelector('.first-popup');
var backdrop = document.querySelector('#firstPopupBackdrop');
var buttons = document.querySelectorAll('.subscribe-button');
buttons.forEach(function (button) {
  button.addEventListener('click', function () {
    if (popup.classList.contains('active')) {
      // popup.classList.remove('active');
      // backdrop.classList.remove('active');
    } else {
      popup.classList.add('active');
      backdrop.classList.add('active');
    }
  });
  popup?.querySelector('.default-popup__close')?.addEventListener('click', function () {
    popup.classList.remove('active');
    backdrop.classList.remove('active');
  });
  backdrop?.addEventListener('click', function () {
    popup.classList.remove('active');
    backdrop.classList.remove('active');
  });
});

var toggleAccord = function toggleAccord() {
  var accordToggleElements = document.querySelectorAll('.questions-answers__item');
  accordToggleElements.forEach(function (item) {
    item.addEventListener('click', function () {
      if (item.classList.contains('questions-answers__item--open')) {
        item.classList.remove('questions-answers__item--open');
      } else {
        item.classList.add('questions-answers__item--open');
      }
    });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  if (window.loaction.hash === 'subscribe') {
    console.log('------ subscribe ------ ');
  }
})

toggleAccord();

if ($) {
  $(window).on('load', function() {
    $('#stats').waypoint({
      handler: function() {
        $('.num').counterUp({delay: 10, time: 10000})
      }
      
    })
  })

  $(document).ready(function () {
    if ($('.gallery-slider')) {
      $('.gallery-slider').owlCarousel({
        items: 3,
        dots: false,
        margin: 30,
        responsive: {
          0: {
            items: 1
          },
          720: {
            items: 2
          },
          1060: {
            items: 3
          }
        }
      });
    }

  });
}
