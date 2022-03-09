function go() {
    const floor = document.querySelector('div.floor');
    const hireAvatar = floor.querySelector('span.hire');
    const pizzaNFT = floor.querySelector('span.pizzaNFT');
    hireAvatar.prepend(createIMG('assets/images/avatar.png'));
    pizzaNFT.prepend(createIMG('assets/images/slice-of-pizza.png'))

    floor.addEventListener('click', (e) => {
        const divFloor = e.target.nextElementSibling;
        divFloor.classList.toggle('hidden');
    });
}
go();

function createIMG(image) {
    const img = document.createElement('img');
    img.src = image;
    return img;
}