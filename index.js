// Base de dados dos 7 jogos (2017 - 2026)
const gamesData = [
  {
    id: 1,
    title: "Elden Ring",
    rating: 5,
    year: 2022,
    description: "Um RPG de ação num mundo aberto sombrio de fantasia criado por Hidetaka Miyazaki e George R. R. Martin.",
    platforms: "PC, PS4, PS5, Xbox One, Xbox Series X/S",
    stores: "Steam, PlayStation Store, Microsoft Store",
    specs: "Mínimo: i5-8400 / GTX 1060 (3GB) / 12GB RAM. Recomendado: i7-8700K / GTX 1070 (8GB) / 16GB RAM."
  },
  {
    id: 2,
    title: "God of War Ragnarök",
    rating: 5,
    year: 2022,
    description: "Kratos e Atreus embarcam em uma jornada mítica por cada um dos Nove Reinos em busca de respostas.",
    platforms: "PS4, PS5, PC",
    stores: "PlayStation Store, Steam, Epic Games Store",
    specs: "Mínimo: i5-4690k / GTX 1060 (6GB) / 8GB RAM. Recomendado: i7-7700k / RTX 2060 / 16GB RAM."
  },
  {
    id: 3,
    title: "The Legend of Zelda: Tears of the Kingdom",
    rating: 5,
    year: 2023,
    description: "Uma épica aventura pelas terras e céus de Hyrule com novas habilidades para criar veículos e ferramentas.",
    platforms: "Nintendo Switch",
    stores: "Nintendo eShop, Lojas Físicas",
    specs: "Nativa do console Nintendo Switch."
  },
  {
    id: 4,
    title: "Baldur's Gate 3",
    rating: 5,
    year: 2023,
    description: "Um RPG de regras de D&D ambientado nos Reinos Esquecidos com narrativa rica em escolhas e consequências.",
    platforms: "PC, PS5, Xbox Series X/S",
    stores: "Steam, GOG, PlayStation Store, Microsoft Store",
    specs: "Mínimo: i5-4690 / GTX 970 / 8GB RAM. Recomendado: i7-8700K / RTX 2060 Super / 16GB RAM."
  },
  {
    id: 5,
    title: "Black Myth: Wukong",
    rating: 5,
    year: 2024,
    description: "RPG de ação baseado na mitologia chinesa e na jornada do Rei Macaco.",
    platforms: "PC, PS5, Xbox Series X/S",
    stores: "Steam, Epic Games Store, PlayStation Store",
    specs: "Mínimo: i5-8400 / GTX 1060 (6GB) / 16GB RAM. Recomendado: i7-9700 / RTX 2060 / 16GB RAM."
  },
  {
    id: 6,
    title: "Grand Theft Auto VI",
    rating: 5,
    year: 2025,
    description: "Retorno ao estado de Leonida em uma história focada no duo criminoso Lucia e Jason.",
    platforms: "PS5, Xbox Series X/S",
    stores: "PlayStation Store, Microsoft Store",
    specs: "Exclusivo para consoles de nova geração."
  },
  {
    id: 7,
   title: "Hollow knight",
   rating: 5,
   year:2017,
   description: "Um metroidvania 2D com foco em exploração não lienar, combate desafiador com espada (Nail), magia de almas e a descoberta dos segredos do reino decadente através de detalher do cenário de NPCs",
   platforms: "PC, Nintedo Switch, Playstation 4 e Xobox One",
   stores: "Steam, Microsfot Store, Playstation Store, Nintendo eShop",
   specs: "Mínimos: Intel Core I3-3240/AMD FX 4300, 4GB de RAM, GTX 560 Ti (1 GB)/AMD HD 7750 (1 GB) Recomendados: Intel Core I5-3470, 8GB de RAM, GTX 1050 (2 GB)/ AMD R9 380 (2 GB)",
  },
];

// Preenche o restante dos 50 jogos dinamicamente
for (let i = 7; i <= 6; i++) {
  const years = [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026];
  const ratings = [4, 5];
  const yearChoice = years[i % years.length];
  const ratingChoice = ratings[i % ratings.length];
  
  gamesData.push({
    id: i,
    title: `Jogo Destaque Top #${i}`,
    rating: ratingChoice,
    year: yearChoice,
    description: `Este é um título demonstrativo que ocupa a posição #${i} na lista dos mais bem avaliados entre 2022 e 2026.`,
    platforms: "PC, PS5, Xbox Series X/S",
    stores: "Steam, Epic Games Store",
    specs: "Mínimo: Processador Quad-Core / GTX 1050 / 8GB RAM. Recomendado: Octa-Core / RTX 3060 / 16GB RAM."
  });
}

// Renderização da lista
const gamesListContainer = document.getElementById("games-list");
const modal = document.getElementById("game-modal");
const closeBtn = document.getElementById("close-btn");

function getStarsHtml(rating) {
  return "★".repeat(rating) + "☆".repeat(5 - rating);
}

function renderGames() {
  gamesListContainer.innerHTML = "";
  
  gamesData.forEach(game => {
    const card = document.createElement("div");
    card.classList.add("game-card");
    card.innerHTML = `
      <span class="game-title">${game.id}. ${game.title} (${game.year})</span>
      <span class="stars">${getStarsHtml(game.rating)}</span>
    `;
    card.addEventListener("click", () => openModal(game));
    gamesListContainer.appendChild(card);
  });
}

function openModal(game) {
  document.getElementById("modal-title").innerText = game.title;
  document.getElementById("modal-rating").innerText = getStarsHtml(game.rating);
  document.getElementById("modal-year").innerText = game.year;
  document.getElementById("modal-description").innerText = game.description;
  document.getElementById("modal-platforms").innerText = game.platforms;
  document.getElementById("modal-stores").innerText = game.stores;
  document.getElementById("modal-specs").innerText = game.specs;
  
  modal.classList.remove("hidden");
}

closeBtn.addEventListener("click", () => modal.classList.add("hidden"));
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.add("hidden");
});

// Inicialização
renderGames();
