/* ==========================================================
   НАСТРОЙКА ПРОЕКТОВ (ТЕБЕ НУЖНО РЕДАКТИРОВАТЬ ТОЛЬКО ЭТОТ БЛОК)
   ========================================================== */
const PROJECTS_CONFIG = [
  {
    gameNum: 1,                  // Номер игры (папки: 1.png, 1_1.png и т.д.)
    title: "Моя первая игра",
    shortDesc: "Краткое описание для карточки на сайте.",
    description: "Полное описание игры.\nМожно писать с переносами строк.\nЗдесь можно указать подробности геймплея.",
    tags: ["JavaScript", "Canvas"],
    github: "https://github.com/username/game1",
    yandexGames: "https://yandex.ru/games/app/123456", // Если нет игры на Яндексе, напиши null
    
    imagesCount: 3,              // Сколько картинок IconsInGame/1_1, 1_2, 1_3
    videosCount: 1,              // Сколько видео VideoInGame/1_1
    
    imgExt: "png",               // Расширение картинок (png, jpg, jpeg, webp)
    vidExt: "mp4"                // Расширение видео (mp4, webm)
  },
  {
    gameNum: 2,
    title: "Моя вторая игра",
    shortDesc: "Описание второй игры для карточки.",
    description: "Полное описание второй игры...",
    tags: ["React", "GameDev"],
    github: "https://github.com/username/game2",
    yandexGames: null,           // Кнопки "Играть" не будет
    
    imagesCount: 2,              // IconsInGame/2_1, 2_2
    videosCount: 0,              // Видео нет
    
    imgExt: "png",               // Если у тебя jpg
    vidExt: "mp4"
  },
   {
    gameNum: 3,
    title: "Моя вторая игра",
    shortDesc: "Описание второй игры для карточки.",
    description: "Полное описание второй игры...",
    tags: ["React", "GameDev"],
    github: "https://github.com/username/game2",
    yandexGames: null,           // Кнопки "Играть" не будет
    
    imagesCount: 2,              // IconsInGame/2_1, 2_2
    videosCount: 0,              // Видео нет
    
    imgExt: "png",               // Если у тебя jpg
    vidExt: "mp4"
  },
    {
    gameNum: 4,
    title: "Моя вторая игра",
    shortDesc: "Описание второй игры для карточки.",
    description: "Полное описание второй игры...",
    tags: ["React", "GameDev"],
    github: "https://github.com/username/game2",
    yandexGames: null,           // Кнопки "Играть" не будет
    
    imagesCount: 2,              // IconsInGame/2_1, 2_2
    videosCount: 0,              // Видео нет
    
    imgExt: "png",               // Если у тебя jpg
    vidExt: "mp4"
  },
  {
    gameNum: 5,
    title: "Моя вторая игра",
    shortDesc: "Описание второй игры для карточки.",
    description: "Полное описание второй игры...",
    tags: ["React", "GameDev"],
    github: "https://github.com/username/game2",
    yandexGames: null,           // Кнопки "Играть" не будет
    
    imagesCount: 2,              // IconsInGame/2_1, 2_2
    videosCount: 0,              // Видео нет
    
    imgExt: "png",               // Если у тебя jpg
    vidExt: "mp4"
  },
   {
    gameNum: 6,
    title: "Моя вторая игра",
    shortDesc: "Описание второй игры для карточки.",
    description: "Полное описание второй игры...",
    tags: ["React", "GameDev"],
    github: "https://github.com/username/game2",
    yandexGames: null,           // Кнопки "Играть" не будет
    
    imagesCount: 2,              // IconsInGame/2_1, 2_2
    videosCount: 0,              // Видео нет
    
    imgExt: "png",               // Если у тебя jpg
    vidExt: "mp4"
  },
   {
    gameNum: 7,
    title: "Моя вторая игра",
    shortDesc: "Описание второй игры для карточки.",
    description: "Полное описание второй игры...",
    tags: ["React", "GameDev"],
    github: "https://github.com/username/game2",
    yandexGames: null,           // Кнопки "Играть" не будет
    
    imagesCount: 2,              // IconsInGame/2_1, 2_2
    videosCount: 0,              // Видео нет
    
    imgExt: "png",               // Если у тебя jpg
    vidExt: "mp4"
  },
   {
    gameNum: 8,
    title: "Моя вторая игра",
    shortDesc: "Описание второй игры для карточки.",
    description: "Полное описание второй игры...",
    tags: ["React", "GameDev"],
    github: "https://github.com/username/game2",
    yandexGames: null,           // Кнопки "Играть" не будет
    
    imagesCount: 2,              // IconsInGame/2_1, 2_2
    videosCount: 0,              // Видео нет
    
    imgExt: "png",               // Если у тебя jpg
    vidExt: "mp4"
  },
   {
    gameNum: 9,
    title: "Моя вторая игра",
    shortDesc: "Описание второй игры для карточки.",
    description: "Полное описание второй игры...",
    tags: ["React", "GameDev"],
    github: "https://github.com/username/game2",
    yandexGames: null,           // Кнопки "Играть" не будет
    
    imagesCount: 2,              // IconsInGame/2_1, 2_2
    videosCount: 0,              // Видео нет
    
    imgExt: "png",               // Если у тебя jpg
    vidExt: "mp4"
  },
   {
    gameNum: 10,
    title: "Моя вторая игра",
    shortDesc: "Описание второй игры для карточки.",
    description: "Полное описание второй игры...",
    tags: ["React", "GameDev"],
    github: "https://github.com/username/game2",
    yandexGames: null,           // Кнопки "Играть" не будет
    
    imagesCount: 2,              // IconsInGame/2_1, 2_2
    videosCount: 0,              // Видео нет
    
    imgExt: "png",               // Если у тебя jpg
    vidExt: "mp4"
  },
  {
    gameNum: 11,
    title: "Моя вторая игра",
    shortDesc: "Описание второй игры для карточки.",
    description: "Полное описание второй игры...",
    tags: ["React", "GameDev"],
    github: "https://github.com/username/game2",
    yandexGames: null,           // Кнопки "Играть" не будет
    
    imagesCount: 2,              // IconsInGame/2_1, 2_2
    videosCount: 0,              // Видео нет
    
    imgExt: "png",               // Если у тебя jpg
    vidExt: "mp4"
  },
    {
    gameNum: 12,
    title: "Моя вторая игра",
    shortDesc: "Описание второй игры для карточки.",
    description: "Полное описание второй игры...",
    tags: ["React", "GameDev"],
    github: "https://github.com/username/game2",
    yandexGames: null,           // Кнопки "Играть" не будет
    
    imagesCount: 2,              // IconsInGame/2_1, 2_2
    videosCount: 0,              // Видео нет
    
    imgExt: "png",               // Если у тебя jpg
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
    github: cfg.github,
    yandexGames: cfg.yandexGames,
    cover: `MainIconGame/${cfg.gameNum}.${cfg.imgExt}`, // Главная картинка карточки
    videos: videos,
    screenshots: screenshots
  };
});


/* ==========================================================
   РЕНДЕР КАРТОЧЕК
   ========================================================== */
const grid = document.getElementById("projectsGrid");

grid.innerHTML = PROJECTS.map(p => `
  <article class="project-card" data-id="${p.id}" tabindex="0" role="button" aria-label="Открыть ${p.title}">
    <div class="project-card__media">
      <!-- Добавил onerror, чтобы если картинки нет, показывалась заглушка -->
      <img src="${p.cover}" alt="${p.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/900x560/121a29/6d8cff?text=Нет+картинки'">
    </div>
    <div class="project-card__body">
      <h3 class="project-card__title">${p.title}</h3>
      <p class="project-card__desc">${p.shortDesc}</p>
    </div>
  </article>
`).join("");

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
const btnGithub    = document.getElementById("btnGithub");

let lastFocused = null;
let currentMediaList = [];

function openProject(id) {
  const project = PROJECTS.find(p => p.id === id);
  if (!project) return;

  lastFocused = document.activeElement;

  /* 1. Название */
  titleEl.textContent = project.title;

  /* 2. Описание и теги */
  descEl.textContent = project.description;
  tagsEl.innerHTML = project.tags.map(t => `<li>${t}</li>`).join("");

  /* 3. Собираем медиа: сначала видео, потом фото */
  currentMediaList = [];
  
  // Видео (VideoInGame)
  if (project.videos && project.videos.length > 0) {
    project.videos.forEach(vid => {
      currentMediaList.push({ type: 'video', src: vid, thumb: project.cover });
    });
  }
  
  // Фото (IconsInGame)
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

  /* 6. Показываем первое медиа (видео или фото) */
  if (currentMediaList.length > 0) {
    showMainMedia(currentMediaList[0]);
  } else {
    mainViewer.innerHTML = '<div style="display:grid;place-items:center;height:100%;color:#666;">Нет медиа</div>';
  }

  /* 7. Кнопки */
  if (project.yandexGames) {
    btnPlay.style.display = "flex";
    btnPlay.href = project.yandexGames;
  } else {
    btnPlay.style.display = "none";
  }

  if (project.github) {
    btnGithub.style.display = "flex";
    btnGithub.href = project.github;
  } else {
    btnGithub.style.display = "none";
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