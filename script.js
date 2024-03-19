// ================== LES VARIABLES ET TYPES DE DONNEES
let age = 18;

// Int
let age2 = 25;
age2 = 48;

// Boolean
let suisJeVieux = false; // false

// String
const monNomComplet = "KOUAME Yao Jean";

// Array
let notesEnAnglais = [20, 18, 16];

// Objet
let voiture = {
  coulour: "Noir",
  vitesse: 330, // mesure en km/h
  poids: 15, // t -> tonne
};

// Symbole -> Sera utilisé rarement.

// ================== LES CONDITIONS

if (age > 15) {
  let age2_2 = 105;
  console.log("Tu peux aller au ciné");
} else if (age > 16) {
  console.log("Tu es encore bébé");
} else if (age > 16) {
  console.log("Tu es encore bébé");
} else if (age > 17) {
  console.log("Tu es encore bébé");
} else if (age > 18) {
  console.log("Tu es encore bébé");
} else {
  console.log("Tu es encore bébé");
}

switch (age) {
  case age > 15:
    console.log("Tu peux aller au ciné");
    break;
  case age > 16:
    console.log("Tu peux aller au ciné");
    break;
  case age > 17:
    console.log("Tu peux aller au ciné");
    break;
  case age > 18:
    console.log("Tu peux aller au ciné");
    break;
  case age > 19:
    console.log("Tu peux aller au ciné");
    break;

  default:
    console.log("Reste à la maison pour dormir");
    break;
}

// LES BOUCLES

for (let nombre = 0; nombre < 10; nombre++) {
  console.log("For", nombre);
}

for (const index in notesEnAnglais) {
  console.log("For in", notesEnAnglais[index]);
}

for (const note of notesEnAnglais) {
  console.log("For of", note);
} // Il accede directement au élément du tableau au non à leur index

while (age < 30) {
  console.log("Boucle infinie");
  age = age + 1;
}

// do {

// } while (condition);

// LES FONCTIONS

function addition(nbre1, nbre2) {
  return nbre1 + nbre2;
}

const resultat = addition(45, 55);
const resultat_200 = addition(200, 200);

console.log("resultat", resultat);
console.log("resultat_200", resultat_200);
