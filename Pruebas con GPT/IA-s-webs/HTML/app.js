const miElemento = document.getElementById("mi-elemento");

miElemento.addEventListener("click", function() {
  if (miElemento.style.backgroundColor === "blue") {
    miElemento.style.backgroundColor = "red";
  } else {
    miElemento.style.backgroundColor = "blue";
  }
});
function abrirPagina() {
    window.open("https://www.ejemplo.com");
  }