export {displayMenu, addMenuItem, addHeader};

import cave from '../dist/images/thecave.jpg';
import hangmeat from '../dist/images/hangmeat.jpg';
import ashmeat from '../dist/images/ashmeat.jpg';
import rockmeat from '../dist/images/rockmeat.jpg';
import spinmeat from '../dist/images/spinmeat.jpg';
import berries from '../dist/images/berries.jpg';

function displayMenu() {
    const mainBox = document.getElementById('mainbox');
    mainBox.innerText = null;

    const imageBox = document.createElement('div');
    imageBox.id = 'imagebox';
    mainBox.appendChild(imageBox);

    const mainHeading = document.createElement('h1');
    mainHeading.id = 'mainheading';
    mainHeading.innerText = 'Menu';
    imageBox.appendChild(mainHeading);

    const mainImage = document.createElement('img');
    mainImage.id = 'mainimage';
    mainImage.src = cave;
    imageBox.appendChild(mainImage);

    addHeader('Breakfast');
    addMenuItem('HANGMEAT', 'A breakfast classic at The Cave. Men have long atoned for their crimes through hanging, and lesser animals should be no different.',
                hangmeat, 15);

    addHeader('Lunch');
    addMenuItem('ASHMEAT', "With this dish we've brought the meat closer to the fire, so that you can be closer to the flavour.",
                ashmeat, 13);

    
    addMenuItem('ROCKMEAT', "Like champagne, popsicles, and chocolate chip cookies, mankind invented this entree by accident four million years ago.",
                rockmeat, 20);
    
    addHeader('Dinner');
    addMenuItem('SPINMEAT', "Not to be confused with the meatspin, an aged meat with an acquired taste.",
                spinmeat, 17);
                
    addHeader('Vegan');
    addMenuItem('THE GATHERER', "A platter of freshly picked wild berries. Lightly tossed in a handwoven basket and served fresh.",
                berries, 9);
    
    addHeader('Shells?');
    const shellText = document.createElement('p');
    shellText.innerText = "In the prehistoric world, shells were often used as an ancient form of currency. At The Cave, you'll have the opportunity to exchange modern cash for our genuine locally-sourced clam shells.";
    mainBox.appendChild(shellText);

    const italics = document.createElement('p');
    italics.innerText = 'Shells™ are only able to be purchased in multiples of six. Unspent Shells™ may be used to purchase rewards in our Neanderthal Nook.';
    italics.id = 'italics';
    mainBox.appendChild(italics);
}

function addMenuItem(name, description, image, price) {
    const mainBox = document.getElementById('mainbox');

    const menuCard = document.createElement('div');
    menuCard.classList.add('menucard');
    mainBox.appendChild(menuCard);

    const itemName = document.createElement('h2');
    itemName.innerText = name;
    menuCard.appendChild(itemName);

    const itemDesc = document.createElement('p');
    itemDesc.innerText = description;
    menuCard.appendChild(itemDesc);

    if (image) {
        const photo = document.createElement('img');
        photo.src = image;
        menuCard.appendChild(photo);
    }


    if (price) {
        const itemPrice = document.createElement('h3');
        itemPrice.innerText = `${price} shells`;
        menuCard.appendChild(itemPrice);
    }
    
}

function addHeader(name) {
    const mainBox = document.getElementById('mainbox');

    const header = document.createElement('h2');
    header.innerText = name;
    mainBox.appendChild(header);
}