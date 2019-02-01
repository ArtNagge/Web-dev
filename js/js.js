'use strict';

// прошу прощения за довольно не чистый код =)
// но вроде читается!

window.beforeCode  = document.querySelector('.before-code');
window.afterCode   = document.querySelector('.after-code');

let show = (item) => item.classList.remove('hide');
let hide = (item, method) => {
    if (method === 'right') {
        item.classList.add('hide');
        item.classList.add('right');
    }
    if (method === 'left') {
        item.classList.add('hide');
        item.classList.add('left');
    }
    if (method === 'fadeOut') {
        item.classList.add('hide');
        item.classList.add('fadeOut');
    }
};
let back = () => window.history.back();
let link = (link) => location.href = link;

if (document.body.className === 'mainBody') {
    let mainSection = document.querySelector('.mainSection'),
        webDev      = document.querySelector('#web-dev'),
        thisSience  = document.querySelector('#this-sience'),
        btn         = document.querySelector('#btn'),
        body        = document.querySelector('body');

    document.addEventListener('mousemove', function (evt) {
        let xD = parseInt(evt.clientX / 100);
        let yD = parseInt(evt.clientY / 100);

        let xS = parseInt(evt.clientX / 70);
        let yS = parseInt(evt.clientY / 70);

        webDev.style.transform = 'translate('+xD+'px, '+yD+'px)';
        thisSience.style.transform = 'translate('+xS+'px, '+yS+'px)';
        beforeCode.style.transform = 'translate('+(xD/-5)+'px, '+(yD/-5)+'px)';
        afterCode.style.transform = 'translate('+(xD/-5)+'px, '+(yD/-5)+'px)';
    });
    btn.addEventListener('click', function (evt) {
        evt.preventDefault();
        setTimeout(function () {
            hide(beforeCode, 'left');
            hide(afterCode, 'right');
            hide(webDev, 'fadeOut');
            hide(thisSience, 'fadeOut');
            hide(btn, 'fadeOut');
        }, 500);
        setTimeout(function () {
            mainSection.innerHTML = '';
            location.href = '/html-page/tech';
        }, 1200);
    });
}
if (document.body.className === 'techBody') {

    let mainContent = document.querySelector('.mainContent');
    document.addEventListener('DOMContentLoaded', function () {
        setTimeout(function () {
            show(mainContent);
            show(afterCode);
            show(beforeCode);
        }, 300);
    });

    let headerNav = document.querySelector('.mainHeaderNav');
    for (let item of headerNav.children) {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            let getAttr = this.getAttribute('data-link');
            hide(beforeCode, 'left');
            hide(afterCode, 'right');
            hide(mainContent, 'fadeOut');
            setTimeout(function () {
                location = getAttr;
            }, 400)
        })
    }

    document.addEventListener('mousemove', function (evt) {
        let xD = parseInt(evt.clientX / 100);
        let yD = parseInt(evt.clientY / 100);

        beforeCode.style.transform = 'translate('+(xD/-5)+'px, '+(yD/-5)+'px)';
        afterCode.style.transform = 'translate('+(xD/-5)+'px, '+(yD/-5)+'px)';
    });
}

const linkAnchor = [].slice.call(document.querySelectorAll('a[href*="#"]')),
      scrollTime = 700,
      framesCount = 120;

linkAnchor.forEach(function(item) {
    item.addEventListener('click', function(evt) {
        evt.preventDefault();
        let cY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top;

        let scroll = setInterval(function() {
            let scrollBy = cY / framesCount;
            if(scrollBy > window.pageYOffset - cY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
                window.scrollBy(0, scrollBy);
            } else {
                window.scrollTo(0, cY);
                clearInterval(scroll);
            }
        }, scrollTime / framesCount);
    });
});