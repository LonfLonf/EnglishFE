document.getElementById("mostrar").addEventListener("click", () => {
  const nome = document.getElementById("username").value.trim();

  const resultado = document.getElementById("resultado");
  if (nome) {
    resultado.textContent = `Olá, ${nome}! 👋`;
  } else {
    resultado.textContent = "Por favor, digite seu nome.";
  }
});

function showLogin() {
  console.log("Login");
  document.getElementById("loginForm").classList.add("hidden");
  document.getElementById("registerForm").classList.remove("hidden");
}

function showRegister() {
  console.log("Registeer");
  document.getElementById("registerForm").classList.add("hidden");
  document.getElementById("loginForm").classList.remove("hidden");
}
