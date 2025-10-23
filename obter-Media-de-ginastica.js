let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];


function obterMedia(entrada){
   let saidaForEach = ""; //Variável auxiliar, para obter a saida do forEach()
   entrada.forEach(function(objeto){
              let notas = objeto.notas.sort((a, b) => a - b) //Coloca as notas em ordem decrescente para facilitar a retirada da nota maior e menor.
              let tresNotas = notas.slice(1,4).reduce(function(acumulado, atual){return acumulado + atual})
              let media = tresNotas / 3
              saidaForEach += `Atleta: ${objeto.nome}\nNotas Obtidas: ${objeto.notas}\nMédia Válida: ${media}\n\n` //Formata o resoltado da para o usuário.
  }) 
  return saidaForEach
}

console.log(obterMedia(atletas))