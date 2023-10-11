// Fecha objetivo: 9 de diciembre de 2023
const fechaObjetivo = new Date('2023-12-09T00:00:00').getTime();

// Actualiza la cuenta regresiva cada segundo
const x = setInterval(function() {
  const fechaActual = new Date().getTime();
  const diferencia = fechaObjetivo - fechaActual;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  document.getElementById('dias').innerHTML = dias;
  document.getElementById('horas').innerHTML = horas;
  document.getElementById('minutos').innerHTML = minutos;
  document.getElementById('segundos').innerHTML = segundos;

  if (diferencia < 0) {
    clearInterval(x);
    document.getElementById('dias').innerHTML = '0';
    document.getElementById('horas').innerHTML = '0';
    document.getElementById('minutos').innerHTML = '0';
    document.getElementById('segundos').innerHTML = '0';
    alert('¡Hoy es el gran día!');
  
  }
}, 1000);