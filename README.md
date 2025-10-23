
# Pontuação de atletas
Aplicação para obter a média de pontos de um competidor de ginástica artística.



## Documentação da aplicação
O sistema de pontuação da competição dar-se da seguinte forma: O atleta é julgado por cinco jurados, que avaliarão a performance do atleta, atribuindo notas de 1 a 10. Das cinco notas que o atleta recebe, a maior e a menor são descartadas e é feito uma média das três notas restantes.

A função obterMedia() deve receber como entrada uma matriz com objetos contendo os nomes dos atletas e as notas obtidas dutente a competição.
A saida da função deve retornar a seguinte informação:
Nome do Atleta:
Nota obtida:
Média válida:

O método forEach() foi utlizado para percorrer a matriz de dados fornecida, em seguida foi usado o método sort() para ordenar as notas da menor para a maior, para facilitar a exclusão da nota maior e menor.
Com o método slice() separamos as três notas intermediárias e guardamos elas na variável "tresNotas".
A obtenção das médias dar-se pela divisão da variável tresNotas três, visto que sobraram apenas três notas das cinco auferidas pelo atleta.
## Funcionamento

- A função obterMedia() recebe os dados da matriz "atletas" através da variavel objeto:
- A variável "notas" armazena a saida do sort() com as notas já em ordem crescente.
- A variável "tresNotas" armazena o a soma das três notas do atleta, somadas pelo método reduce() logo após o slice() retirar a nota maior e a menor da variável "notas".
- A variável "media" armazena a divisão do resultado da variável "tresNotas" por 3.
- Por fim a função retorna a saida formatada com o nome do atleta, as notas obtidas pela perfromance e a média válida das três notas intermediárias.


## Autores

- [@alceu-coder](https://github.com/alceu-coder)

