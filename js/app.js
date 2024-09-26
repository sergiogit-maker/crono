const contador = document.getElementById("contador");
const btncontar = document.getElementById("btncontar");

const btnborrar = document.getElementById("btnborrar");





let numero = 0;
btncontar.addEventListener("Click", () => {
//incrementars el numero en una unidad cada vez que hago click
   numero++;
   //volcar el numero incrementado en el contador
  contador.innerText = numero;
});

btnborrar.addEventListener("Click"), () => {
   numero = 0
   contador.innerText = numero;
}
