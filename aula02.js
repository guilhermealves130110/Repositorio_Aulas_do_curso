import { input, number } from '@inquirer/prompts';
// import { input, number } from '@inquirer/prompts';
// import { input, number, confirm , select, checkbox, password } from '@inquirer/prompts';

const nome = await input({ message: 'qual é o seu nome?'});

console.log("bem vindo, " + nome + "!");

const idade = await number ({
message: "Idade?",
min:0,
max:120,
required:true
})

// let idade_depois = idade = 1;
// const nome idade

console.log("bem vindo,")
console.log(typeof idade);
console.log(typeof idade_depois);
//console.log("ano que vem voc~e terá " + idade + 1 + "anos")

