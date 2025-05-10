function removerStrings(lista) {
    return lista.filter(item => typeof item === 'number');
  }
  
  const listaMista = [1, 'dois', 3, 'quatro', 5, 'seis'];
  const somenteNumeros = removerStrings(listaMista);
  
  console.log(somenteNumeros); // Saída: [1, 3, 5]

  function contarVogais(texto) {
    const vogais = ['a', 'e', 'i', 'o', 'u' ];
    let contador = 0;
  
    for (let letra of texto) {
      if (vogais.includes(letra)) {
        contador++;
      }
    }
  
    return contador;
  }
  
  const texto = "e um texto apenas de exemplo para o codigo"; //Saída [17]
  const resultado = contarVogais(texto);
  
  console.log("Número de vogais:", resultado);