var numeros = [];

    function generarNumero() {
      var numeroGenerado = Math.floor(Math.random() * 100) + 1;
      document.getElementById("numero").value = numeroGenerado;
    }

    function agregarNumero() {
      var numero = document.getElementById("numero").value;

      if (numero !== "") {
        var tabla = document.getElementById("tabla");
        var fila = tabla.insertRow(-1);
        var celda = fila.insertCell(0);
        celda.innerHTML = numero;


        numeros.push(parseInt(numero, 10));
      }
    }

    function calcularEstadisticas() {
      var promedio = calcularPromedio();
      var total = calcularTotal();
      var maximo = calcularMaximo();
      var minimo = calcularMinimo();

      document.getElementById("promedio").innerHTML = "Promedio: " + promedio;
      document.getElementById("total").innerHTML = "Total: " + total;
      document.getElementById("maximo").innerHTML = "Máximo: " + maximo;
      document.getElementById("minimo").innerHTML = "Mínimo: " + minimo;
    }

    function calcularPromedio() {
      if (numeros.length === 0) return 0;
      var sum = numeros.reduce(function (a, b) {
        return a + b;
      });
      return sum / numeros.length;
    }

    function calcularTotal() {
      if (numeros.length === 0) return 0;
      return numeros.reduce(function (a, b) {
        return a + b;
      });
    }

    function calcularMaximo() {
      if (numeros.length === 0) return 0;
      return Math.max(...numeros);
    }

    function calcularMinimo() {
      if (numeros.length === 0) return 0;
      return Math.min(...numeros);
    }