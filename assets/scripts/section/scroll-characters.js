const characters = [
    {
        src: './assets/images/characters/Высший эльф.png',
        name: 'High Elf'
    },
    {
        src: './assets/images/characters/dead knight.png',
        name: 'Dead Knight'
    },
    {
        src: './assets/images/characters/Гном.png',
        name: 'Dwarf'
    },
    {
        src: './assets/images/characters/Человек.png',
        name: 'Human'
    },
    {
        src: './assets/images/characters/Маг.png',
        name: 'Mage'
    }
    // Добавьте другие персонажи здесь
];

let currentIndex = 0;
let isCardShifted = false;

const characterImg = document.getElementById('character-img');
const characterName = document.getElementById('character-name');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const card = document.querySelector('.cards');
const progressContainer = document.querySelector('.progress-container'); // Добавляем выбор блока прогресса
const progressbar = document.querySelector(".progress");

function updateCharacter(index) {
    // Плавно скрываем элементы
    characterImg.style.opacity = '0';
    characterImg.style.transform = 'scale(0.5)';
    characterName.style.opacity = '0';
    characterName.style.transform = 'translateY(20px)';

    setTimeout(() => {
        characterImg.src = characters[index].src;
        characterName.textContent = characters[index].name;

        // Плавно показываем элементы
        characterImg.style.opacity = '1';
        characterImg.style.transform = 'scale(1)';
        characterName.style.opacity = '1';
        characterName.style.transform = 'translateY(0)';
    }, 200); 
}

leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? characters.length - 1 : currentIndex - 1;
    updateCharacter(currentIndex);
});

rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex === characters.length - 1) ? 0 : currentIndex + 1;
    updateCharacter(currentIndex);
});

// Обработчик для клика на имени персонажа
characterName.addEventListener('click', () => {
    if (!isCardShifted) {
        card.style.transform = 'translateX(-370px)';
        leftArrow.style.display = 'none';
        rightArrow.style.display = 'none';
        progressContainer.style.display = 'flex'; // Показываем блок прогресса
    } else {
        card.style.transform = 'translateX(0)';
        leftArrow.style.display = 'flex';
        rightArrow.style.display = 'flex';
        progressContainer.style.display = 'none'; // Скрываем блок прогресса
    }
    isCardShifted = !isCardShifted;
    const changeProgress = (progress) => {
        progressbar.style.width = `${progress}%`;
    };
    setTimeout(() => changeProgress(45), 800);
});

