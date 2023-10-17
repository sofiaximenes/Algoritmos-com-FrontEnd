console.log("Verificar se é primo:")

function isPrime(number) {
    if (number <= 1) {
      return false;
    }
  
    if (number === 2) {
      return true;
    }
  
    if (number % 2 === 0) {
      return false;
    }
  
    for (let i = 3; i <= Math.sqrt(number); i += 2) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  const numero = 17;
  if (isPrime(numero)) {
    console.log(`${numero} é primo.`);
  } else {
    console.log(`${numero} não é primo.`);
  }

  console.log("-------------------")
  console.log("-------------------")
//--------------------------

console.log("Somatório:")

  function somatorio(arr) {
    let soma = 0;
  
    for (let i = 0; i < arr.length; i++) {
      soma += arr[i];
    }
  
    return soma;
  }
  
  const conjuntoDeNumeros = [1, 2, 3, 4, 5];
  const resultadoSoma = somatorio(conjuntoDeNumeros);
  console.log(`O somatório do conjunto é: ${resultadoSoma}`);

  console.log("-------------------")
  console.log("-------------------")
  

//-----------------------------------

console.log("Fibonnaci:")

function fibonacci(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  
  const numeroDeTermos = 10;
  for (let i = 0; i < numeroDeTermos; i++) {
    console.log(fibonacci(i));
  }
  
  console.log("-------------------")
  console.log("-------------------")

//----------------------------------


console.log("MDC:")

function mdc(a, b) {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  
  const numero1 = 36;
  const numero2 = 48;
  const resultadoMDC = mdc(numero1, numero2);
  console.log(`O MDC de ${numero1} e ${numero2} é ${resultadoMDC}`);


  console.log("-------------------")
  console.log("-------------------")

//-----------------------------------------------

console.log("Quicksort")

function quicksort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const pivot = arr[0];
    const left = [];
    const right = [];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  
    return [...quicksort(left), pivot, ...quicksort(right)];
  }
  
  const arrayDesordenado = [6, 1, 8, 4, 9, 2, 5];
  const arrayOrdenado = quicksort(arrayDesordenado);
  console.log("Array ordenado:", arrayOrdenado);

  console.log("-------------------")
  console.log("-------------------")

//-----------------------------------------------------


console.log("Contar Números inteiros em um array:")

function contarNumerosInteiros(arr) {
    let contador = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (Number.isInteger(arr[i])) {
        contador++;
      }
    }
  
    return contador;
  }
  
  const array = [1, 2, 3, 4, 5, 1.5, "texto", true, -3];
  const numerosInteiros = contarNumerosInteiros(array);
  console.log(`O array contém ${numerosInteiros} números inteiros.`);

  console.log("-------------------")
  console.log("-------------------")

  
  