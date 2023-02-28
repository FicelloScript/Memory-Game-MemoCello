//&=========== Zone de jeu ================

//* ========= Lancement de la partie sur le clic des boutons =========== 

function afficher36() {   
    generateGame36();
}

function afficher20() {
    generateGame20();
}

function afficher16() {
    generateGame();
 
}

const selectors = {                                                 //définir les selectors(parties du code pour accéder au HTML) pour les réutilisers ensuite avec selectors.nomduselector
    boardContainer: document.querySelector('.board-container'),
    board: document.querySelector('.board'),
    moves: document.querySelector('.moves'),
    timer: document.querySelector('.timer'),
    start: document.querySelector('button'),
    win: document.querySelector('.win')
}

const state = {                     //définir les états et valeurs de base afin de les réutiliser ensuite avec state.nom
    gameStarted: false,
    flippedCards: 0,
    totalFlips: 0,
    totalTime: 0,
    loop: null,
    finish: false  
}

const shuffle = array => {                  //fonction pour randomiser les cartes, mélanger les valeurs au sein d'un tableau
    const clonedArray = [...array];

    for (let index = clonedArray.length - 1; index > 0; index--) {          
        const randomIndex = Math.floor(Math.random() * (index + 1));    //définir une constante qui va définir un index de tableau aléatoire
        const original = clonedArray[index];

        clonedArray[index] = clonedArray[randomIndex];              //clonedArray est le nouveau tableau géneré dans laquelle les valeurs sont dans un ordre différent
        clonedArray[randomIndex] = original;
    }
    return clonedArray;
}

const pickRandom = (array, items) => {                       //fonction qui va sélectionner un nombre donné d'élements dans un tableau 
    const clonedArray = [...array];         
    const randomPicks = [];                                 // pour stocker les éléments séléctionnés dans le tableau clonedArray

    for (let index = 0; index < items; index++) {           //définir les index des élements du tableau aléatoirement
        const randomIndex = Math.floor(Math.random() * clonedArray.length);
        
        randomPicks.push(clonedArray[randomIndex]);
        clonedArray.splice(randomIndex, 1);                 //ajouter dans le tableau en supprimant l'ancien élément du tableau clonedArray
    }
    return randomPicks;
}

//* ============= Générer les parties ==============

function generateGame() {                                               //générer pour 16 cartes 
    const board = document.getElementsByClassName('board');
    const btnRecommencer = document.getElementById('btnRecommencer');
    if(board.length > 0) {              //Si il y a déja une partie affichée alors la supprimer, remettre le compteur et le timer à 0 et la relancer
        board[0].remove();
        state.gameStarted = false;
        state.totalFlips = 0;
        state.totalTime = 0;
        state.flippedCards = 0;
        clearInterval(state.loop);
        selectors.boardContainer.classList.remove('flipped');    //supprimer l'affichage de victoire si l'ancienne partie est terminée
    }
    //Réglage du bug du bouton recommencer
    if(state.finish == true){
        btnRecommencer.classList.add('hidden');             //Pour régler le bug qui affiche le bouton recommencer au milieu de l'écran en pleine partie, ici le cacher
        state.finish = false;
    }    

    let game = document.getElementById('game');         //se placer dans la div avec comme Id game 
    game.classList.remove('hidden');
    game.classList.remove('top');
    const emojis = ['🛁', '🪒', '🚿', '🧻', '📱', '💊', '🚽', '🧼', '✏️', '💡','🥼','👓','👞','🩺','👩🏼‍⚕️','📺','💳','👔']         //définir les émojis qui s'afficheront en jeu
    const picks = pickRandom(emojis, (4 * 4) / 2);              //définir la taille du jeu en appelant la fonction pour mélanger l'ordre des éléments dans le tableau et y mettre les émojis 
    
    const items = shuffle([...picks, ...picks])             //mélanger le tableau grâce à la fonction shuffle
    const cards =  document.createElement('div');

//créer le tableau en HTML en utilisant .map() pour ajouter dans chaque card un élement du tableau items
        cards.innerHTML = `<div class="board" data-dimension="6" style="grid-template-columns: repeat(${4}, auto)">             
            ${items.map(item => `       
                <div class="card">
                    <div class="card-front"></div>
                    <div class="card-back">${item}</div>
                </div>
            `).join('')}
       </div>`

    let boardId = document.getElementById('board');
    boardId.insertBefore(cards, boardId.childNodes[0]);    //insérer les cartes dans la zone de jeu board
}

function generateGame20() {
    const board = document.getElementsByClassName('board');
    const btnRecommencer = document.getElementById('btnRecommencer');
    if(board.length > 0) {
        board[0].remove();
        state.gameStarted = false;
        state.totalFlips = 0;
        state.totalTime = 0;
        state.flippedCards = 0;
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

    const emojis = ['🛁', '🪒', '🚿', '🧻', '📱', '💊', '🚽', '🧼', '✏️', '💡','🥼','👓','👞','🩺','👩🏼‍⚕️','📺','💳','👔']
    const picks = pickRandom(emojis, (5 * 4) / 2);

    const items = shuffle([...picks, ...picks])
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
        state.flippedCards = 0;
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

    const emojis = ['🛁', '🪒', '🚿', '🧻', '📱', '💊', '🚽', '🧼', '✏️', '💡','🥼','👓','👞','🩺','👩🏼‍⚕️','📺','💳','👔']
    const picks = pickRandom(emojis, (6 * 6) / 2);

    const items = shuffle([...picks, ...picks])
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
    document.querySelectorAll('.card:not(.matched)').forEach(card => {              //Si les deux cartes retournées ne matchent pas
        card.classList.remove('flipped');                                           //Retirer l'attribut flipped de ces cartes ce qui va les retourner 
    })
    state.flippedCards = 0;             //remettre à 0 le nombre de cartes retournées pour pouvoir rejouer
}

const flipCard = card => {              //lorsqu'une carte est retournée 
    state.flippedCards++;

    if (!state.gameStarted) {
        startGame();
    }
 
    if (state.flippedCards <= 2) {      //tirage des cartes
        card.classList.add('flipped');                  //ajouter la classe flipped à la carte pour la retourner avec une animation CSS                                                
    }

    //& Vérifications des cartes
    if (state.flippedCards === 2) {    //Si deux cartes sont tirées, ajouter 1 au compteur de coups et verifier si elle sont compatibles
        const flippedCards = document.querySelectorAll('.flipped:not(.matched)');
        state.totalFlips++;
        if (flippedCards[0].innerText === flippedCards[1].innerText) {              //si les deux cartes correspondes alors leur ajouter la class 'matched' afin qu'elle prennent les attributs de cette classe et reste retournées
            flippedCards[0].classList.add('matched');                               //Ajout de la classe matched pour qu'elle prennent les propriété CSS de cette derniere et ne se retourne pas 
            flippedCards[1].classList.add('matched');
        }
        setTimeout(() => {    //Si elles ne matchent pas appeler la fonction flipBackCards qui les retourneras pour les cacher
            flipBackCards();
        }, 700)
    }

    //& Si on ne peut pas découvrir d'autres cartes alors fin de la partie 
    if (!document.querySelectorAll('.card:not(.flipped)').length) {         //Si il n'y a plus de cartes alors afficher la page de victoire
        setTimeout(() => {
            selectors.boardContainer.classList.add('flipped');              //Retourner la zone de jeu avec une animation CSS pour la cacher
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

        if (eventTarget.className.includes('card') && !eventParent.className.includes('flipped')) {             //Si la carte cliquée n'est pas retournée, alors la retourner
            flipCard(eventParent);
        } else if (eventTarget.nodeName === 'card' && !eventTarget.className.includes('disabled')) {            //Si la carte cliquée n'a pas la classe disabled(alors elle est donc affichée) alors lancer la partie 
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



