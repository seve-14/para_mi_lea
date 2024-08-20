const loveWords = [
    "un dia novios", "yo se que seras mi lea", "Te quiero", "I want you", "Je te veux", "Ti voglio", "Ich will dich", 
    "欲しがっている", "我想要你", "Я хочу тебя", "Eu quero você", "Σε θέλω",
    "Gusto kita", "Seni istiyorum", "Ek wil jou hê", "Ես ուզում եմ քեզ",
    "Želim te", "Chci tě", "Jeg vil have dig", "Ma tahan sind",
    "Haluan sinua", "მინდა შენი", "Kívánlak", "Aku ingin kamu",
    "Is mian liom tú", "Ti voglio", "Es gribu tevi", "Aš noriu tavęs",
    "Jag vill ha dig", "Chcę cię", "Ik wil jou", "Te vreau",
    "Aloha wau 'oe", "আমি তোমাকে চাই", "Mən səni istəyirəm",
    "Mo fẹ́ ̣ràn", "Anh muốn em", "너를 원해", "Saya mahu kamu", "నాకు నీ మీద ఉంది"
];

function createLoveWord(text) {
    const word = document.createElement('div');
    word.className = 'love-word';
    word.textContent = text;
    word.style.left = `${Math.random() * 100}%`;
    word.style.top = `${Math.random() * 100}%`;
    return word;
}

function animateLoveWords() {
    const container = document.getElementById('love-words-container');
    container.innerHTML = '';
    loveWords.forEach(word => {
        const wordElement = createLoveWord(word);
        container.appendChild(wordElement);
        animateWord(wordElement);
    });
}

function animateWord(wordElement) {
    const duration = 15000 + Math.random() * 10000;
    const keyframes = [
        { transform: `translate(${Math.random() * 100 - 50}%, ${Math.random() * 100 - 50}%) rotate(${Math.random() * 360}deg)`, opacity: 0 },
        { transform: `translate(${Math.random() * 100 - 50}%, ${Math.random() * 100 - 50}%) rotate(${Math.random() * 360}deg)`, opacity: 1, offset: 0.1 },
        { transform: `translate(${Math.random() * 100 - 50}%, ${Math.random() * 100 - 50}%) rotate(${Math.random() * 360}deg)`, opacity: 1, offset: 0.9 },
        { transform: `translate(${Math.random() * 100 - 50}%, ${Math.random() * 100 - 50}%) rotate(${Math.random() * 360}deg)`, opacity: 0 }
    ];
    wordElement.animate(keyframes, {
        duration: duration,
        iterations: Infinity
    });
}

const centerName = document.querySelector('.center-name');

centerName.addEventListener('mouseover', () => {
    centerName.style.transform = 'scale(1.2) rotate(10deg)';
});

centerName.addEventListener('mouseout', () => {
    centerName.style.transform = 'scale(1) rotate(0deg)';
});

animateLoveWords();
setInterval(animateLoveWords, 25000);