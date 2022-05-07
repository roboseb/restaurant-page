export {displayMenu};

function displayMenu() {
    const content = document.getElementById('content');
    content.innerText = null;
    console.log('switchwed')

    const imageBox = document.createElement('div');
    imageBox.id = 'imagebox';
    content.appendChild(imageBox);

    const mainHeading = document.createElement('h1');
    mainHeading.id = 'mainheading';
    mainHeading.innerText = 'Menu';
    imageBox.appendChild(mainHeading);

    const mainImage = document.createElement('img');
    mainImage.id = 'mainimage';
    mainImage.src = '../src/thecave.jpg';
    imageBox.appendChild(mainImage);

    const intro = document.createElement('p');
    intro.id = 'intro';
    intro.innerText = 'The cave has been reviewed as, "The epitomy of fine dining in our fair city", "A cut above the rest, and by a mile", and, "A preservation of a more elegant, and simultaneously more primal era in our beautiful history."' +
                        "\n\n Man was once relegated to fuel himself within caves of mother nature's design. Now, man has taken control of the world around him and shaped it as he saw fit, in this case returning us to the beauty of eons ago.";
    content.appendChild(intro);
}