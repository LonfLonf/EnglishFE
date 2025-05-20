document.getElementById("mostrar").addEventListener("click", () => {
  const nome = document.getElementById("username").value.trim();

  const resultado = document.getElementById("resultado");
  if (nome) {
    resultado.textContent = `Olá, ${nome}! 👋`;
  } else {
    resultado.textContent = "Por favor, digite seu nome.";
  }
});
