/*Você deve criar três listas em JavaScript:

1. para guardar os nomes de dez pessoas;
2. para guardar as suas idades;
3. para guardar as suas cores favoritas.

Em seguida, imprima essas listas. 
Depois, faça algumas modificações, 
alterando uma cor e uma idade. Ao terminar, 
imprima novamente todas as informações das três listas.*/
let nomes=['Fulano','Fulana','Deltrano','Deltrana','Ciclano','Ciclana','Alano','Alana','Belano','Belana'];
let idades = [18,18,20,20,22,22,21,21,25,25];
let cores=['azul','roxo','amarelo','laranja','preto','cinza','vermelho','rosa','branco','bege'];

for(i=0;i<10;i++){
    console.log("nome:",nomes[i],", idade:",idades[i],", cor favorita:",cores[i])
}

console.log()
console.log("Alterando a idade e cor de Deltrana:");
idades[3]=28;
cores[3]='vinho';

for(i=0;i<10;i++){
    console.log("nome:",nomes[i],", idade:",idades[i],", cor favorita:",cores[i])
}