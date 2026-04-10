// calculadora.js

// process.argv[0] é o caminho do executável node
// process.argv[1] é o caminho do arquivo script
// process.argv[2] em diante são os argumentos passados
const args = process.argv.slice(2);

if (args.length < 3) {
    console.log("Uso: node calculadora.js <número1> <operação> <número2>");
    console.log("Operações: soma, sub, mult, div");
    process.exit(1);
}

const num1 = parseFloat(args[0]);
const operacao = args[1];
const num2 = parseFloat(args[2]);

let resultado;

switch (operacao) {
    case 'soma':
        resultado = num1 + num2;
        break;
    case 'sub':
        resultado = num1 - num2;
        break;
    case 'mult':
        resultado = num1 * num2;
        break;
    case 'div':
        resultado = num2 !== 0 ? num1 / num2 : "Erro: Divisão por zero";
        break;
    default:
        resultado = "Operação inválida. Use: soma, sub, mult, div";
}

console.log(`Resultado: ${resultado}`);
