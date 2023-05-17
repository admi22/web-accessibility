/**
 * Open the current clicked menu and close the other menus
 * @param {object} event - The DOM event
 */
function openMenu(event) {
    event.stopPropagation();
    event.preventDefault();

    var currentDropDownButton = event.target;
    var currentDropDownMenu =
        currentDropDownButton.parentNode.querySelector('.dropdown-menu');
    var isOpen = currentDropDownMenu.classList.contains('show');
    var dropDownMenus =
        document.querySelectorAll('#nav-bar-content .dropdown .dropdown-menu');
    for (var j = 0; j < dropDownMenus.length; j++) {
        dropDownMenus[j].classList.remove('show');
    }

    if (!isOpen) {
        currentDropDownMenu.classList.add('show');
    }
}

/**
 * Toggle the navigation content
 * @param {object} event - The DOM event
 */
function toggleNavigation(event) {
    event.stopPropagation();
    event.preventDefault();

    var content = document.getElementById('nav-bar-content');
    if (content.classList.contains('collapse')) {
        content.classList.remove('collapse');
    } else {
        content.classList.add('collapse');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var dropDownToggles =
        document.querySelectorAll('#nav-bar-content .dropdown-toggle');

        for (var i = 0; i < dropDownToggles.length; i++) {
        dropDownToggles[i].addEventListener('click', openMenu, false);
    }

    document.querySelector('.navbar-toggler')
        .addEventListener('click', toggleNavigation, false);
}, false);


/**
 * Allow user to increase and decrease the global font size
 */

function increaseFontSize() {
    let fontSize = parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue('font-size')) + 2;

    // set font size of html element

    document.documentElement.style.fontSize = fontSize + 'px';
    localStorage.setItem("fontSize", fontSize + 'px');
}

function decreaseFontSize() {

    let fontSize = parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue('font-size')) - 2;

    document.documentElement.style.fontSize = fontSize + 'px';
    localStorage.setItem("fontSize", fontSize + 'px');
}

document.addEventListener('DOMContentLoaded', function() {
    document.body.style.fontSize = localStorage.getItem("fontSize");
    document.querySelector('.font-increase-button')
        .addEventListener('click', increaseFontSize, false);
    document.querySelector('.font-decrease-button')
        .addEventListener('click', decreaseFontSize, false);
}, false);

document.addEventListener('DOMContentLoaded', function() {
    // select all article elements inside the section.news
    var articleElements = document.querySelectorAll('section.news article');
    console.log(articleElements);

    // loop over all article elements
    for (var i = 0; i < articleElements.length; i++) {
        // find the a element inside the article and read the href attribute
        var articleElement = articleElements[i];

        // add a click event listener to the article element
        articleElement.addEventListener('click', function() {
            // find the a element inside the article and read the href attribute
            var linkElement = this.querySelector('a');
            var href = linkElement.getAttribute('href');
            console.log(href);
                    
            // navigate to the href url
            window.location.href = href;
        });
        console.log(articleElement);
    }
}, false);
