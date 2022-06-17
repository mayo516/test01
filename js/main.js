const backtotop = document.getElementById('backtotop');

function checkScroll() {
    let pageYOffset = window.pageYOffset;

    if (pageYOffset !== 0) {
        backtotop.classList.add('show');
    } else {
        backtotop.classList.remove('show');
    }
}

function  moveBackToTop() {
    if (window.pageYOffset > 0) {
        window.scrollTo({top:0 , behavior:"smooth"});
    }

}

window.addEventListener('scroll', checkScroll);
backtotop.addEventListener('click', moveBackToTop);

function transformprev(event) {
    const slidePrev = event.target;
    const slideNext = slidePrev.nextElementSibling;

    const classList = slidePrev.parentElement.parentElement.nextElementSibling;
    let activeLi = classList.getAttribute('data-position');
    const liList =classList.getElementsByTagName('li');
}



const slidePrevList =  document.getElementsByClassName('slide-prev');

for (let i = 0; i < slidePrevList.length; i++ ) {
    let classList = slidePrevList[i].parentElement.parentElement.nextElementSibling;
    let liList = classList.getElementsByTagName('li');

    if (classList.clientWidth < (liList.length *250) ) {
        slidePrevList[i].classList.add('slide-prev-hover');
        slidePrevList[i].addEventListener('click', transformprev);
    } else {
        const arrowContainer = slidePrevList[i].parentNode;
        arrowContainer.removeChild(slidePrevList[i].nextElementSibling);
        arrowContainer.removeChild(slidePrevList[i]);
    }

}