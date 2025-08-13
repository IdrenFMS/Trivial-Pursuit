const questions = [
    {question: "Quelle est la couleur du cheval blanc d'Henri IV ?", reponses: ["Blanc","Noir","Gris","Marron"], bonne:"Blanc", categorie:0},
    {question: "Combien de continents y a-t-il ?", reponses:["5","6","7","8"], bonne:"7", categorie:1},
    {question: "Quelle est la capitale de la France ?", reponses:["Lyon","Paris","Marseille","Toulouse"], bonne:"Paris", categorie:2},
    {question: "Qui a peint la Joconde ?", reponses:["Michel-Ange","Léonard de Vinci","Raphaël","Van Gogh"], bonne:"Léonard de Vinci", categorie:3},
    {question: "Quelle planète est la plus proche du Soleil ?", reponses:["Vénus","Mars","Mercure","Jupiter"], bonne:"Mercure", categorie:4},
    {question: "Quel est l'élément chimique H ?", reponses:["Hydrogène","Hélium","Oxygène","Carbone"], bonne:"Hydrogène", categorie:5}
];

let score = 0;
let currentQuestion = 0;
let camembertRempli = [false,false,false,false,false,false];

function afficherQuestion() {
    const q = questions[currentQuestion];
    document.getElementById('question').textContent = q.question;
    const reponsesDiv = document.getElementById('reponses');
    reponsesDiv.innerHTML = "";
    q.reponses.forEach(rep => {
        const btn = document.createElement('button');
        btn.textContent = rep;
        btn.onclick = () => verifierReponse(rep, q.categorie);
        reponsesDiv.appendChild(btn);
    });
}

function verifierReponse(reponse, categorie) {
    const bonne = questions[currentQuestion].bonne;
    if (reponse === bonne) {
        alert("Bonne réponse !");
        score++;
        camembertRempli[categorie] = true;
        document.getElementById('slice-' + categorie).classList.add('filled');
    } else {
        alert("Mauvaise réponse ! La bonne réponse était : " + bonne);
    }
    document.getElementById('score').textContent = "Score : " + score;
}

document.getElementById('suivant').onclick = () => {
    currentQuestion++;
    if (currentQuestion >= questions.length) {
        alert("Fin du jeu ! Score final : " + score);
        currentQuestion = 0;
        score = 0;
        camembertRempli = [false,false,false,false,false,false];
        for(let i=0;i<6;i++){
            document.getElementById('slice-' + i).classList.remove('filled');
        }
        document.getElementById('score').textContent = "Score : " + score;
    }
    afficherQuestion();
}

// Lancer la première question
afficherQuestion();
