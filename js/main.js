const leftItems = document.querySelectorAll('.banner-left li');
const rightItems = document.querySelectorAll('.banner-right li');
leftItems[0].classList.add('active');
rightItems[0].classList.add('active');
leftItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        // Usuwamy active ze wszystkich w banner-right
        rightItems.forEach(el => el.classList.remove('active'));
        leftItems.forEach(el => el.classList.remove('active'));

        // Dodajemy active do odpowiadającego elementu
        rightItems[index].classList.add('active');
        leftItems[index].classList.add('active');
    });
});



