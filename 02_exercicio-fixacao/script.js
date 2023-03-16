// EXERCICIO DE FIXAÇÃO
//Faça um programa que pergunte:
//sua idade usando prompt
//pergunte a idade do seu melhor amigo 
//imprima no console sua idade é maior que a do seu melhor amigo? verdadeiro ou falso
//imprima a diferença de idade


let minhaIdade = Number(prompt("Qual é a sua idade?"));
let idadeAmigo = Number(prompt("Qual é a idade do seu melhor amigo?"));

let diferencaIdade = (minhaIdade - idadeAmigo);

let minhaIdadeMaior = minhaIdade > idadeAmigo; // retorna true se a minha idade for maior que a do meu amigo

console.log("Sua idade é maior que a do seu melhor amigo?", minhaIdadeMaior);
console.log("A diferença de idade entre vocês é de", diferencaIdade, "anos.");


