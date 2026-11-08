/* ==========================================================
   НАСТРОЙКА ПРОЕКТОВ (ТЕБЕ НУЖНО РЕДАКТИРОВАТЬ ТОЛЬКО ЭТОТ БЛОК)
   ========================================================== */
const PROJECTS_CONFIG = [
  {
    gameNum: 1,
    title: "Цифровой цирк шутер арена",
    shortDesc: "Арена-шутер в неоновом цифровом цирке: волны врагов и быстрый бой.",
    description: "Сделано на Unity.\nСрок разработки: 1 неделя.\nПлатформа: Яндекс Игры.",
    tags: ["Unity", "Yandex Games"],
    yandexGames: "https://yandex.ru/games/app/647404?draft=true&lang=ru",
    imagesCount: 3,
    videosCount: 1,
    imgExt: "png",
    vidExt: "mp4"
  },
  {
    gameNum: 2,
    title: "Экшен шутер-зомби",
    shortDesc: "Экшен-шутер про выживание против толп зомби.",
    description: "Сделано на Unity.\nСрок разработки: 2 недели.\nПлатформа: Яндекс Игры.",
    tags: ["Unity", "Yandex Games"],
    yandexGames: "https://yandex.ru/games/app/647980?draft=true&lang=ru",
    imagesCount: 3,
    videosCount: 1,
    imgExt: "png",
    vidExt: "mp4"
  },
  {
    gameNum: 3,
    title: "Майнкрафт нубик шутер - руби их всех!",
    shortDesc: "Шутер в блочной стилистике Minecraft: руби врагов и выживай.",
    description: "Сделано на Unity.\nСрок разработки: 2 недели.\nПлатформа: Яндекс Игры.",
    tags: ["Unity", "Yandex Games"],
    yandexGames: "https://yandex.ru/games/app/648280?draft=true&lang=ru",
    imagesCount: 3,
    videosCount: 1,
    imgExt: "png",
    vidExt: "mp4"
  },
  {
    gameNum: 4,
    title: "Раннер Шутер - Зомби!",
    shortDesc: "Бесконечный раннер с отстрелом зомби на бегу.",
    description: "Сделано на Unity.\nСрок разработки: 4 дня.\nПлатформа: Яндекс Игры.",
    tags: ["Unity", "Yandex Games"],
    yandexGames: "https://games.yandex.ru/console/application/328795?new=true#application-info-draft",
    imagesCount: 3,
    videosCount: 1,
    imgExt: "png",
    vidExt: "mp4"
  },
  {
    gameNum: 5,
    title: "Скибиди Туалеты раннера",
    shortDesc: "Раннер по мотивам Скибиди Туалетов: уворачивайся и беги.",
    description: "Сделано на Unity.\nСрок разработки: 1 неделя.\nПлатформа: Яндекс Игры.",
    tags: ["Unity", "Yandex Games"],
    yandexGames: null,
    imagesCount: 3,
    videosCount: 1,
    imgExt: "png",
    vidExt: "mp4"
  },
  {
    gameNum: 6,
    title: "Скибиди туалеты кликер",
    shortDesc: "Кликер в теме Скибиди Туалетов: качай прогресс и открывай новое.",
    description: "Сделано на Unity.\nСрок разработки: 5 дней.\nПлатформа: Яндекс Игры.",
    tags: ["Unity", "Yandex Games"],
    yandexGames: "https://yandex.ru/games/app/647989?draft=true&lang=ru",
    imagesCount: 3,
    videosCount: 1,
    imgExt: "png",
    vidExt: "mp4"
  },
  {
    gameNum: 7,
    title: "Шутер с механикой разрезов",
    shortDesc: "Шутер, где врагов можно буквально разрезать на части.",
    description: "Сделано на Unity.\nСрок разработки: 2 недели.\nПлатформа: Яндекс Игры.",
    tags: ["Unity", "Yandex Games"],
    yandexGames: "https://yandex.ru/games/app/648000?draft=true&lang=ru",
    imagesCount: 3,
    videosCount: 1,
    imgExt: "png",
    vidExt: "mp4"
  },
  {
    gameNum: 8,
    title: "Игра на подобие «Укради брейнрот»",
    shortDesc: "Аркада в духе «Укради брейнрот»: собирай, кради и уходи от погони.",
    description: "Сделано на Unity.\nСрок разработки: 3 недели.\nПлатформа: Яндекс Игры.",
    tags: ["Unity", "Yandex Games"],
    yandexGames: "https://yandex.ru/games/app/pobedi-i-soberi-breinrot-492991",
    imagesCount: 3,
    videosCount: 1,
    imgExt: "png",
    vidExt: "mp4"
  },
  {
    gameNum: 9,
    title: "Шутер от 1 лица",
    shortDesc: "Шутер от первого лица: прицелься, стреляй, выживай.",
    description: "Сделано на Unity.\nСрок разработки: 2 недели.\nПлатформа: Яндекс Игры.",
    tags: ["Unity", "Yandex Games"],
    yandexGames: "https://yandex.ru/games/app/381884?draft=true&lang=ru",
    imagesCount: 3,
    videosCount: 1,
    imgExt: "png",
    vidExt: "mp4"
  },
  {
    gameNum: 10,
    title: "Гонки с разрушаемостью",
    shortDesc: "Гонки, где машины и окружение разрушаются от ударов.",
    description: "Сделано на Unity.\nСрок разработки: 5 дней.\nПлатформа: Яндекс Игры.",
    tags: ["Unity", "Yandex Games"],
    yandexGames: "https://yandex.ru/games/app/ded-i-vnuk-poliot-cherez-rot-362437",
    imagesCount: 3,
    videosCount: 1,
    imgExt: "png",
    vidExt: "mp4"
  },
  {
    gameNum: 11,
    title: "Гонки с разрушаемостью 2",
    shortDesc: "Продолжение разрушаемых гонок: больше трасс и крашей.",
    description: "Сделано на Unity.\nСрок разработки: 2 недели.\nПлатформа: Яндекс Игры.",
    tags: ["Unity", "Yandex Games"],
    yandexGames: "https://yandex.ru/games/app/360071?draft=true&lang=ru",
    imagesCount: 3,
    videosCount: 1,
    imgExt: "png",
    vidExt: "mp4"
  },
  {
    gameNum: 12,
    title: "Адский раннер",
    shortDesc: "Раннер в аду: препятствия, скорость и огонь.",
    description: "Сделано на Unity.\nСрок разработки: 3 недели (+1 неделя для Google Play).\nПлатформы: Яндекс Игры, Google Play.",
    tags: ["Unity", "Yandex Games", "Google Play"],
    yandexGames: "https://yandex.ru/games/app/225815?draft=true&lang=ru",
    imagesCount: 3,
    videosCount: 1,
    imgExt: "png",
    vidExt: "mp4"
  },
  {
    // 13-я игра — последняя в списке, на сайте будет по центру
    gameNum: 13,
    title: "Командный шутер арена",
    shortDesc: "Арена-шутер с командными боями и быстрыми раундами.",
    description: "Сделано на Unity.\nСрок разработки: 2 недели.\nПлатформа: Яндекс Игры.",
    tags: ["Unity", "Yandex Games"],
    yandexGames: "https://yandex.ru/games/app/648069?draft=true&lang=ru",
    imagesCount: 3,
    videosCount: 1,
    imgExt: "png",
    vidExt: "mp4"
  },
];

/* ==========================================================
   АВТО-СБОРКА ПУТЕЙ (НИЖЕ НИЧЕГО НЕ МЕНЯЙ)
   ========================================================== */
const PROJECTS = PROJECTS_CONFIG.map(cfg => {
  const videos = [];
  for (let i = 1; i <= cfg.videosCount; i++) {
    videos.push(`VideoInGame/${cfg.gameNum}_${i}.${cfg.vidExt}`);
  }

  const screenshots = [];
  for (let i = 1; i <= cfg.imagesCount; i++) {
    screenshots.push(`IconsInGame/${cfg.gameNum}_${i}.${cfg.imgExt}`);
  }

  return {
    id: `game-${cfg.gameNum}`,
    title: cfg.title,
    shortDesc: cfg.shortDesc,
    description: cfg.description,
    tags: cfg.tags,
    yandexGames: cfg.yandexGames,
    cover: `MainIconGame/${cfg.gameNum}.${cfg.imgExt}`,
    videos: videos,
    screenshots: screenshots
  };
});


/* ==========================================================
   ЦЕНТРИРОВАНИЕ ПОСЛЕДНЕЙ КАРТОЧКИ (13-й)
   ----------------------------------------------------------
   Если у тебя сетка из 3 колонок — оставь как есть.
   Если из 4 колонок — поменяй строку ниже на:
       .project-card--last { grid-column: 2 / 4; }
   ========================================================== */
const lastCardStyle = document.createElement("style");
lastCardStyle.textContent = `
  .project-card--last {
    grid-column: 2;
  }
`;
document.head.appendChild(lastCardStyle);


/* ==========================================================
   РЕНДЕР КАРТОЧЕК
   ========================================================== */
const grid = document.getElementById("projectsGrid");

grid.innerHTML = PROJECTS.map((p, idx) => {
  const isLast = idx === PROJECTS.length - 1;
  return `
  <article class="project-card${isLast ? ' project-card--last' : ''}" data-id="${p.id}" tabindex="0" role="button" aria-label="Открыть ${p.title}">
    <div class="project-card__media">
      <img src="${p.cover}" alt="${p.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/900x560/121a29/6d8cff?text=Нет+картинки'">
    </div>
    <div class="project-card__body">
      <h3 class="project-card__title">${p.title}</h3>
      <p class="project-card__desc">${p.shortDesc}</p>
    </div>
  </article>
  `;
}).join("");

grid.querySelectorAll(".project-card").forEach(card => {
  const open = () => openProject(card.dataset.id);
  card.addEventListener("click", open);
  card.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
  });
});


/* ==========================================================
   МОДАЛКА
   ========================================================== */
const modal        = document.getElementById("projectModal");
const titleEl      = document.getElementById("projectTitle");
const mainViewer   = document.getElementById("mainViewer");
const thumbStrip   = document.getElementById("thumbnailStrip");
const descEl       = document.getElementById("projectDesc");
const tagsEl       = document.getElementById("projectTags");
const btnPlay      = document.getElementById("btnPlay");

let lastFocused = null;
let currentMediaList = [];

function openProject(id) {
  const project = PROJECTS.find(p => p.id === id);
  if (!project) return;

  lastFocused = document.activeElement;

  /* 1. Название */
  titleEl.textContent = project.title;

  /* 2. Описание и теги (innerHTML + <br>, чтобы переносы \n работали) */
  descEl.innerHTML = (project.description || "").replace(/\n/g, "<br>");
  tagsEl.innerHTML = project.tags.map(t => `<li>${t}</li>`).join("");

  /* 3. Собираем медиа: сначала видео, потом фото */
  currentMediaList = [];

  if (project.videos && project.videos.length > 0) {
    project.videos.forEach(vid => {
      currentMediaList.push({ type: 'video', src: vid, thumb: project.cover });
    });
  }

  if (project.screenshots && project.screenshots.length > 0) {
    project.screenshots.forEach(src => {
      currentMediaList.push({ type: 'image', src: src, thumb: src });
    });
  }

  /* 4. Рендерим миниатюры */
  thumbStrip.innerHTML = currentMediaList.map((media, index) => `
    <div class="thumbnail ${media.type === 'video' ? 'is-video' : ''} ${index === 0 ? 'active' : ''}"
         data-index="${index}">
      <img src="${media.thumb}" alt="Медиа ${index + 1}">
    </div>
  `).join("");

  /* 5. Слушатели на миниатюры */
  thumbStrip.querySelectorAll(".thumbnail").forEach(thumb => {
    thumb.addEventListener("click", () => {
      thumbStrip.querySelectorAll(".thumbnail").forEach(t => t.classList.remove("active"));
      thumb.classList.add("active");
      const index = parseInt(thumb.dataset.index, 10);
      showMainMedia(currentMediaList[index]);
    });
  });

  /* 6. Показываем первое медиа */
  if (currentMediaList.length > 0) {
    showMainMedia(currentMediaList[0]);
  } else {
    mainViewer.innerHTML = '<div style="display:grid;place-items:center;height:100%;color:#666;">Нет медиа</div>';
  }

  /* 7. Кнопка «Играть» */
  if (project.yandexGames) {
    btnPlay.style.display = "flex";
    btnPlay.href = project.yandexGames;
  } else {
    btnPlay.style.display = "none";
  }

  /* 8. Открытие */
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  modal.querySelector(".modal__close").focus();
}

/* Функция подстановки медиа в большое окно */
function showMainMedia(mediaItem) {
  if (mediaItem.type === 'video') {
    mainViewer.innerHTML = `
      <video src="${mediaItem.src}" controls playsinline autoplay muted></video>
    `;
  } else {
    mainViewer.innerHTML = `
      <img src="${mediaItem.src}" alt="Скриншот" id="mainImage">
    `;
    document.getElementById("mainImage").addEventListener("click", (e) => {
      openLightbox(e.target.src);
    });
  }
}

function closeProject() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";

  const video = mainViewer.querySelector('video');
  if (video) video.pause();

  mainViewer.innerHTML = "";
  thumbStrip.innerHTML = "";

  if (lastFocused) lastFocused.focus();
}

modal.querySelectorAll("[data-close]").forEach(el => {
  el.addEventListener("click", closeProject);
});


/* ==========================================================
   ЛАЙТБОКС
   ========================================================== */
const lightbox    = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");

function openLightbox(src) {
  lightboxImg.src = src;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImg.src = "";
}

lightbox.addEventListener("click", e => {
  if (e.target === lightbox || e.target.closest("[data-lightbox-close]")) {
    closeLightbox();
  }
});


/* ==========================================================
   КЛАВИАТУРА И ВКЛАДКИ
   ========================================================== */
document.addEventListener("keydown", e => {
  if (lightbox.classList.contains("open")) {
    if (e.key === "Escape") closeLightbox();
    return;
  }
  if (modal.classList.contains("open") && e.key === "Escape") {
    closeProject();
  }
});

const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const name = tab.dataset.tab;
    tabs.forEach(t => t.classList.toggle("active", t === tab));
    panels.forEach(p => p.classList.toggle("active", p.id === name));
  });
});