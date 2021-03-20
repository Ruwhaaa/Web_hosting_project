var elements = document.querySelectorAll('.spoiler')

var createSpoilerButton = function (element) {
    var span = document.createElement('span')
    span.className = 'spoiler-content'
    span.innerHTML = element.innerHTML
    var button = document.createElement('button')
    button.textContent = 'Afficher le spoiler'
    element.innerHTML = ''
    element.appendChild(button)
    element.appendChild(span)

    button.addEventListener('click', function () {
        button.parentNode.removeChild(button)
        span.classList.add('visible')
    })
}

for(var i = 0; i < elements.length; i++){
    createSpoilerButton(elements[i])
}