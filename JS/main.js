//Tableauloïd - main.js 
//Ce scipt contient toutes les fonctions javascript chargés avant le lancement du jeu.

var difficulT = ""; //Déclaration de la valeur par défaut de la difficulté (Aucune)
var diffdesc = [
	'Mode basique: Si vous n\'avez pas les bases.<br>(5x10, 3 cases)',
	'Mode habitué: Si vous possédez le savoir.<br>(7x10, 4 cases)',
	'Le mode expert: Les règles sont simples, selectionnez les cases dans un ordre prècis,a savoir <b style="color:#FF0000;">Rouge</b>, <b style="color:#FF7B29;">Orange</b>, <b style="color:#FFFF00;">Jaune</b>, <b style="color:#00B600;">Vert</b>, <b style="color:#FFFFFF;">Blanc</b>, .<b>Aucun droit à l\'erreur.<br>(15x6, 90 cases)',
]; //Descritptions des diffiultés (TODO)

var LeLancement = 42;//Variable pour éviter de relancer le jeu deux fois. (Valeur OSEF)

function lechangement(d) { //Fonction permettant de changer la valeur de la difficulté, ainsi que de la description, et de lancer un bruitage.

	if(d == 0){ 
		var audio = new Audio('./SND/plop.ogg'); //Son
		audio.play();
		document.getElementById('desc').innerHTML = diffdesc[0]; // Description
		difficulT = "beg"; //Valeur de la difficulté
	}
	else if (d == 1){
		var audio = new Audio('./SND/plop.ogg');
		audio.play();
		document.getElementById('desc').innerHTML = diffdesc[1];
		difficulT = "nor";
	}
	else if (d == 2){
		var audio = new Audio('./SND/plop.ogg');
		audio.play();
		document.getElementById('desc').innerHTML = diffdesc[2];
		difficulT = "har";

	}
}

function start() { //Fonction appelant les divers scripts chargées de lancer le jeu.
	if (LeLancement == 0){
		location.reload(true)//Relançe la page, en forçant le rechargement via le "serveur".
	}
	else{
		if (difficulT == "beg"){
			changementBouton();
			LeLancement = 0;
			rng(50,3);
			render(5,10);
			colours(rndnumbers);
		}
		else if (difficulT == "nor"){
			changementBouton();
			LeLancement = 0;
			rng(70,4);
			render(7,10);
			colours(rndnumbers);
		}
		else if (difficulT == "har"){
			changementBouton();
			LeLancement = 0;
			rng(90,5);
			render(6,15);
			colours_e();
		}
		else{
			com("Pas de mode de difficulté choisie.", 2000);
		}
	}
}

function changementBouton() {
	document.getElementById('binput').setAttribute('src', './IMG/rbt.png');//Changement bouton de lançement par celui de rejouage.
}

function com(message, timeoutsetting){//Système de sortie normalisé.
	document.getElementById('com').innerHTML = message;
	setTimeout(function sees() {//timeout
		document.getElementById('com').innerHTML = '';
	}, timeoutsetting);
}