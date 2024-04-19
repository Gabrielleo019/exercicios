// Exercicio 1


function addDisplay(value) {
    document.getElementById('display').value += value
}

function calcular() {
    var expressao = document.getElementById('display').value
    var resultado = eval(expressao)
    document.getElementById('display').value = resultado
}

function limparDisplay() {
    document.getElementById('display').value = ''
}


// Exercicio 2


function addDisplay2(value){
    document.getElementById('display2').value += value
}

function calcular2() {
    var expressao = document.getElementById('display2').value
    var quadrado = expressao * expressao
    document.getElementById('display2').value = quadrado
}

function limparDisplay2() {
    document.getElementById('display2').value = ''
}


// Exercicio 3


function converter() {
    var opcao = prompt("Digite a opção de conversão (Celsius, Fahrenheit ou Kelvin):").toLowerCase()
    var temperatura = parseFloat(prompt("Digite a temperatura:"))
    var opcao2 = prompt("Digite a opção de conversão (Celsius, Fahrenheit ou Kelvin):").toLowerCase();
    var resultado

    switch (opcao) {
        case "celsius":
            switch (opcao2) {
                case "fahrenheit":
                  resultado = celsiusParaFahrenheit(temperatura) + "°F"
                  break
                case "kelvin":
                  resultado = celsiusParaKelvin(temperatura) + "K"
                  break
                default:
                  resultado = "Opção de conversão inválida."
              }
          break

        case "fahrenheit":
            switch (opcao2) {
                case "celsius":
                  resultado = fahrenheitParaCelsius(temperatura) + "°C"
                  break
                case "kelvin":
                  resultado = fahrenheitParaKelvin(temperatura) + "K"
                  break
                default:
                  resultado = "Opção de conversão inválida."
              }
          break

        case "kelvin":
            switch (opcao2) {
                case "celsius":
                  resultado = kelvinParaCelsius(temperatura) + "°C"
                  break
                case "fahrenheit":
                  resultado = kelvinParaFahrenheit(temperatura) + "°F"
                  break
                default:
                  resultado = "Opção de conversão inválida."
              }
        break
        default:
          resultado = "Opção de conversão inválida."
      }
     
      alert("Resultado: " + resultado)
  
    var continuar = prompt("Deseja realizar outra conversão? (sim/não)").toLowerCase();
    if (continuar === "sim") {
        converter()
    } else {
      alert("Programa encerrado.")
    }
}

 
  // Função para converter Celsius para Fahrenheit
function celsiusParaFahrenheit(celsius) {
    return celsius * 1.8 + 32;
  }
  
  // Função para converter Fahrenheit para Celsius
  function fahrenheitParaCelsius(fahrenheit) {
    return (fahrenheit - 32) / 1.8;
  }
  
  // Função para converter Celsius para Kelvin
  function celsiusParaKelvin(celsius) {
    return celsius + 273.15;
  }
  
  // Função para converter Kelvin para Celsius
  function kelvinParaCelsius(kelvin) {
    return kelvin - 273.15;
  }
  
  // Função para converter Fahrenheit para Kelvin
  function fahrenheitParaKelvin(fahrenheit) {
    return (fahrenheit + 459.67) / 1.8;
  }
  
  // Função para converter Kelvin para Fahrenheit
  function kelvinParaFahrenheit(kelvin) {
    return kelvin * 1.8 - 459.67;
  }
  
  
  // Exercicio 4
  
  
  function media(){
    var cont = 1
    var numero 
    var soma = 0
    
while (cont<=5) {
    numero = parseInt(prompt("Digite o " + cont + "° número!"))
    soma += numero
    cont++
}
    var media = soma / 5
    alert("A média dos números digitados é "+media)
  }

  
  // Exercicio 5


  function ordenarNomes() {
    var nomes = []
    var cont = 1
    
    while(cont<=3){
        var nome = prompt("Digite o " + cont + "° nome:")
        nomes.push(nome)
        cont++
    }
    nomes.sort()
    alert("Nomes em ordem alfabética:\n" + nomes.join("\n"))
}



  
  
  
  
  