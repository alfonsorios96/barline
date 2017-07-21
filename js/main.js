(function init() {
    'use strict';

    let stopLoadingFlag = false;

    const initButtons = () => {
      document.getElementById('demo').addEventListener('click', () => {
          animate();
      });
      document.getElementById('stop').addEventListener('click', () => {
        stopLoading();
      });
    };

    const getRandomInteger = (max, min) => {
        return (Math.floor(Math.random() * (max - min + 1)) + min);
    };

    const animate = () => {
        const barline = document.getElementById('barline');
        let width = 1;
        let id = setInterval(() => {
            if (width >= 100) {
                clearInterval(id);
                barline.style.width = 1;
            } else {
                stopLoadingFlag ? width++ : width += getRandomInteger(20,0);
                barline.style.width = width + '%';
            }
        }, 100);
    };

    const stopLoading = () => {
        stopLoadingFlag = true;
    };

    initButtons();

})();
