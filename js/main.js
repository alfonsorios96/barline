(function init() {
    'use strict';

    const initButtons = () => {
      document.getElementById('demo').addEventListener('click', () => {
          animate();
      });
    };

    const getRandomInteger = (max, min) => {
        return (Math.floor(Math.random() * (max - min + 1)) + min);
    };

    const getRandomSeconds = () => {
        return (1000 * getRandomInteger(5,1));
    };

    const animate = () => {
        const barline = document.getElementById('barline');
        let porcentageBarlineString = '0%';
        let increment = 0;
        while(getValueFromPorcentage(porcentageBarlineString) <= 100) {
            increment = getRandomInteger(20,0);
            porcentageBarlineString = (getValueFromPorcentage(porcentageBarlineString) + increment).toString() + '%';
            delay(porcentageBarlineString);
            console.log(porcentageBarlineString);
        }
        barline.style.width = '0%';
    };

    const getValueFromPorcentage = (porcentage) => {
        let valueString = porcentage.substr(0, porcentage.length - 1);
        return Number(valueString);
    };

    const delay = (porcentage) => {
        setTimeout(() => {
            document.getElementById('barline').style.width = porcentage;
            console.log(porcentage);
        },getRandomSeconds());
    };

    initButtons();

})();
