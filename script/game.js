// Sélectionne les différents emplacements 
var divChoixOrdi = document.querySelector('#choixComputer');
divChoixOrdi.style.position = 'absolute';
divChoixOrdi.style.left = '75%';                    // Permet de placer l'image à 75% de la gauche sur n'importe quelle taille d'écran

var reset = document.querySelector('#reset');

var divChoixUtilisateur = document.querySelector('#choixUser');
divChoixUtilisateur.style.position = 'absolute';

var divgame = document.querySelector('#game');
divgame.style.justifyContent = 'space-between';

var spanScoreUtilisateur = document.querySelector('#scoreGamer');
spanScoreUtilisateur.style.position = 'absolute';

var spanScoreOrdi = document.querySelector('#scoreComputer');
spanScoreOrdi.style.position = 'absolute';
spanScoreOrdi.style.left = '81%';


// Sélectionne les différentes images, les redimmensionne et les déplace au bon endroit
var pierre = document.querySelector('#pierre');

var feuille = document.querySelector('#feuille');
feuille.style.position = "absolute";
feuille.style.left = "39%";

var ciseaux = document.querySelector('#ciseaux');
ciseaux.style.position = "absolute";
ciseaux.style.left = "75%";

// Création de l'image pour le choix de l'ordinateur
var imgChoixOrdi = document.createElement('img');
imgChoixOrdi.style.position = "relative";
imgChoixOrdi.style.width = "70%";
imgChoixOrdi.style.left = "15%";
imgChoixOrdi.style.top = "30px";

divChoixOrdi.appendChild(imgChoixOrdi);


// Création d'une balise image pour versus et modification de sa position et de sa taille
var imgVS = document.createElement('img');
imgVS.style.position = 'absolute';
imgVS.style.left = '45%';
imgVS.style.width = '10%';
imgVS.src = 'img/vs.png';


// Création d'une balise image pour afficher le choix de l'utilisateur
var imgChoixUtilisateur = document.createElement('img');
imgChoixUtilisateur.style.position = "relative";
imgChoixUtilisateur.style.width = "70%";
imgChoixUtilisateur.style.left = "15%";
imgChoixUtilisateur.style.top = "30px";

divChoixUtilisateur.appendChild(imgChoixUtilisateur);

// Variables pour mémoriser le nombre qui correspond au choix de l'utilisateur et de l'ordinateur:
// 100 : pierre ; 200 : feuille et 300 : ciseaux
var choixUtilisateur;
var choixOrdi;

// Initialisation du score
var score = [0, 0];


// Choisi de manière aléatoire 1, 2 ou 3 et rajoute l'image correspondante à la div ChoixComputer
// 1 : pierre ; 2 : feuille ; 3 : ciseaux
function ordinateur() {
    choixOrdi = Math.floor(Math.random() * (4 - 1) + 1);
    if (choixOrdi == 1) {
        imgChoixOrdi.src = 'img/pierre.jpg';
    } else if (choixOrdi == 2) {
        imgChoixOrdi.src = 'img/feuille.jpg';
    } else {
        imgChoixOrdi.src = 'img/ciseaux.jpg';
    }
    return choixOrdi;
}

// Vérification de qui gagne la manche
function jeu(choixUtilisateur, choixOrdi, score) {
    let additionChoix = choixUtilisateur + choixOrdi;
    if (additionChoix==103 || additionChoix==201 || additionChoix==302) {
        score[0] += 1;
    } else if (additionChoix==102 || additionChoix==203 || additionChoix==301) {
        score[1] += 1;
    } else if (additionChoix==101 || additionChoix==202 || additionChoix==303) {
        console.log('Egalité');
    }

    // Rend visible les images (pour annuler le reset)
    divChoixOrdi.style.display = 'block';
    divChoixUtilisateur.style.display = 'block';

    return score;
}

// Lorsqu'une image est cliquée par le joueur : remplissage des points liés au choix pour le calcul du résultat, l'image VS et le choix du joueur sont affichées, lancement de la fonction ordinateur() puis calcul et affichage du score
pierre.addEventListener('click',function(){
    pierre.style.boxShadow = 'none';
    feuille.style.boxShadow = '6px 8px 0px red';
    ciseaux.style.boxShadow = '6px 8px 0px green';

    imgChoixUtilisateur.src = "img/pierre.jpg";
    divgame.appendChild(imgVS);

    choixUtilisateur = 100;
    choixOrdi = ordinateur();

    score = jeu(choixUtilisateur, choixOrdi, score);

    spanScoreUtilisateur.innerText = score[0];
    spanScoreOrdi.innerText = score[1];
});

feuille.addEventListener('click',function(){
    pierre.style.boxShadow = '6px 8px 0px black';
    feuille.style.boxShadow = 'none';
    ciseaux.style.boxShadow = '6px 8px 0px green';

    imgChoixUtilisateur.src = "img/feuille.jpg";
    divgame.appendChild(imgVS);

    choixUtilisateur = 200;
    choixOrdi = ordinateur();
    
    score = jeu(choixUtilisateur, choixOrdi, score);

    spanScoreUtilisateur.innerText = score[0];
    spanScoreOrdi.innerText = score[1];
});

ciseaux.addEventListener('click',function(){
    pierre.style.boxShadow = '6px 8px 0px black';
    feuille.style.boxShadow = '6px 8px 0px red';
    ciseaux.style.boxShadow = 'none';

    imgChoixUtilisateur.src = "img/ciseaux.jpg";
    divgame.appendChild(imgVS);

    choixUtilisateur = 300;
    choixOrdi = ordinateur();
    
    score = jeu(choixUtilisateur, choixOrdi, score);

    spanScoreUtilisateur.innerText = score[0];
    spanScoreOrdi.innerText = score[1];
});

reset.addEventListener('click', function(){
    // Recharger la page pour que tout soit réinitilaisé
    //window.location.reload();

    // Rénitialisation des scores à 0 et affiche
    score = [0,0];
    spanScoreUtilisateur.innerText = score[0];
    spanScoreOrdi.innerText = score[1];

    // Fait "disparaître" les images
    divgame.removeChild(imgVS);
    divChoixOrdi.style.display = 'none';
    divChoixUtilisateur.style.display = 'none';
});