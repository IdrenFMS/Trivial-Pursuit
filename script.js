const questions = [
    // Rouge
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

    // Orange
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

    // Jaune
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

    // Vert
    {question: "Couleur de l’herbe ?", reponses:["Bleu","Vert","Jaune","Rouge"], bonne:"Vert", categorie:3},
    {question: "Quelle couleur a une pomme Granny Smith ?", reponses:["Rouge","Jaune","Verte","Bleue"], bonne:"Verte", categorie:3},
    {question: "Couleur des feux de circulation pour avancer ?", reponses:["Rouge","Orange","Vert","
