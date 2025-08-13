const questions = [
    // Catégorie Rouge (0)
    {question: "Quelle est la couleur du cheval blanc d'Henri IV ?", reponses: ["Blanc","Noir","Gris","Marron"], bonne:"Blanc", categorie:0},
    {question: "Quel fruit est rouge et souvent utilisé dans les salades ?", reponses:["Tomate","Pomme","Cerise","Fraise"], bonne:"Tomate", categorie:0},
    {question: "Quelle est la couleur du sang ?", reponses:["Bleu","Rouge","Vert","Jaune"], bonne:"Rouge", categorie:0},
    {question: "Couleur traditionnelle des feux de stop ?", reponses:["Vert","Rouge","Orange","Blanc"], bonne:"Rouge", categorie:0},
    {question: "Quel animal est associé à la couleur rouge dans la mythologie ?", reponses:["Dragon","Licorne","Renard","Phoenix"], bonne:"Phoenix", categorie:0},
    {question: "Quel symbole est rouge sur le drapeau de la Chine ?", reponses:["Étoile","Lune","Soleil","Croix"], bonne:"Étoile", categorie:0},
    {question: "Quelle fleur est rouge et souvent offerte en amour ?", reponses:["Tulipe","Rose","Marguerite","Lys"], bonne:"Rose", categorie:0},
    {question: "Couleur de la boîte aux lettres en France ?", reponses:["Bleu","Rouge","Vert","Jaune"], bonne:"Rouge", categorie:0},
    {question: "Quelle baie rouge est utilisée dans les confitures ?", reponses:["Fraise","Myrtille","Cassis","Framboise"], bonne:"Framboise", categorie:0},
    {question: "Couleur de l'apple dans le logo initial ?", reponses:["Rouge","Vert","Jaune","Bleu"], bonne:"Rouge", categorie:0},
    {question: "Quel fruit est rouge à maturité et souvent confondu avec une baie ?", reponses:["Tomate","Cerise","Pomme","Prune"], bonne:"Tomate", categorie:0},
    {question: "Quelle couleur symbolise l'amour et la passion ?", reponses:["Rouge","Bleu","Vert","Jaune"], bonne:"Rouge", categorie:0},

    // Catégorie Orange (1)
    {question: "Quelle est la couleur de l'orange ?", reponses:["Rouge","Orange","Jaune","Verte"], bonne:"Orange", categorie:1},
    {question: "Quel fruit est orange et riche en vitamine A ?", reponses:["Carotte","Citron","Pomme","Poire"], bonne:"Carotte", categorie:1},
    {question: "Couleur du feuillage en automne ?", reponses:["Vert","Orange","Bleu","Violet"], bonne:"Orange", categorie:1},
    {question: "Quelle couleur symbolise l'énergie et la chaleur ?", reponses:["Bleu","Orange","Violet","Noir"], bonne:"Orange", categorie:1},
    {question: "Quel agrume est orange ?", reponses:["Mandarine","Citron","Pomme","Cerise"], bonne:"Mandarine", categorie:1},
    {question: "Quel animal a souvent une couleur orange avec des rayures noires ?", reponses:["Tigre","Lion","Renard","Chat"], bonne:"Tigre", categorie:1},
    {question: "Quelle couleur est associée à Halloween ?", reponses:["Noir","Orange","Rouge","Bleu"], bonne:"Orange", categorie:1},
    {question: "Nom d’un célèbre fromage français orange ?", reponses:["Mimolette","Camembert","Roquefort","Brie"], bonne:"Mimolette", categorie:1},
    {question: "Quel fruit orangé est également un légume ?", reponses:["Carotte","Abricot","Mangue","Citrouille"], bonne:"Carotte", categorie:1},
    {question: "Quelle couleur du coucher de soleil est prédominante ?", reponses:["Bleu","Orange","Vert","Violet"], bonne:"Orange", categorie:1},
    {question: "Couleur principale des citrouilles ?", reponses:["Jaune","Orange","Rouge","Verte"], bonne:"Orange", categorie:1},
    {question: "Quel agrume est souvent confondu avec une orange ?", reponses:["Mandarine","Citron","Pamplemousse","Clémentine"], bonne:"Clémentine", categorie:1},

    // Catégorie Jaune (2)
    {question: "Quelle couleur a le soleil ?", reponses:["Rouge","Bleu","Jaune","Vert"], bonne:"Jaune", categorie:2},
    {question: "Quelle couleur a une banane mûre ?", reponses:["Verte","Jaune","Orange","Rouge"], bonne:"Jaune", categorie:2},
    {question: "Quelle couleur symbolise le bonheur ?", reponses:["Bleu","Violet","Jaune","Rouge"], bonne:"Jaune", categorie:2},
    {question: "Quel fruit est jaune et acide ?", reponses:["Citron","Banane","Orange","Pomme"], bonne:"Citron", categorie:2},
    {question: "Couleur des taxis new-yorkais ?", reponses:["Jaune","Rouge","Bleu","Vert"], bonne:"Jaune", categorie:2},
    {question: "Quelle fleur est jaune et symbole de printemps ?", reponses:["Jonquille","Rose","Tulipe","Marguerite"], bonne:"Jonquille", categorie:2},
    {question: "Quel fruit est petit et jaune et pousse en grappes ?", reponses:["Raisin","Citron","Banane","Poire"], bonne:"Raisin", categorie:2},
    {question: "Couleur du maïs ?", reponses:["Blanc","Jaune","Vert","Rouge"], bonne:"Jaune", categorie:2},
    {question: "Quelle couleur est utilisée pour signaler la prudence ?", reponses:["Rouge","Jaune","Vert","Bleu"], bonne:"Jaune", categorie:2},
    {question: "Couleur d’un canari ?", reponses:["Bleu","Jaune","Vert","Rouge"], bonne:"Jaune", categorie:2},
    {question: "Quelle couleur symbolise l’or ?", reponses:["Jaune","Rouge","Bleu","Violet"], bonne:"Jaune", categorie:2},
    {question: "Couleur dominante dans une banane ?", reponses:["Jaune","Vert","Rouge","Orange"], bonne:"Jaune", categorie:2},

    // Catégorie Vert (3)
    {question: "Couleur de l’herbe ?", reponses:["Bleu","Vert","Jaune","Rouge"], bonne:"Vert", categorie:3},
    {question: "Quelle couleur a une pomme Granny Smith ?", reponses:["Rouge","Jaune","Verte","Bleue"], bonne:"Verte", categorie:3},
    {question: "Couleur des feux de circulation pour avancer ?", reponses:["Rouge","Orange","Vert","Bleu"], bonne:"Vert", categorie:3},
    {question: "Quel légume est vert et feuillu ?", reponses:["Salade","Carotte","Tomate","Poivron rouge"], bonne:"Salade", categorie:3},
    {question: "Couleur du jade ?", reponses:["Bleu","Vert","Rouge","Jaune"], bonne:"Vert", categorie:3},
    {question: "Quel animal est souvent vert et saute ?", reponses:["Grenouille","Tigre","Chat","Chien"], bonne:"Grenouille", categorie:3},
    {question: "Couleur des brocolis ?", reponses:["Rouge","Jaune","Vert","Orange"], bonne:"Vert", categorie:3},
    {question: "Quelle couleur symbolise la nature ?", reponses:["Vert","Bleu","Jaune","Rouge"], bonne:"Vert", categorie:3},
    {question: "Couleur de l’émeraude ?", reponses:["Vert","Bleu","Rouge","Violet"], bonne:"Vert", categorie:3},
    {question: "Quelle couleur est dominante dans une forêt ?", reponses:["Vert","Jaune","Rouge","Bleu"], bonne:"Vert", categorie:3},
    {question: "Couleur de l’avocat ?", reponses:["Vert","Jaune","Rouge","Orange"], bonne:"Vert", categorie:3},
    {question: "Quelle couleur est associée à l’écologie ?", reponses:["Vert","Bleu","Jaune","Rouge"], bonne:"Vert", categorie:3},

    // Catégorie Bleu (4)
    {question: "Couleur du ciel par temps clair ?", reponses:["Bleu","Rouge","Vert","Jaune"], bonne:"Bleu", categorie:4},
    {question: "Couleur de l’océan ?", reponses:["Bleu","Vert","Rouge","Jaune"], bonne:"Bleu", categorie:4},
    {question: "Quelle couleur symbolise la tranquillité ?", reponses:["Rouge","Bleu","Jaune","Orange"], bonne:"Bleu", categorie:4},
    {question: "Quel fruit est bleu foncé ?", reponses:["Myrtille","Framboise","Citron","Pomme"], bonne:"Myrtille", categorie:4},
    {question: "Couleur de la robe de Superman ?", reponses:["Bleu","Rouge","Jaune","Vert"], bonne:"Bleu", categorie:4},
    {question: "Couleur des jeans classiques ?", reponses:["Bleu","Noir","Blanc","Rouge"], bonne:"Bleu", categorie:4},
    {question: "Quel animal est bleu dans certaines espèces ?", reponses:["Paon","Chat","Chien","Tigre"], bonne:"Paon", categorie:4},
    {question: "Quelle couleur est souvent utilisée pour l’eau ?", reponses:["Bleu","Vert","Jaune","Rouge"], bonne:"Bleu", categorie:4},
    {question: "Couleur de certaines fleurs comme le bleuet ?", reponses:["Bleu","Rouge","Jaune","Vert"], bonne:"Bleu", categorie:4},
    {question: "Couleur dominante du drapeau de l’UE ?", reponses:["Bleu","Rouge","Vert","Jaune"], bonne:"Bleu", categorie:4},
    {question: "Quelle couleur symbolise la fidélité ?", reponses:["Bleu","Rouge","Jaune","Vert"], bonne:"Bleu", categorie:4},
    {question: "Couleur de certaines pierres précieuses comme le saphir ?", reponses:["Bleu","Rouge","Vert","Jaune"], bonne:"Bleu", categorie:4},

    // Catégorie Violet (5)
    {question: "Quelle couleur symbolise le mystère ?", reponses:["Violet","Rouge","Bleu","Jaune"], bonne:"Violet", categorie:5},
    {question: "Couleur de la lavande ?", reponses:["Violet","Bleu","Rose","Rouge"], bonne:"Violet", categorie:5},
    {question: "Quel fruit est violet foncé ?", reponses:["Prune","Pomme","Citron","Orange"], bonne:"Prune", categorie:5},
    {question: "Couleur d’un raisin violet ?", reponses:["Violet","Vert","Rouge","Jaune"], bonne:"Violet", categorie:5},
    {question: "Couleur des améthystes ?", reponses:["Violet","Bleu","Rouge","Jaune"], bonne:"Violet", categorie:5},
    {question: "Couleur du chardon violet ?", reponses:["Violet","Bleu","Rose","Rouge"], bonne:"Violet", categorie:5},
    {question: "Quelle couleur symbolise la royauté ?", reponses:["Violet","Rouge","Bleu","Jaune"], bonne:"Violet", categorie:5},
    {question: "Couleur du raisin Concord ?", reponses:["Violet","Vert","Rouge","Jaune"], bonne:"Violet", categorie:5},
    {question: "Quelle fleur est violette ?", reponses:["Violette","Rose","Marguerite","Tulipe"], bonne:"Violette", categorie:5},
    {question: "Couleur des pétales d’une orchidée violette ?", reponses:["Violet","Rouge","Bleu","Jaune"], bonne:"Violet", categorie:5},
    {question: "Quelle couleur est souvent associée à la créativité ?", reponses:["Violet","Bleu","Rouge","Jaune"], bonne:"Violet", categorie:5},
    {question: "Couleur des raisins noirs à maturité ?", reponses:["Violet","Rouge","Vert","Jaune"], bonne:"Violet", categorie:5},
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
        const btn =
