from random import random
from typing import List


# Questão 1
def get_index() -> int:
    elements = input("informe 5 números: ex.: 1 2 3 4 5 \n").split()
    element = input("Informe o número a procurar: ex. 2 \n")

    for index, value in enumerate(elements):
        if value == element:
            print(index)
            return index
        print("-1")
        return -1


# Questão 2
def dados() -> float:
    valores = [int(random() * 7) for i in range(50)]
    count = 0
    for value in valores:
        if value == 6:
            count += 1
    print(f"{(count/50)*100:0.2f}%")
    return count / 50


# Questão 3
def fake_fibonacci() -> List[int]:
    valores = [int(random() * 21) for i in range(10)]
    resultado = [valores[0]]
    for end in range(1, len(valores)):
        count = valores[end]
        for i in range(end):
            count += resultado[i]
        resultado.append(count)
    print(valores)
    print(resultado)

    return resultado


# Questão 4
def dobra(entrada: List[int]) -> List[int]:
    return list(map(lambda i: i * 2 if i > 5 else i, entrada))


# Questão 5
def quadrados() -> List[int]:
    return [i**2 for i in range(1, 11)]


# Questão 6
def to_celsius() -> List[int]:
    fahrenheits = []
    print("Informe as temperaturas em Fahrenheit.")
    print("Deixe vazio para sair.")
    while True:
        entrada = input("informe a temperatura: ")
        if entrada == "":
            break
        fahrenheits.append(float(entrada))
    celcios = list(map(lambda x: (x - 32) * (5 / 9), fahrenheits))

    for i in range(len(celcios)):
        print(f"{fahrenheits[i]:.2f} °F --> {celcios[i]:.2f} °C")

    return celcios


# Questão 7
def idades() -> None:
    people = {
        "Rafael": 41,
        "Anne": 28,
        "Jen": 32,
        "Satan": 2000000,
        "Frank": 12,
        "Sally": 19,
        "Bob": 42,
        "Sue": 21,
        "Jill": 32,
        "Jack": 32,
    }
    ordenado = sorted(
        [(nome, idade) for nome, idade in people.items()], key=lambda valor: valor[0]
    )
    soma = sum([valor[1] for valor in ordenado])
    media = soma / len(ordenado)
    mais_velha = max(ordenado, key=lambda i: i[1])[0]

    print("Nome: Idade \n | ", end="")
    [print(f"{nome}: {idade} | ", end="") for nome, idade in ordenado]
    print()
    print(f"Soma das idades: {soma:,}")
    print(f"Média de idades: {media:,.2f}")
    print(f"Pessoa mais velha: {mais_velha}")


# Questão 8
def soma_tuplas(lista: List[tuple]) -> None:
    saida = []
    for tupla in lista:
        temp = 0
        for i in tupla:
            temp += i
        saida.append(temp)
    return saida
