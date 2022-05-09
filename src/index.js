import _ from 'lodash';
import './styles.css';
import {init} from './init.js';
import {displayMenu} from './menu.js';
import {displayContacts} from './contact'

init();

let content = document.getElementById('content');

function displayNav() {
    const buttonBox = document.createElement('div');
    buttonBox.id = 'buttonbox';
    content.appendChild(buttonBox);

    //Create home button
    const homeButton = document.createElement('button');
    homeButton.innerText = 'Home';
    homeButton.id = 'homebtn';
    homeButton.addEventListener('click', init);
    buttonBox.appendChild(homeButton);

    //Create contacts buton.
    const contactButton = document.createElement('button');
    contactButton.innerText = 'Contact';
    contactButton.id = 'contactbtn';
    contactButton.addEventListener('click', displayContacts);
    buttonBox.appendChild(contactButton);

    //Create menu button.
    const menuButton = document.createElement('button');
    menuButton.innerText = 'Menu';
    menuButton.id = 'menubtn';
    menuButton.addEventListener('click', displayMenu);
    buttonBox.appendChild(menuButton);



    //Add animation for nav mouseover.
    buttonBox.addEventListener('mouseover', () => {
        console.log('moused');
        homeButton.style.left = '-50px';
        menuButton.style.bottom = '70px';
        contactButton.style.right = '-50px';
    })
    buttonBox.addEventListener('mouseleave', () => {
        console.log('moused');
        homeButton.style.left = '0px';
        menuButton.style.bottom = '0px';
        contactButton.style.right = '0px';
    })
}

displayNav();

