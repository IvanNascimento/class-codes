# Questão 1
def saudacao(nome: str) -> str:
    return f"Olá, {nome}!"


# Questão 2
def dobro(numero: int) -> int:
    return numero * 2


# Questão 3
def saudacao_personalizada(nome: str, idioma="inglês") -> str:
    match (idioma):
        case "portugues":
            return f"Olá, {nome}!"
        case "espanhol":
            return f"Hola, {nome}!"
        case "francês":
            return f"Bonjour, {nome}!"
        case __:
            return f"Hello, {nome}!"


# Questão 4
def potencia(base: int, expoente=2) -> int:
    return base**expoente


# Questão 6
def idade_valida(idade: int) -> bool:
    if idade < 0:
        return False
    if idade > 150:
        return False
    return True


# Questão 8
def validar_email(email: str) -> bool:
    if not "@" in email:
        return False
    if email[email.index("@") : :] == "@.com":
        return False
    if email[-4::] != ".com":
        return False
    return True


# Questão 9
def calcular_pagamento(horas_trabalhadas: int, taxa_hora: float) -> float:
    return horas_trabalhadas * taxa_hora


# Questão 10
def maior_numero(num1: int, num2: int, num3: int) -> int:
    lista = [num1, num2, num3]
    lista.sort()
    return lista[-1]


# Questão 11
def contagem_letras(entrada: str) -> tuple:
    minusculas = 0
    maiusculas = 0
    for i in entrada.strip():
        if i.islower():
            minusculas += 1
        if i.isupper():
            maiusculas += 1
    return (maiusculas, minusculas)


# Questão 12
def len_custom(entrada: str | list) -> int:
    count = 0
    for i in entrada:
        count += 1
    return count


# Questão 13
def sum_custom(entrada: list[float]) -> float:
    soma = 0
    for i in entrada:
        soma += i
    return soma


# Questão 14
def max_custom(entrada: list[float]) -> float:
    if len(entrada) == 0:
        return
    max = float("-inf")
    for i in entrada:
        if i > max:
            max = i
    return max


# Questão 15
def min_custom(entrada: list[float]) -> float:
    if len(entrada) == 0:
        return
    min = float("inf")
    for i in entrada:
        if i < min:
            min = i
    return min


# Questão 16
def startswith_custom(entrada: str, pre: str) -> bool:
    if entrada[0 : len(pre)] == pre:
        return True
    return False


# Questão 17
def endswith_custom(entrada: str, pos: str) -> bool:
    if entrada[len(pos) * -1 :] == pos:
        return True
    return False


# Questão 18
def split_custom(entrada: str, char: str) -> list:
    saida = []
    separar = []
    __temp = len(char)
    __temp2 = len(entrada)
    for i in range(__temp2 - __temp):
        if entrada[i : i + __temp] == char:
            separar.append((i, i + __temp))
    ultimo = (0, 0)
    for i in separar:
        saida.append(entrada[ultimo[1] : i[0]])
        ultimo = i
    saida.append(entrada[ultimo[1] :])
    return saida


# Questão 19
def strip_custom(entrada: str, remover=" ") -> str:
    saida = ""
    for i in entrada:
        if i != remover:
            saida += i
    return saida


# Questão 20
def replace_custom(entrada: str, substr: str, nova_substr: str) -> str:
    saida = ""
    __temp = len(substr)
    i = 0
    while i < len(entrada):
        if entrada[i : i + __temp] == substr:
            saida += nova_substr
            if __temp != 1:
                i += __temp
            else:
                i += 1
        else:
            saida += entrada[i]
            i += 1
    return saida
