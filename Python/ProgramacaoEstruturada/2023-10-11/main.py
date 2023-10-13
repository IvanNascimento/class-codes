# Questão 1
def saudacao(nome: str) -> str:
    return f"Olá, {nome}!"


# Questão 2
def dobro(numero: int) -> int:
    return numero * 2


# Questão 3
def saudacao_personalizada(nome: str, idioma="inglês") -> str:
    match (idioma):
        case "portuges":
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
    return


# Questão 15
def min_custom(entrada: list[float]) -> float:
    return


# Questão 16
def startswith_custom(entrada: str, pre: str) -> bool:
    return


# Questão 17
def endswith_custom(entrada: str, pre: str) -> bool:
    return


# Questão 18
def split_custom(entrada: str, char: str) -> list[str]:
    return


# Questão 19
def strip_custom(entrada: list[float]) -> float:
    return


# Questão 20
def replace_custom(entrada: list[float]) -> float:
    return
