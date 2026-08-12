// ==========================================
// botão banner
// ==========================================

let btnBanner = document.querySelector(".hero-btn");

if (btnBanner) {
  btnBanner.addEventListener("click", () => {
    let secaoQuemSomos = document.getElementById("quem-somos");

    if (secaoQuemSomos) {
      secaoQuemSomos.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
}


// ==========================================
// sistema de likes
// ==========================================

let buttonsLike = document.querySelectorAll(".btn-like");

console.log(buttonsLike);

buttonsLike.forEach((button) => {
  button.addEventListener("click", () => {

    // captura o span do contador
    let spanLikeCount = button.querySelector(".like-count");

    if (!spanLikeCount) return;

    // valor atual
    let count = Number(spanLikeCount.innerText);

    // incrementa
    count++;

    // atualiza na tela
    spanLikeCount.innerText = count;

    // altera estilos
    if (count > 0) {
      button.classList.remove(
        "text-white",
        "hover:text-red-500",
      );

      button.classList.add("text-red-500");
    }
  });
});


// ==========================================
// menu dinâmico
// ==========================================

let dadosMenu = [
  {
    title: "home",
    link: "fórmula 1.html",
    active: true,
    external: false
  },
  {
    title: "quem somos",
    link: "#quem-somos",
    active: true,
    external: false
  },
  {
    title: "pilotos",
    link: "#pilotos",
    active: true,
    external: false
  },
  {
    title: "contatos",
    link: "#contatos",
    active: true,
    external: false
  }
];

function renderMenu() {

  let menuDesktop = document.querySelector("header nav");
  let menuMobile = document.querySelector("#mobile-menu nav");

  dadosMenu.forEach((itemMenu) => {

    if (itemMenu.active) {

      const opTarget = itemMenu.external
        ? 'target="_blank"'
        : "";

      const linkHtml = `
        <a
          class="text-md p-4 hover:text-red-600 text-white transition duration-300 block"
          href="${itemMenu.link}"
          ${opTarget}
        >
          ${itemMenu.title.toLowerCase()}
        </a>
      `;

      // menu desktop
      if (menuDesktop) {
        menuDesktop.innerHTML += `
          <div>
            ${linkHtml}
          </div>
        `;
      }

      // menu mobile
      if (menuMobile) {
        menuMobile.innerHTML += `
          <div>
            ${linkHtml}
          </div>
        `;
      }
    }
  });
}


// ==========================================
// menu hambúrguer
// ==========================================

const btnMenu = document.getElementById("menu-toggle");
const menuMobile = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");
const overlay = document.getElementById("overlay");

if (btnMenu && menuMobile) {

  btnMenu.addEventListener("click", () => {

    menuMobile.classList.toggle("-translate-x-full");

    if (overlay) {
      overlay.classList.toggle("hidden");
    }

    if (menuMobile.classList.contains("-translate-x-full")) {
      menuIcon.className = "bi bi-list";
    } else {
      menuIcon.className = "bi bi-x-lg";
    }

  });

}


// ==========================================
// fechar menu clicando no overlay
// ==========================================

if (overlay && menuMobile) {

  overlay.addEventListener("click", () => {

    menuMobile.classList.add("-translate-x-full");
    overlay.classList.add("hidden");

    if (menuIcon) {
      menuIcon.className = "bi bi-list";
    }

  });

}


// ==========================================
// fechar menu clicando em um link mobile
// ==========================================

document.addEventListener("click", (event) => {

  if (event.target.closest("#mobile-menu a")) {

    menuMobile.classList.add("-translate-x-full");

    if (overlay) {
      overlay.classList.add("hidden");
    }

    if (menuIcon) {
      menuIcon.className = "bi bi-list";
    }

  }

});


// ==========================================
// inicialização
// ==========================================

renderMenu();