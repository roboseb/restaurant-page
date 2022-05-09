function init() {
    const content = document.getElementById('content');
    let mainBox;

    if (!document.getElementById('mainbox')) {
        mainBox = document.createElement('div');
        mainBox.id = 'mainbox';
        content.appendChild(mainBox);
  
    } else {
        mainBox = document.getElementById('mainbox');
        mainBox.innerText = null;

    }
    
    const imageBox = document.createElement('div');
    imageBox.id = 'imagebox';
    mainBox.appendChild(imageBox);

    const mainHeading = document.createElement('h1');
    mainHeading.id = 'mainheading';
    mainHeading.innerText = 'The Cave';
    imageBox.appendChild(mainHeading);

    const mainImage = document.createElement('img');
    mainImage.id = 'mainimage';
    mainImage.src = '../src/thecave.jpg';
    imageBox.appendChild(mainImage);

    const intro = document.createElement('p');
    intro.id = 'intro';
    intro.innerText = 'The cave has been reviewed as, "The epitomy of fine dining in our fair city", "A cut above the rest, and by a mile", and, "A preservation of a more elegant, and simultaneously more primal era in our beautiful history."' +
                        "\n\n Man was once relegated to fuel himself within caves of mother nature's design. Now, man has taken control of the world around him and shaped it as he saw fit, in this case returning us to the beauty of eons ago.";
    mainBox.appendChild(intro);

    const gallery = document.createElement('div');
    gallery.id = 'gallery';
    mainBox.appendChild(gallery);

    //Animate gallery images, growing selected and shrinking others.
    for (let i = 1; i < 9; i++) {
        const image = document.createElement('img');
        image.src = `../src/gallery${i}.jpg`;
        image.id = `gallery${i}`
        gallery.appendChild(image);
        image.addEventListener('mouseover', () => {
            image.style.height = '200px';
            for (let j = 1; j < 9; j++) {
                if (j !== i) {
                    document.getElementById(`gallery${j}`).style.height = '75px';
                }
            }
        });
        image.addEventListener('mouseleave', () => {
            for (let j = 1; j < 9; j++) {
                document.getElementById(`gallery${j}`).style.height = '100px';
            }
        });
    }

}

export {init};

