(function spoiler() {
    let elements = document.querySelectorAll('.spoiler');

    let createSpoilerButton = function (element) {
        let span = document.createElement('span');
        span.className = 'spoiler-content';
        span.innerHTML = element.innerHTML;
        let button = document.createElement('button');
        button.textContent = 'Afficher le spoiler';
        element.innerHTML = '';
        element.appendChild(button);
        element.appendChild(span);

        button.addEventListener('click', function () {
            button.parentNode.removeChild(button);
            span.classList.add('visible');
        })
    }
    for(let i = 0; i < elements.length; i++){
        createSpoilerButton(elements[i]);
    }
})();