let estaFrio = true;

if (estaFrio) {
    console.log("Está frio!");
} else {
    console.log("Não está frio.");
}

estaFrio = !estaFrio;
console.log("Novo valor de estaFrio:", estaFrio);

let estaQuente = false;

let resultadoAnd = estaFrio && estaQuente;
console.log("Resultado de estaFrio && estaQuente:", resultadoAnd);

let resultadoOr = estaFrio || estaQuente;
console.log("Resultado de estaFrio || estaQuente:", resultadoOr);
