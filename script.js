const questions = [
    {
        question: "Quelle est la couleur du cheval blanc d'Henri IV ?",
        reponses: ["Blanc", "Noir", "Gris", "Marron"],
        bonne: "Blanc"
    },
    {
        question: "Combien de continents y a-t-il sur Terre ?",
        reponses: ["5", "6", "7", "8"],
        bonne: "7"
    },
    {
        question: "Quelle est la capitale de la France ?",
        reponses: ["Lyon", "Paris", "Marseille", "Toulouse"],
        bonne: "Paris"
    }
];

let score = 0;
let currentQuestion = 0;

function afficherQuestion() {
    const q = questions[currentQuestion];
    document.getElementById('question').textContent = q.question;
    const reponsesDiv = document.getElementById('reponses');
    reponsesDiv.innerHTML = "";
    q.reponses.forEach(rep => {
        const btn = document.createElement('button');
        btn.textContent = rep;
        btn.onclick = () => verifierReponse(rep);
        reponsesDiv.appendChild(btn);
    });
}

function verifierReponse(reponse) {
    const bonne = questions[currentQuestion].bonne;
    if (reponse === bonne) {
        alert("Bonne réponse !");
        score++;
        document.getElementById('score').textContent = "Score : " + score;
    } else {
        alert("Mauvaise réponse ! La bonne réponse était : " + bonne);
    }
}

document.getElementById('suivant').onclick = () => {
    currentQuestion++;
    if (currentQuestion >= questions.length) {
        alert("Fin du jeu ! Score final : " + score);
        currentQuestion = 0;
        score = 0;
        document.getElementById('score').textContent = "Score : " + score;
    }
    afficherQuestion();
}

// Lancer la première question
afficherQuestion();
