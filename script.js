
}

// ==========================
// Génération d'un gros pack de questions (≈172 questions)
// ==========================
function buildPack() {
  // --- Géographie : capitales ---
  const capitals = [
    ["France", "Paris"], ["Italie", "Rome"], ["Espagne", "Madrid"], ["Allemagne", "Berlin"], ["Portugal", "Lisbonne"],
    ["Suisse", "Berne"], ["Autriche", "Vienne"], ["Belgique", "Bruxelles"], ["Pays-Bas", "Amsterdam"], ["Danemark", "Copenhague"],
    ["Suède", "Stockholm"], ["Norvège", "Oslo"], ["Finlande", "Helsinki"], ["Islande", "Reykjavik"], ["Royaume-Uni", "Londres"],
    ["Irlande", "Dublin"], ["Pologne", "Varsovie"], ["Tchéquie", "Prague"], ["Hongrie", "Budapest"], ["Grèce", "Athènes"],
    ["Turquie", "Ankara"], ["Russie", "Moscou"], ["États-Unis", "Washington"], ["Canada", "Ottawa"], ["Mexique", "Mexico"],
    ["Brésil", "Brasilia"], ["Argentine", "Buenos Aires"], ["Chili", "Santiago"], ["Colombie", "Bogota"], ["Pérou", "Lima"],
    ["Maroc", "Rabat"], ["Algérie", "Alger"], ["Tunisie", "Tunis"], ["Égypte", "Le Caire"], ["Afrique du Sud", "Pretoria"],
    ["Kenya", "Nairobi"], ["Éthiopie", "Addis-Abeba"], ["Nigéria", "Abuja"], ["Chine", "Pékin"], ["Japon", "Tokyo"],
    ["Corée du Sud", "Séoul"], ["Inde", "New Delhi"], ["Pakistan", "Islamabad"], ["Indonésie", "Jakarta"], ["Australie", "Canberra"],
    ["Nouvelle-Zélande", "Wellington"], ["Arabie saoudite", "Riyad"], ["Émirats arabes unis", "Abou Dabi"], ["Iran", "Téhéran"], ["Irak", "Bagdad"],
    // Ajouts pour atteindre ~172
    ["Venezuela", "Caracas"], ["Uruguay", "Montevideo"], ["Bolivie", "Sucre"], ["Paraguay", "Asunción"], ["Équateur", "Quito"],
    ["Sénégal", "Dakar"], ["Côte d'Ivoire", "Yamoussoukro"], ["Ghana", "Accra"], ["Cambodge", "Phnom Penh"], ["Vietnam", "Hanoï"],
  ];

  // --- Histoire : événements ---
  const history = [
    ["la Révolution française", "1789"], ["la chute du Mur de Berlin", "1989"], ["la découverte de l'Amérique par Colomb", "1492"],
    ["la fin de la Première Guerre mondiale (traité de Versailles)", "1919"], ["la prise de la Bastille", "1789"],
    ["la bataille de Waterloo", "1815"], ["la déclaration d'indépendance des États-Unis", "1776"], ["l'invention de l'imprimerie par Gutenberg (env.)", "1450"],
    ["la révolution russe (février)", "1917"], ["la création de l'ONU", "1945"], ["la Renaissance commence (env.)", "1400"],
    ["le couronnement de Charlemagne", "800"], ["le traité de Tordesillas", "1494"], ["la guerre de Cent Ans commence (env.)", "1337"],
    ["la découverte de la pénicilline (Fleming)", "1928"], ["la Commune de Paris", "1871"], ["l'abolition de l'esclavage en France", "1848"],
    ["la Seconde Guerre mondiale commence", "1939"], ["la Seconde Guerre mondiale se termine", "1945"], ["la Première croisade", "1096"],
    // Ajouts
    ["la victoire de Marignan", "1515"], ["la chute de Constantinople", "1453"], ["la signature de la Magna Carta", "1215"],
    ["le traité d'Utrecht (1713)", "1713"], ["la proclamation de la République en France (1792)", "1792"],
  ];

  // --- Sciences : symboles d'éléments ---
  const elements = [
    ["Hydrogène", "H"], ["Hélium", "He"], ["Lithium", "Li"], ["Carbone", "C"], ["Azote", "N"], ["Oxygène", "O"], ["Sodium", "Na"], ["Magnésium", "Mg"], ["Aluminium", "Al"], ["Silicium", "Si"],
    ["Phosphore", "P"], ["Soufre", "S"], ["Chlore", "Cl"], ["Potassium", "K"], ["Calcium", "Ca"], ["Fer", "Fe"], ["Cuivre", "Cu"], ["Zinc", "Zn"], ["Argent", "Ag"], ["Or", "Au"],
    ["Étain", "Sn"], ["Plomb", "Pb"], ["Mercure", "Hg"], ["Iode", "I"], ["Uranium", "U"],
    // Ajouts
    ["Platine", "Pt"], ["Nickel", "Ni"], ["Bore", "B"], ["Chrome", "Cr"],
  ];

  // --- Arts & Lettres : œuvres → auteur ---
  const arts = [
    ["Les Misérables", "Victor Hugo"], ["Le Petit Prince", "Antoine de Saint-Exupéry"], ["Madame Bovary", "Gustave Flaubert"],
    ["Le Rouge et le Noir", "Stendhal"], ["Germinal", "Émile Zola"], ["L'Étranger", "Albert Camus"], ["Candide", "Voltaire"],
    ["Les Fleurs du mal", "Charles Baudelaire"], ["À la recherche du temps perdu", "Marcel Proust"], ["La Princesse de Clèves", "Madame de La Fayette"],
    ["Dom Juan", "Molière"], ["Phèdre", "Racine"], ["Cyrano de Bergerac", "Edmond Rostand"], ["Le Cid", "Corneille"], ["La Condition humaine", "André Malraux"],
    ["L'Assommoir", "Émile Zola"], ["Bel-Ami", "Guy de Maupassant"], ["La Peste", "Albert Camus"], ["L'Île mystérieuse", "Jules Verne"], ["Notre-Dame de Paris", "Victor Hugo"],
    // Ajouts
    ["Le Père Goriot", "Honoré de Balzac"], ["Le Horla", "Guy de Maupassant"], ["La Chartreuse de Parme", "Stendhal"], ["La Symphonie pastorale", "André Gide"],
  ];

  // --- Sports : faits & règles ---
  const sports = [
    ["Combien de joueurs sur le terrain par équipe au football (soccer)?", "11"],
    ["Combien de points vaut un essai au rugby à XV?", "5"],
    ["Quel tournoi de tennis se joue sur gazon?", "Wimbledon"],
    ["Surface de Roland-Garros?", "Terre battue"],
    ["Nombre d'anneaux olympiques sur le logo?", "5"],
    ["Distance d'un marathon (en km)?", "42,195"],
    ["Sport utilisant un fleuret?", "Escrime"],
    ["Ville des JO d'été 1992?", "Barcelone"],
    ["Nombre de quarts-temps en basket FIBA?", "4"],
    ["Surnom d'Usain Bolt?", "La Foudre"],
    ["Combien de grands chelems au tennis masculin (sets gagnants)?", "3 sur 5"],
    ["Instrument utilisé au biathlon avec le ski?", "Carabine"],
    ["Surface de l'US Open (depuis 2020)?", "Dur"],
    ["Nombre de joueurs au handball par équipe sur le terrain?", "7"],
    ["Quel sport se joue avec un volant?", "Badminton"],
    // Ajouts
    ["Durée d'un match de handball (minutes)?", "60"], ["Combien de joueurs dans une équipe de hockey sur glace?", "6"], ["Distance d'un 100m sprint?", "100"], ["Combien de clubs en Ligue 1 (France)?", "20"],
  ];

  // --- Divertissement : œuvres/films → auteur/réalisateur ---
  const entertainment = [
    ["Inception (réalisateur)", "Christopher Nolan"], ["Le Fabuleux Destin d'Amélie Poulain (réalisateur)", "Jean-Pierre Jeunet"],
    ["Star Wars V: L'Empire contre-attaque (phrase 'Je suis ton père') — réalisateur", "Irvin Kershner"], ["Harry Potter (héros principal)", "Harry Potter"],
    ["One Piece (auteur)", "Eiichiro Oda"], ["Album 'Lemonade' (artiste)", "Beyoncé"], ["Studio de Mickey Mouse", "Disney"], ["Ville de Springfield (série)", "Les Simpson"],
    ["Réseau social aux vidéos courtes défilantes", "TikTok"], ["Licence Nintendo située à Hyrule", "Zelda"], ["Film 'Parasite' (réalisateur)", "Bong Joon-ho"], ["Série avec la famille Stark", "Game of Thrones"],
    ["Saga 'Le Seigneur des Anneaux' (auteur)", "J. R. R. Tolkien"], ["Matrix (réal.)", "Lana & Lilly Wachowski"], ["Titanic (réal.)", "James Cameron"],
    // Ajouts
    ["Réalisateur de 'Pulp Fiction'", "Quentin Tarantino"], ["Auteur de 'Akira'", "Katsuhiro Otomo"], ["Actrice principale de 'La Reine des Neiges' (voix) — Elsa", "Idina Menzel"],
  ];

  // fabrique des questions à choix multiples à partir des couples [clef, réponse]
  let questions = [];

  // Géographie (capitale du pays X ?)
  capitals.forEach(([country, capital], idx) => {
    const optionsBase = capitals.map(([, c]) => c);
    const correctIndex = optionsBase.indexOf(capital);
    const distractors = pickN(optionsBase, 3, correctIndex);
    const opts = shuffle([capital, ...distractors]).slice(0, 4);
    questions.push({
      id: `G-${idx+1}`,
      categorie: "geographie",
      question: `Quelle est la capitale de ${country} ?`,
      answer: capital,
      options: opts,
    });
  });

  // Histoire (en quelle année a eu lieu X ?)
  history.forEach(([event, year], idx) => {
    const optionsBase = history.map(([, y]) => y);
    const correctIndex = optionsBase.indexOf(year);
    const distractors = pickN(optionsBase, 3, correctIndex);
    const opts = shuffle([year, ...distractors]).slice(0, 4);
    questions.push({
      id: `H-${idx+1}`,
      categorie: "histoire",
      question: `En quelle année a eu lieu ${event} ?`,
      answer: year,
      options: opts,
    });
  });

  // Sciences (symbole de l'élément X ?)
  elements.forEach(([name, symbol], idx) => {
    const optionsBase = elements.map(([, s]) => s);
    const correctIndex = optionsBase.indexOf(symbol);
    const distractors = pickN(optionsBase, 3, correctIndex);
    const opts = shuffle([symbol, ...distractors]).slice(0, 4);
    questions.push({
      id: `S-${idx+1}`,
      categorie: "sciences",
      question: `Quel est le symbole chimique de ${name} ?`,
      answer: symbol,
      options: opts,
    });
  });

  // Arts & Lettres (qui a écrit X ?)
  arts.forEach(([work, author], idx) => {
    const optionsBase = arts.map(([, a]) => a);
    const correctIndex = optionsBase.indexOf(author);
    const distractors = pickN(optionsBase, 3, correctIndex);
    const opts = shuffle([author, ...distractors]).slice(0, 4);
    questions.push({
      id: `A-${idx+1}`,
      categorie: "arts",
      question: `Qui est l'auteur ou l'autrice de « ${work} » ?`,
      answer: author,
      options: opts,
    });
  });

  // Sports (QA directes)
  sports.forEach(([q, a], idx) => {
    const base = Array.from(new Set([...sports.map(([, x]) => x), "10", "12", "3", "2", "6", "Herbe", "Gazon", "Terre battue", "Dur"]));
    const correctIndex = base.indexOf(a);
    const distractors = pickN(base, 3, correctIndex);
    const opts = shuffle([a, ...distractors]).slice(0, 4);
    questions.push({ id: `SP-${idx+1}`, categorie: "sports", question: q, answer: a, options: opts });
  });

  // Divertissement
  entertainment.forEach(([q, a], idx) => {
    const base = Array.from(new Set([...entertainment.map(([, x]) => x), "Spielberg", "Ridley Scott", "Adele", "Rihanna", "Marseille", "Mario", "Metroid"]));
    const correctIndex = base.indexOf(a);
    const distractors = pickN(base, 3, correctIndex);
    const opts = shuffle([a, ...distractors]).slice(0, 4);
    questions.push({ id: `D-${idx+1}`, categorie: "divertissement", question: q, answer: a, options: opts });
  });

  // Mélange final
  return shuffle(questions);
}

// ==========================
// Persistance locale
// ==========================
const LS_KEY = (k) => `tp-fr:${k}`;
const saveLS = (k, v) => {
  try { localStorage.setItem(LS_KEY(k), JSON.stringify(v)); } catch {}
};
const loadLS = (k, fallback) => {
  try { const v = localStorage.getItem(LS_KEY(k)); return v ? JSON.parse(v) : fallback; } catch { return fallback; }
};

// ==========================
// Composant principal
// ==========================
export default function App(){
  const [pack, setPack] = useState(() => buildPack());
  const [queues, setQueues] = useState(() => makeQueues(pack));
  const [score, setScore] = useState(() => loadLS("score", 0));
  const [earned, setEarned] = useState(() => loadLS("earned", emptyEarned()));
  const [combo, setCombo] = useState(0);
  const [timer, setTimer] = useState(DEFAULT_TIMER);
  const [current, setCurrent] = useState(null); // {catKey, q}
  const [running, setRunning] = useState(false);
  const [configTime, setConfigTime] = useState(DEFAULT_TIMER);

  useEffect(()=> saveLS("score", score), [score]);
  useEffect(()=> saveLS("earned", earned), [earned]);


