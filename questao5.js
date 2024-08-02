const dataAtual = new Date();
const dataNascimento = new Date('1990-08-15');

function calcularDiferencaEmAnos(dataNascimento, dataAtual) {
    let anos = dataAtual.getFullYear() - dataNascimento.getFullYear();
    const mesAtual = dataAtual.getMonth();
    const mesNascimento = dataNascimento.getMonth();
    
    if (mesNascimento > mesAtual || (mesNascimento === mesAtual && dataAtual.getDate() < dataNascimento.getDate())) {
        anos--;
    }

    return anos;
}

const diferencaEmAnos = calcularDiferencaEmAnos(dataNascimento, dataAtual);
console.log(`A diferença em anos é: ${diferencaEmAnos}`);


