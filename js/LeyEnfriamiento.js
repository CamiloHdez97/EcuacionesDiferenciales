
function calcularK() {
    // Obtener los valores de los inputs
    var temperaturaAmbiente = parseFloat(document.getElementById('temperaturaAmbiente').value);
    var temperaturaTiempoCero = parseFloat(document.getElementById('temperaturaAmbientetiempocero').value);
    var temperaturaEnsayo1 = parseFloat(document.getElementById('temperaturaInicial').value);
    var tiempoEnsayo1 = parseFloat(document.getElementById('tiempoEnMinutos').value);

    // Calcular la diferencia de temperaturas
    var diferenciaTemperaturas = temperaturaTiempoCero - temperaturaEnsayo1;

    // Calcular k
    var k = -Math.log(diferenciaTemperaturas / (temperaturaTiempoCero - temperaturaAmbiente)) / tiempoEnsayo1;

    // Mostrar el valor de k
    console.log("La constante k es: " + k);

    var temperaturaCalculada = calcularTemperatura(k, temperaturaTiempoCero, temperaturaAmbiente, tiempoEnsayo1);
    console.log(temperaturaCalculada);
}


function calcularTemperatura(k, temperaturaInicial, temperaturaAmbiente, tiempo) {

    var temperatura = temperaturaAmbiente + (temperaturaInicial - temperaturaAmbiente) * Math.exp(-k * tiempo);
    return temperatura;
}

// Asignar la función calcularK al evento clic del botón "calcular"
document.getElementById('calcular').addEventListener('click', calcularK);


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("calcularBtn").addEventListener("click", function() {
        calcularTiempoDuplicacion();
    });
});

function calcularTiempoDuplicacion() {
    var poblacionInicial = parseFloat(document.getElementById("poblacionInicial").value);
    var incrementoDiario = parseFloat(document.getElementById("incrementoDiario").value);
    var poblacionFinal = parseFloat(document.getElementById("poblacionFinal").value);

    // Verificar que los valores sean válidos
    if (poblacionInicial <= 0 || incrementoDiario <= 0 || poblacionFinal <= 0) {
        alert("Los valores ingresados deben ser mayores que cero.");
        return;
    }

    // Calcular el tiempo necesario
    var tiempo = Math.log(poblacionFinal / poblacionInicial) / (incrementoDiario / poblacionInicial);

    // Mostrar el resultado
    var años = Math.floor(tiempo / 365);
    var meses = Math.floor((tiempo % 365) / 30);
    var dias = Math.floor(tiempo % 30);

    alert("El tiempo necesario para alcanzar una población de " + poblacionFinal.toFixed(2) + " es aproximadamente: " + años + " años, " + meses + " meses, y " + dias + " días.");
}
