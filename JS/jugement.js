//Tableauloïd - jugement.js
//Ce script affiche un message en réaction au nombre de points marqués par le joueur.

var phraseT1 = [
	"Rassurez-vous, les gens les plus intelligents sont pas toujours ceux qui jouent le mieux.",
	"Bon, c'est le retour du joueur le moins productif.",
	"Attention, votre chat joue avec la souris.",
	"Aïe ! Il va falloir penser à faire mieux !",
	"Non mais jouez le jeu, quand même !",
];
var phraseT2 = [
	"Faites ce que vous voulez dans votre vie, mais surtout faites du score.",
	"Bien, on commence à tenir quelque chose.",
	"Vous commencez à devenir bon.",
	"Vous être peut-être un pro-gamer en herbe, mais il va falloir bosser",
	"Pas parfait comme mémoire.",
];
var phraseT3 = [
	"Pas mal du tout.",
	"Plus de la moitié des réponses sont bonnes, C'est pas trop mal.",
	"Mais pour faire ça, tentez le 100% !",
	"Vous êtes bien moins bête que ce que je pensais.",
	"Peut mieux faire.",
];
var phraseT4 = [
	"C'est bien, ne faites pas un sans-faute, sinon on va voir que vous trichez.",
	"OK, je ne suis pas avec un débutant.",
	"C'est génial ! (Non je plaisante, ce jeu est sans intêret, calmez-vous)",
	"Ce n'est pas un sans faute, mais je suis sûr que c'est faisable.",
	"Bah alors, recommencez, faites un sans faute.",
];
var phraseT5 = [
	"Vous faites une partie tous les six mois, parce que vous avez trop d'avance, vous avez peur que les autres ne vous suivent pas ",
	"Non mais sérieusement, vous avez triché ?",
	"Sans faute ? Vraiment ? Clap clap clap",
	"Vous devriez fonder un culte autour de votre score si parfait.",
	"Un score pareil, ça doit attirer les filles. (Non je plaisante, ce jeu est sans intêret, calmez-vous)",
];

function scoreT1() {
	var audio = new Audio("./SND/1.ogg");
	audio.play();
	return phraseT1[Math.floor(Math.random() * (phraseT1.length))];
}
function scoreT2() {
	var audio = new Audio("./SND/2.ogg");
	audio.play();
	return phraseT2[Math.floor(Math.random() * (phraseT2.length))];
}
function scoreT3() {
	var audio = new Audio("./SND/3.ogg");
	audio.play();
	return phraseT3[Math.floor(Math.random() * (phraseT3.length))];
}
function scoreT4() {
	var audio = new Audio("./SND/4.ogg");
	audio.play();
	return phraseT4[Math.floor(Math.random() * (phraseT4.length))];
}
function scoreT5() {
	var audio = new Audio("./SND/5.ogg");
	audio.play();
	return phraseT5[Math.floor(Math.random() * (phraseT5.length))];
}
