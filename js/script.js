const perguntas = document.querySelectorAll("dt");

perguntas.forEach((pergunta) => {
  pergunta.addEventListener("click", () => {
    const resposta = pergunta.nextElementSibling;

    resposta.classList.toggle("ativar");
  });
});

const links = document.querySelectorAll(".menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);
