//Tableauloïd - algobh.js
//Ce script contient toutes les fonctions javascript du jeu en mode basique et habitué.

//Variables globales
var liste_des_scores = [];
liste_des_scores.push(localStorage.getItem("scores_sauvegardes"));
var valeur_du_score = 0;
var rndnumbers = [];
var tcases = 0;
var nca = 0;//Nombre de cases alétoires.
var ncaorg = 0;//Nombre de cases alétoires originel.
var nct = 0;//Nombre de cases totales.
var tour = 1;
var quantieme = "er";

function rng(numberc,ncases) { //Fonction permettant de choisir un nombre aléatoire( ou pseudo-aléatoire) pour le rendu.
	nct = parseInt(numberc);//Globalisation
	nca = parseInt(ncases);//Globalisation
	ncaorg = nca;//Reference
	for (i = 0; i < ncases; i++){
		var random_number = 1 + Math.floor(Math.random() * (numberc-1));
		while (rndnumbers.includes(random_number) == true){
			random_number = 1 + Math.floor(Math.random() * (numberc-1));
		}
		rndnumbers[i] = random_number;
	}
}

function render(lines,rows) { //Fonction permettant de générer un tableau avec choix de lignes et de colonnes.
	var ncase = 1; //Compteur de cases pour l'id
    var body = document.body;
    var tbl = document.createElement('table'); //Créer un tableau,
	var tbody = document.createElement('tbody');// son body,
    for (var il = 0; il < lines; il++) { //pour chaque ligne demandé,
        var tr = tbody.insertRow(); //ajouter un tr,
        for (var ir = 0; ir < rows; ir++) { //pour chaque colonne,
			var td = tr.insertCell(); //créer un td,
			td.setAttribute('id', ncase); //lui assigner un nombre,
			var ncase = ncase + 1;
			tr.appendChild(td); //ajouter le td dans le tr,
        }
        tbody.appendChild(tr); //ajouter le tr dans le tableau,
    }
    tbl.appendChild(tbody);
	body.appendChild(tbl);//et le tableau à la fin.
	document.getElementById('sub-menu').innerHTML = tour + "<sup>er</sup> Tour" +"<br>Bonne chance !";
}

function colours(numbers) { //Fonction affichant des couleurs au hasard dans le tableau.
	var cases = numbers.length;
	for (var i = 0; i < cases; i++) {
		var red = 100 + Math.floor(Math.random() * 155);
		var red = red.toString(16);
		var green = 100 + Math.floor(Math.random() * 155);
		var green = green.toString(16);
		var blue = 100 + Math.floor(Math.random() * 155);
		var blue = blue.toString(16);
		var colour = "#" + red + green + blue;
		document.getElementById(numbers[i]).setAttribute('bgcolor', colour);
	}
	setTimeout(function saas() {//timeout de 2 secondes
		for (var i = 1; i <= nct; i++) {
				document.getElementById(i).setAttribute('background', './IMG/chat.png');//cache les cases
				document.getElementById(i).addEventListener("click", detect, false);//ajoute une écoute pour chaque id
		}
	}, 2000);
}

function detect(evt) {//test id
	var casesel = parseInt(evt.target.id);
	if (rndnumbers.includes(casesel) == true) {
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
	}
	nca -= 1 ;
	if (nca == 0) {
		empechement();
		setTimeout(function quisertarienmaisobligatoire(){ //Vire les cases au bout d'une seconde // PARFAIT !
			reset();
		}, 1000);
    }
}

// Fonction qui prend pour arguments true si le joueur a réussi, false autrement
// Elle modifie le score et renvoie sa nouvelle valeur.
function score(state) {
	if (state) {
		valeur_du_score += 100;
	} else {
		valeur_du_score -= 50;
	}
	if (valeur_du_score < 0) {
		valeur_du_score = 0;
	}
	return valeur_du_score;
}

function afficher_tableau_score() {
	var audio = new Audio('./SND/plop.ogg');
	audio.play();
	alert("Scores: " + liste_des_scores);
}

function scorefinal() {
	valeur_du_score_final = parseInt((valeur_du_score / (tour*ncaorg*100)) * 100);
	if (valeur_du_score_final <= 38) {
		alert(String(valeur_du_score_final) + "%, " + scoreT1());
	}
	if ((valeur_du_score_final <= 50) && (valeur_du_score_final > 38)) {
		alert(String(valeur_du_score_final) + "%, " + scoreT2());
	}
	if ((valeur_du_score_final <= 75) && (valeur_du_score_final > 50)) {
		alert(String(valeur_du_score_final) + "%, : " + scoreT3());
	}
	if ((valeur_du_score_final < 100) && (valeur_du_score_final > 75)) {
		alert(String(valeur_du_score_final) + "%, " + scoreT4());
	}
	if (valeur_du_score_final == 100) {
		alert(String(valeur_du_score_final) + "%, " + scoreT5());
	}
	liste_des_scores.push(valeur_du_score_final);
	liste_des_scores.sort();
	localStorage.setItem("scores_sauvegardes", liste_des_scores);
}

function empechement(){//Fonction sans délai afin d'éviter que le joueur ne clique pendant le timeout défini à nca = 0.
	for (var i = 1; i <= nct; i++) {
		document.getElementById(i).removeEventListener("click", detect);//vire écoute pour chaque id
	}
}

function reset() { //Réinitialise le tableau
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
		colours(rndnumbers,nct);
	} else {
		document.getElementsByTagName("table")[0].style.visibility = "hidden";;//Cache le tableau.
		document.getElementById('sub-menu').innerHTML = tour + "<sup>ème</sup> Tour" +"<br>Score :" + valeur_du_score + "/" + tour*ncaorg*100;
		scorefinal();
	}

}
