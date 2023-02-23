//&=========== Zone de jeu ================
// Lorsque la partie est lancée impossible de changer de nombre de cartes, du coup le tableau Highscore n'a aucun intéret car il faut recharger la page et donc ca supprime les scores
// Créer une fonction qui va supprimer le innerHTML puis appeler la function choissie afficherXX() pour la remplacer
function afficher36() {
    if(state.gameStarted) {
        console.log("La partie est lancée");
        generateGame36();
    }
    else if(selectors.board.classList.contains('flipped')) {
        selectors.board.classList.remove('flipped'); 
    }
    else {
        console.log("La partie n'a pas encore commencé");
        generateGame36();
    }

}


function afficher20() {
    if(state.gameStarted) {
        console.log("La partie est lancée");
        generateGame20();
    }
    else {
        console.log("La partie n'a pas encore commencé");
        generateGame20();
    }   
}

function afficher16() {
    if(state.gameStarted) {
        console.log("La partie est lancée");
        generateGame();
    }
    else {
        console.log("La partie n'a pas encore commencé");
        generateGame();
    }   
}


const selectors = {
    boardContainer: document.querySelector('.board-container'),
    board: document.querySelector('.board'),
    moves: document.querySelector('.moves'),
    timer: document.querySelector('.timer'),
    start: document.querySelector('button'),
    win: document.querySelector('.win')
}

const state = {
    gameStarted: false,
    flippedCards: 0,
    totalFlips: 0,
    totalTime: 0,
    loop: null,
    finish: false
    
}
// let finish = false;

const shuffle = array => {
    const clonedArray = [...array];

    for (let index = clonedArray.length - 1; index > 0; index--) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        const original = clonedArray[index];

        clonedArray[index] = clonedArray[randomIndex];
        clonedArray[randomIndex] = original;
    }
    return clonedArray;
}

const pickRandom = (array, items) => {
    const clonedArray = [...array];
    const randomPicks = [];

    for (let index = 0; index < items; index++) {
        const randomIndex = Math.floor(Math.random() * clonedArray.length);
        
        randomPicks.push(clonedArray[randomIndex]);
        clonedArray.splice(randomIndex, 1);
    }

    return randomPicks;
}


function generateGame() {
    const board = document.getElementsByClassName('board');
    const btnRecommencer = document.getElementById('btnRecommencer');
    if(board.length > 0) {
        board[0].remove();
        state.gameStarted = false;
        state.totalFlips = 0;
        state.totalTime = 0;
        clearInterval(state.loop);
        selectors.boardContainer.classList.remove('flipped');  
    }
    //Si la partie est terminée cachée les élements lorsqu'une partie est relancée
    if(state.finish == true){
        console.log('ici');
        btnRecommencer.classList.add('hidden');
        state.finish = false;
    }    

    let game = document.getElementById('game');
    game.classList.remove('hidden');
    game.classList.remove('top');
    const emojis = ['🪥', '🪒', '🚿', '🧻', '📱', '💊', '🚽', '🧼', '✏️', '💡','🥼','👓','👞','🩺','👩🏼‍⚕️','📺','💳','👔']
    const picks = pickRandom(emojis, (4 * 4) / 2);
    
    const items = shuffle([...picks, ...picks])
    //Définir la taille du plateau et le générer
    // createNode
    const cards =  document.createElement('div');

        cards.innerHTML = `<div class="board" data-dimension="6" style="grid-template-columns: repeat(${4}, auto)">
            ${items.map(item => `
                <div class="card">
                    <div class="card-front"></div>
                    <div class="card-back">${item}</div>
                </div>
            `).join('')}
       </div>`

    let boardId = document.getElementById('board');
    boardId.insertBefore(cards, boardId.childNodes[0]);
}

function generateGame20() {
    const board = document.getElementsByClassName('board');
    const btnRecommencer = document.getElementById('btnRecommencer');
    if(board.length > 0) {
        board[0].remove();
        state.gameStarted = false;
        state.totalFlips = 0;
        state.totalTime = 0;
        clearInterval(state.loop);
        selectors.boardContainer.classList.remove('flipped');  
    }
    //Si la partie est terminée cachée les élements lorsqu'une partie est relancée
    if(state.finish == true){
        console.log('ici');
        btnRecommencer.classList.add('hidden');
        state.finish = false;
    }    

    let game = document.getElementById('game');
    game.classList.remove('hidden');
    game.classList.remove('top');

    const emojis = ['🪥', '🪒', '🚿', '🧻', '📱', '💊', '🚽', '🧼', '✏️', '💡','🥼','👓','👞','🩺','👩🏼‍⚕️','📺','💳','👔']
    const picks = pickRandom(emojis, (5 * 4) / 2);

    const items = shuffle([...picks, ...picks])
    //Définir la taille du plateau et le générer
    // createNode
    const cards =  document.createElement('div');
        cards.innerHTML = `<div class="board" data-dimension="6" style="grid-template-columns: repeat(${5}, auto)">
            ${items.map(item => `
                <div class="card">
                    <div class="card-front"></div>
                    <div class="card-back">${item}</div>
                </div>
            `).join('')}
       </div>`

    let boardId = document.getElementById('board');
    boardId.insertBefore(cards, boardId.childNodes[0]);
}

function generateGame36() {
    const board = document.getElementsByClassName('board');
    const btnRecommencer = document.getElementById('btnRecommencer');
    if(board.length > 0) {
        board[0].remove();
        state.gameStarted = false;
        state.totalFlips = 0;
        state.totalTime = 0;
        clearInterval(state.loop);
        selectors.boardContainer.classList.remove('flipped');  
        
    }
    //Si la partie est terminée cachée les élements lorsqu'une partie est relancée
    if(state.finish == true){
        console.log('ici');
        btnRecommencer.classList.add('hidden');
        state.finish = false;
    }    
    
    let game = document.getElementById('game');
    let HTMLcontainer = document.getElementById('container-login100');
    game.classList.remove('hidden');
    game.style.removeProperty('top');
    game.classList.add('top');
    HTMLcontainer.style.minHeight = '150vh';

    const emojis = ['🪥', '🪒', '🚿', '🧻', '📱', '💊', '🚽', '🧼', '✏️', '💡','🥼','👓','👞','🩺','👩🏼‍⚕️','📺','💳','👔']
    const picks = pickRandom(emojis, (6 * 6) / 2);

    const items = shuffle([...picks, ...picks])
    
    //Définir la taille du plateau et le générer
    // createNode
    const cards =  document.createElement('div');
        cards.innerHTML = `<div class="board topDiff" data-dimension="6" style="grid-template-columns: repeat(${6}, auto)">
            ${items.map(item => `
                <div class="card">
                    <div class="card-front"></div>
                    <div class="card-back">${item}</div>
                </div>
            `).join('')}
       </div>`

    let boardId = document.getElementById('board');
    boardId.insertBefore(cards, boardId.childNodes[0]);
}

//& Lancer la partie 
const startGame = () => {         
    state.gameStarted = true;   //état de la partie lancé 
    state.loop = setInterval(() => {
        state.totalTime++  //lancement du Timer
        selectors.moves.innerText = `${state.totalFlips} coups`
        selectors.timer.innerText = `temps: ${state.totalTime} sec`
    }, 1000)
}

const flipBackCards = () => {     //si les cartes ne correspondent pas les retourner
    document.querySelectorAll('.card:not(.matched)').forEach(card => {
        card.classList.remove('flipped');
    })
    state.flippedCards = 0;
}

const flipCard = card => {
    state.flippedCards++;

    if (!state.gameStarted) {
        startGame();
    }
 
    if (state.flippedCards <= 2) {      //tirage des cartes
        card.classList.add('flipped');                                                              
        //test

    }

    //& Vérifications des cartes
    if (state.flippedCards === 2) {    //Si deux cartes sont tirées, ajouter 1 au compteur de coups et verifier si elle sont compatibles
        const flippedCards = document.querySelectorAll('.flipped:not(.matched)');
        state.totalFlips++;
        if (flippedCards[0].innerText === flippedCards[1].innerText) {              //si les deux cartes correspondes alors leur ajouter la class 'matched' afin qu'elle prennent les attributs de cette classe et reste retournées
            flippedCards[0].classList.add('matched');
            flippedCards[1].classList.add('matched');
        }
        setTimeout(() => {    //Si elles ne matchent pas appeler la fonction flipBackCards qui les retourneras pour les cacher
            flipBackCards();
        }, 700)
    }

    //& Si on ne peut pas découvrir d'autres cartes alors fin de la partie 
    if (!document.querySelectorAll('.card:not(.flipped)').length) {         //Si il n'y a plus de cartes alors afficher la page de victoire
        setTimeout(() => {
            selectors.boardContainer.classList.add('flipped');       
            selectors.win.innerHTML = `
                <span class="win-text">
                    Bravo vous avez gagné !<br />
                    avec <span class="highlight">${state.totalFlips}</span> coups<br />
                    en <span class="highlight">${state.totalTime}</span> secondes
                </span>
                <div class="reloadButton" id="btnRecommencer">
                <a href="../main.html">
                    <span class="text">Recommencer</span>
                    <span class="line -right"></span>
                    <span class="line -top"></span>
                    <span class="line -left"></span>
                    <span class="line -bottom"></span>
                </a>
                </div>
            `
            state.finish = true;
            addToHistory(state.totalFlips, state.totalTime);  //Ajouter dans la liste des scores les résultats 
            clearInterval(state.loop)
        }, 1000)
    }
} 

const attachEventListeners = () => {
    document.addEventListener('click', event => {
        const eventTarget = event.target;
        const eventParent = eventTarget.parentElement;

        if (eventTarget.className.includes('card') && !eventParent.className.includes('flipped')) {
            flipCard(eventParent);
        } else if (eventTarget.nodeName === 'card' && !eventTarget.className.includes('disabled')) {
            startGame();
        }
    })
}
attachEventListeners()


//& Enregistrer l'historique des parties 

const gameHistory = [];         //stocker les résultats dans un tableau 

const addToHistory = (totalFlips, totalTime) => {
    if (gameHistory.length >= 5) {              //Afficher que les 5 dernières parties donc si il dépasse remplacer 
        gameHistory.shift();                    //Remplacer la première ligne du tableau
    }
    gameHistory.push({ totalFlips, totalTime });            //Ajouter le nombre de coups et le temps au tableau
    displayHistory();                   //appeler la fonction qui affiche le tableau dans le HTML
};

const displayHistory = () => {
    let historyList = "";
    for (let i = 0; i < gameHistory.length; i++) {        //Afficher pour chaque partie finie la liste 
        historyList += "<li class='score'>Coups : " + gameHistory[i].totalFlips + " en " + gameHistory[i].totalTime + " secondes</li>";
    }
    document.getElementById("history").innerHTML = historyList;   //Afficher dans le HTML
};



//preshot de questions : "Transformer le compteur de secondes à un compteur en minutes+secondes"
//preshot de questions : "Modifier la page de victoire pour que le texte affiche 'Bravo USER vous avez gagné!'"
//preshot de questions : RegEx pour les mot de passes
//preshot de questions : animations JQuery ou CSS

//TODO Changer de jeu sur le clic du bouton
//TODO training test unitaires