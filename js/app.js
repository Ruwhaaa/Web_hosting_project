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

(function fixedMenu() {

    var scrollY = function () {
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
        return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
    }
    
    window.makeSticky = function (element) {

        var rect,
            top,
            constraintRect,
            constraintBottom
        var offset = parseInt(element.getAttribute('data-offset') || 0, 10);
        var constraint = document.body;
        if (element.getAttribute('data-constraint')){
            constraint = document.querySelector(element.getAttribute('data-constraint'));
        }
        var fake = document.createElement('div');
        
        var setValues = function () {
            rect = element.getBoundingClientRect();
            constraintRect = constraint.getBoundingClientRect();
            constraintBottom = constraintRect.top + scrollY() + constraintRect.height - offset - rect.height;
            top = rect.top + scrollY();
            fake.style.width = rect.width + "px";
            fake.style.height= rect.height + "px";
        }
        
        var onScroll = function () {
            if (scrollY() > constraintBottom && element.style.position != 'absolute') {
                element.style.position = 'absolute';
                element.style.bottom = '0';
                element.style.top = 'auto';
            } else if (scrollY() > top - offset && scrollY() < constraintBottom && element.style.position != 'fixed') {
                element.classList.add('fixed');
                element.style.position = 'fixed';
                element.style.top = offset + "px";
                element.style.bottom = 'auto';
                element.style.width = rect.width + "px";
                element.parentNode.insertBefore(fake, element);
            } else if (scrollY() < top - offset && element.style.position != 'static') {
                element.classList.remove('fixed');
                element.style.position = 'static';
                if (element.parentNode.contains(fake)) {
                    element.parentNode.removeChild(fake);
                }
            }
        }
        
        var onResize = function () {
            element.style.width = "auto";
            element.classList.remove('fixed');
            element.style.position = "static";
            fake.style.display = "none";
            setValues();
            fake.style.display = "block";
            onScroll();
        }
        window.addEventListener('scroll', onScroll);
        window.addEventListener('resize', onResize);
        setValues();
    }

    var elements = document.querySelectorAll('header');
    for (var i = 0; i < elements.length; i++) {
        makeSticky(elements[i]);
    }  
})()