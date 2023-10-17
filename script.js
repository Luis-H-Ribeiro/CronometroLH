let tempoAtual = 0;
let temporizador;

function atualizarCronometro() {
    const horas = Math.floor(tempoAtual / 3600);
    const minutos = Math.floor((tempoAtual % 3600) / 60);
    const segundos = tempoAtual % 60;
  
    const tempoFormatado = `${String(horas).padStart(2, "0")}:${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`;
  
    document.getElementById("tempo").textContent = tempoFormatado;
}  

document.getElementById("iniciar").addEventListener("click", function () {
    if (!temporizador) {
      temporizador = setInterval(function () {
        tempoAtual++;
        atualizarCronometro();
      }, 1000); // Atualiza a cada segundo (1000 ms)
    }
});
  
document.getElementById("pausar").addEventListener("click", function () {
    clearInterval(temporizador);
    temporizador = null;
});
  
document.getElementById("zerar").addEventListener("click", function () {
    clearInterval(temporizador);
    temporizador = null;
    tempoAtual = 0;
    atualizarCronometro();
});

  