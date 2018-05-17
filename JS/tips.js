//Tableauloïd - tips.js
//Ce script affiche un message à caratère informatif à toute balise portant l'id info.
//Provoque un miaulement strident lors du démarrage du jeu.

var tips = [
	'Ce mini-jeu est conçu pour s\'afficher sur des écrans de 1024x768. Idéal pour votre ancien ordinateur !',
	'Ce mini-jeu est terminé.',
	'Ce mini-jeu fonctionne correctement sur Firefox, Chrome et... Opera. Sans blagues.',
	'Ce mini-jeu n\'est pas fiable avec Internet Explorer. On vous aura prévenu.',
	'Ce mini-jeu est conforme à la convention de Genève.',

];

function spawn() {
	var random_number = Math.floor(Math.random() * (tips.length));
	document.getElementById('info').innerHTML = "- Le saviez-vous : " + tips[random_number];
	var audio = new Audio('./SND/miaou.ogg');
	audio.play();
	document.getElementById('info').addEventListener("click", spawn);//Système de rechargement de l'aléatoire locale.
}
