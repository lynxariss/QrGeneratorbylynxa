let qr;

const boton = document.getElementById("btn");
const input = document.getElementById("text");
const contenedor = document.getElementById("qr");

boton.addEventListener("click", generarQR);

function generarQR() {
  const texto = input.value.trim();
  contenedor.innerHTML = "";

  if (texto === "") return;

  qr = new QRCode(contenedor, {
    text: texto,
    width: 180,
    height: 180,
    colorDark: "#333",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });
}
