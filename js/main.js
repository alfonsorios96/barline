(function init() {
    'use strict';

    /**
     * @description
     * 1 - Random progress
     * 2 - Waiting stop
     * 3 - Interrumped loading
     * @type {number}
     */
    let loadingStatus = 1;
    const FULL_BAR = 100;

    /**
     * @description Add event listeners to buttons.
     */
    const initButtons = () => {
      document.getElementById('demo').addEventListener('click', () => {
          animate();
      });
      document.getElementById('stop').addEventListener('click', () => {
          loadingStatus = 2;
      });
      document.getElementById('block').addEventListener('click', () => {
          loadingStatus = 3;
      });
    };

    /**
     * @description Gets a random integer
     * @param max - Max number posible
     * @param min - Min number posible
     * @returns {number} - random number
     */
    const getRandomInteger = (max, min) => {
        return (Math.floor(Math.random() * (max - min + 1)) + min);
    };

    /**
     * @description Controller of the progressive bar
     */
    const animate = () => {
        const barline = document.getElementById('barline');
        let width = 1;
        let id = setInterval(() => {
            if (width >= FULL_BAR) {
                clearInterval(id);
                barline.style.width = 1;
                loadingStatus = 1;
            } else {
                switch (loadingStatus){
                    case 1:
                        width += getRandomInteger(5,0);
                        break;
                    case 2:
                        width += 20;
                        break;
                    case 3:
                        if (width >= 90 && width < 100){
                            width = 96;
                        } else {
                            width += getRandomInteger(5,0);
                        }
                        break;
                }
                barline.style.width = width + '%';
            }
        }, 200);
    };

    initButtons();

})();
