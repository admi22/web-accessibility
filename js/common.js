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
    var fontSize = parseInt(document.body.style.fontSize) || 100;
    fontSize += 10;
    document.body.style.fontSize = fontSize + '%';
}

function decreaseFontSize() {
    var fontSize = parseInt(document.body.style.fontSize) || 100;
    fontSize -= 10;
    document.body.style.fontSize = fontSize + '%';
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.font-increase-button')
        .addEventListener('click', increaseFontSize, false);
    document.querySelector('.font-decrease-button')
        .addEventListener('click', decreaseFontSize, false);
}, false);