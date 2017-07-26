(function init() {
    'use strict';

    class ProgressBar extends HTMLElement {
        constructor() {
            super();
            this._initShadowContent();
        }

        _initShadowContent() {
            this.attachShadow({mode: 'open'});
        }

        animate() {
            const ANIMATE_LENGTH = 500, INCREMENT_PERCENT = 0.2;
            const main = this.shadowRoot;
            const progressWrapper = main.querySelector('.progress-wrap');
            const progressBar = main.querySelector('.progress-bar');

            let idInterval = setInterval(() => {
                let progressPercent = this.getAttribute('progress') / 100;
                if (progressPercent >= 1) {
                    clearInterval(idInterval);
                    progressBar.setAttribute('style', `width: 0px; height: 50px`);
                } else {
                    console.log(progressPercent);
                    let getProgressWrapWidth = progressWrapper.offsetWidth;
                    let progressTotal = (progressPercent + INCREMENT_PERCENT) * getProgressWrapWidth;
                    progressBar.setAttribute('style', `width: ${progressTotal}px; height: 50px`);
                    this.setAttribute('progress', (progressPercent + INCREMENT_PERCENT) * 100);
                }
            }, ANIMATE_LENGTH);
        }
    }

    window.customElements.define('progress-bar', ProgressBar);

    const progressBarTemplate = document.querySelector('#progress-bar-template');
    const customBarElement = document.querySelector('#custom-bar-element');
    const node = document.importNode(progressBarTemplate.content, true);
    customBarElement.shadowRoot.appendChild(node);
    customBarElement.animate();
})();
