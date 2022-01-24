//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18

//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true

//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro


//*** Exercícios bônus
//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R

//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E

let idade = prompt("Qual é a sua idade?")
if (idade > 18) {
    console.log("Já é grandinho! Adianta o teu lado aí irmão")  
} else {
    console.log("Você ainda não pode dirigir!")
}

let robot = prompt("Você é um robô? Responda Sim ou Não")
if (idade > 18 & robot == "Não") {
    console.log("Parabéns, você foi verificado como humano.")
} else {
    console.log("Atenção! Não permitida a entrada nem de menores, nem de robôs!")
}

let mesDoAniversario = prompt("Qual o mês do seu aniversário?")
if (mesDoAniversario == "Janeiro" | mesDoAniversario == "Dezembro") {
    console.log("Ainda dá pra aproveitar a energia do aniversário!")
} else {
    console.log("Seu momento vai chegar")
}

let nomeVisitante = prompt("Qual seu nome?")
if (nomeVisitante.startsWith("R") == true) {
    console.log("RRRRRRRRRRRRRRR!")
}

let sobrenomeVisitante = prompt("Qual seu sobrenome?")
if (sobrenomeVisitante.length > 6 | nomeVisitante.startsWith("E") == true) {
    console.log("Que nome interessante, parabéns!")
} else {
    console.log("Obrigado, pode passar.")
}