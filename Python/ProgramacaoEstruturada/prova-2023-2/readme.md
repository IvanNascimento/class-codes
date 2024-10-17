# Programação Estruturada: Prova 02

## Questão 1

A partir do dicionário de nomes e idades de pessoas a seguir, faça uma função que retorne uma lista em ordem alfabética dos nomes das pessoas maiores de 18 anos.

```py
pessoas = {
    "Leonardo": 30,
    "Mariana": 15,
    "Gustavo": 29,
    "Bianca": 32,
    "Vinícius": 18,
    "Amanda": 26,
    "Henrique": 11,
    "Camila": 27,
    "Felipe": 33,
    "Juliana": 30,
}
```

## Questão 2

Crie um programa que leia duas listas (lista1 e lista2) e intercale os elementos das duas listas.

### Exemplos

Entrada:
lista1 = [1, 3, 5]
lista2 = [2, 4, 6, 8, 10]
Saída
[1, 2, 3, 4, 5, 6, 8, 10]

Entrada:
lista1 = []
lista2 = [2, 4, 6]
Saída
[2, 4, 6]

## Questão 3

Você deverá ler valores numéricos até o usuário digitar 0. Use uma função ler_valores() para retornar os valores deverão ser passados para uma função processa_lista(lista) que irá retornar 2 listas, uma lista para valores pares e uma lista para ímpares. O tamanho máximo de cada uma das listas é de 5. Logo, cada vez que uma das listas ficar cheia você deve substituir os valores mais antigos pelos valores novos. Após executar a função, você deve imprimir o conteúdo em cada uma das listas.

### Exemplos

- Entrada: [2, 4, 6, 8, 10, 12, 14, 0]

- Saída Esperada:

  - Lista de Pares: [12, 14, 6, 8, 10]
  - Lista de Ímpares: []

- Entrada: [1, 3, 5, 7, 9, 11, 0]
- Saída Esperada:

  - Lista de Pares: []
  - Lista de Ímpares: [11, 9, 7, 5, 3]

- Entrada: [2, 4, 6, 8, 10, 12, 1, 3, 5, 7, 9, 11, 0]
- Saída Esperada:
  - Lista de Pares: [12, 4, 6, 8, 10]
  - Lista de Ímpares: [11, 3, 5, 7, 9]

## Questão 4

Ambrosina é uma fotógrafa muito peculiar. Ela só aceita tirar fotos de pessoas se as pessoas estiverem em grupos de exatamente 04 pessoas. Tudo isso porque Ambrosina tem uma mania esquisita de ordenação. Para ela, a pessoa mais baixa deve ficar sempre do lado esquerdo, a segunda mais baixa do lado direito, no meio, logo após a mais baixa, fica a terceira mais baixa e em seguida a mais alta.

Você deverá ler valores numéricos até o usuário digitar 0. Use uma função ler_valores() para retornar os valores deverão ser passados para uma função organizar_alturas(lista) que irá a lista na organização de Ambrosina. Ao final, crie uma função para formatar as alturas da lista de Ambrosina, onde cada valor fique com duas casas decimais após a vírgula.

### Exemplos

- Entrada

  A entrada consiste de 04 números reais maiores que zero correspondendo às alturas de 04 pessoas. Cada número é dado em uma linha diferente. A entrada pode não estar ordenada.
  [40, 30, 20, 10]

- Saída

  Consiste de 04 números reais, separados por um final de linha, ordenados de acordo com a mania de Ambrosina. Os números devem ser formatados com 02 casas decimais.

  [10.00, 30.00, 40.00, 20.00]
