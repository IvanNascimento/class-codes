from random import random


def get_index() -> int:
    elements = input("informe 5 números: ex.: 1 2 3 4 5 \n").split()
    element = input("Informe o número a procurar: ex. 2 \n")

    for index, value in enumerate(elements):
        if value == element:
            print(index)
            return index
        print("-1")
        return -1


def dados() -> float:
    valores = [int(random() * 7) for i in range(50)]
    count = 0
    for value in valores:
        if value == 6:
            count += 1
    print(f"{(count/50)*100:0.2f}%")
    return count / 50


def fake_fibonacci() -> list:
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
