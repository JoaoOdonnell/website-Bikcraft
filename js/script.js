const perguntas = document.querySelectorAll("dt");

perguntas.forEach((pergunta) => {
  pergunta.addEventListener("click", () => {
    const resposta = pergunta.nextElementSibling;

    resposta.classList.toggle("ativar");
  });
});
