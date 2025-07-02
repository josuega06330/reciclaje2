const btnTema = document.getElementById("tema-btn");
btnTema.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Acordeón
document.querySelectorAll(".acordeon-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("activo");
    const panel = btn.nextElementSibling;
    panel.style.display = panel.style.display === "block" ? "none" : "block";
  });
});

// Validación de formulario
document.getElementById("eco-form").addEventListener("submit", e => {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const comentario = document.getElementById("comentario").value.trim();
  const mensaje = document.getElementById("mensaje");

  if (nombre && email && comentario) {
    mensaje.textContent = "¡Gracias por unirte a la campaña! 🌱";
    mensaje.style.color = "green";
    setTimeout(() => {
      mensaje.textContent = "";
      document.getElementById("eco-form").reset();
    }, 3000);
  } else {
    mensaje.textContent = "Por favor completa todos los campos.";
    mensaje.style.color = "red";
  }
});
