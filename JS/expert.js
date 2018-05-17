//Tableauloïd - jugement.js
//Ce script contient une partie des fonctions javascript du jeu en mode difficile. D'autres sont communes avec algobh.js. 
//Voir le fonctionnement du mode dans main.js, pour le détail des dépendances.

function colours_e() {
	//Fonction affichant des couleurs au hasard dans le tableau.
	var cases = rndnumbers.length;
	for (var i = 0; i < cases; i++) {
		var order = ["#FF0000","#FF7B29","#FFFF00","#00B600","#FFFFFF"]; //rouge orange jaune vert blanc
		document.getElementById(rndnumbers[i]).setAttribute('bgcolor', order[i]);
		//document.getElementById(rndnumbers[i]).innerHTML = i;
	}
	document.body.style.cursor = "none" ;
	setTimeout(function siis() {//timeout
		for (var i = 1; i <= nct; i++) {
			document.getElementById(i).setAttribute('background', './IMG/chat.png');//cache les cases
			document.body.style.cursor = "default" ;
			document.getElementById(i).addEventListener("click", detect_e, false);//ajoute une écoute pour chaque id
		}
	}, 5000)
}

function detect_e(evt) {//test id
	var casesel = parseInt(evt.target.id);
	if (rndnumbers[0] == casesel) {
		var cav = rndnumbers.indexOf(casesel);
		rndnumbers.splice(cav, 1)
		score (true);
		document.getElementById(casesel).setAttribute('background', './IMG/chatok.png');//chat content
	}
	else {
		score (false);
		var audio = new Audio('./SND/failsans.ogg'); //Son d'echec critique
		audio.play();
		document.getElementById(casesel).setAttribute('background', './IMG/chatxx.png');//chat ko
		nca = 1; //'suffit de lire la suite.
	}
	nca -= 1 ;
	if (nca == 0) {
		empechement_e();
		setTimeout(function quisertarienmaisobligatoire(){ //Vire les cases au bout d'une seconde
			reset_e();
		}, 1000);
    }
}

function empechement_e(){//Fonction sans délai afin d'éviter que le joueur ne clique pendant le timeout défini à nca = 0.
	for (var i = 1; i <= nct; i++) {
		document.getElementById(i).removeEventListener("click", detect_e);//vire écoute pour chaque id
	}
}

function reset_e() { //Réinitialise le tableau
	for (var i = 1; i <= nct; i++) {
		document.getElementById(i).removeAttribute('background');//Vire le fond qui cache les réponses.
		document.getElementById(i).removeAttribute('bgcolor');//Vire les couleurs des cases
	}
	rndnumbers.length = 0
	nca = ncaorg;//Restauration du nombre de cases
	if (tour < 20) {
		tour += 1;   //Incrément
		document.getElementById('sub-menu').innerHTML = tour + "<sup>ème</sup> Tour" +"<br>Score :" + valeur_du_score + "/" + (tour - 1)*ncaorg*100; //tour - 1 car le score affiché est défini à la suite du tour précédent
		rng(nct,nca);
		colours_e(rndnumbers,nct);
	} else {
		document.getElementsByTagName("table")[0].style.visibility = "hidden";;//Cache le tableau.
		document.getElementById('sub-menu').innerHTML = tour + "<sup>ème</sup> Tour" +"<br>Score :" + valeur_du_score + "/" + tour*ncaorg*100;
		scorefinal();
	}

}