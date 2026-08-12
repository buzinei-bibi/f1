// aula de java script - 09/06/2026

// descrição da atividade
// criar um menu dinânimo a partir do arquivo json utilizando o fetch
// consultar os dados do back-end
// consulta o back-end em dados manipulavéis pelo js

// constante para simulação de um endpoint back-end
const menuApi = "../back-end/menu.json";

// função assimcrona para consulta de back-end
async function renderMenu() {
  // 1- consultar dados do back-end
  let resposta = await fetch(menuApi);

  // 2 - converter consulta do back-end em dados manipuláveis pelo js
  let dadosMenu = await resposta.json();

  // 3 - consultar dom e pegar elementos do menu html
  let navMenus = document.querySelectorAll("nav");
  // console.log (navMenus); // análise de funcionamento

  // percorre os menus de navegação (nav) que tiveram na página
  // consultar dom e pegar elementos do menu html
  // cada navmenu é um menu que eu preciso inserir os dados da consulta back-end

  navMenus.forEach((navMenus) => {
    console.log(navMenus);

    // 4 - injetar dados do menu json em cada nav
    dadosMenu.forEach((itemMenu) => {
      if (itemMenu.active) {
        const opTarget = itemMenu.external ? 'target="_blank"' : "";
        navMenus.innerHTML += `
          <a href="${itemMenu.link}"
            class="transition duration-300 hover:text-red-400" ${opTarget}>
            ${itemMenu.title}
            </a>
        `;
      }
    });
  });
}
renderMenu();

let menutoggle = document.getElementById("menu-toggle");
let menuMobile = document.getElementById("menu-mobile");
let overlay = document.getElementById("overlay");

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("menu-toggle");
  const menu = document.getElementById("mobile-menu");
  const overlay = document.getElementById("overlay");
  const icon = document.getElementById("menu-icon");

  btn.onclick = function () {
    menu.classList.toggle("-translate-x-full");
    overlay.classList.toggle("hidden");
    icon.classList.toggle("bi-list");
    icon.classList.toggle("bi-x-lg");
  };

  overlay.onclick = function () {
    menu.classList.add("-translate-x-full");
    overlay.classList.add("hidden");
    icon.classList.add("bi-list");
    icon.classList.remove("bi-x-lg");
  };
});
