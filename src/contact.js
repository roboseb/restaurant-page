import {addMenuItem} from './menu.js';
import { addHeader } from './menu.js';
export {displayContacts}

import cave from '../dist/images/thecave.jpg';
import caceres from '../dist/images/caceres.jpg';

function displayContacts() {
    const mainBox = document.getElementById('mainbox');
    mainBox.innerText = null;

    const imageBox = document.createElement('div');
    imageBox.id = 'imagebox';
    mainBox.appendChild(imageBox);

    const mainHeading = document.createElement('h1');
    mainHeading.id = 'mainheading';
    mainHeading.innerText = 'Contact Us';
    imageBox.appendChild(mainHeading);

    const mainImage = document.createElement('img');
    mainImage.id = 'mainimage';
    mainImage.src = cave;
    imageBox.appendChild(mainImage);


    addHeader('Locations');
    addMenuItem('Cáceres, Spain', 'Located just off calle Nunez, in the vibrant heart of the city. Parking available adjacent to the penitentiary.',
                caceres);
    addMenuItem('Hours', 'Monday-Sunday during daylight hours. Closed during famine season.');

    addHeader('Contacts');
    addMenuItem('Phone', '3461 THE-CAVE');
    addMenuItem('Fax', '34 615 22 22 22');
    addMenuItem('Email', 'theoneandonlycavecaceresespana@cavecaceres.football \n\nPlease refrain from sending photos of your own meat. We already have many beautiful photos on our website.')
}