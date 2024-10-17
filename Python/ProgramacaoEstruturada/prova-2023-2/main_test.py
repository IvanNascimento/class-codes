# Testes parametrizados corrigidos
import pytest
from solution import q1, q2, q3, q4


@pytest.mark.parametrize(
    "entrada, esperado",
    [
        ({}, []),
        ({"Joao": 25, "Maria": 20, "Ana": 30}, ["Ana", "Joao", "Maria"]),
        ({"Alice": 17, "Bob": 17, "Charlie": 22}, ["Charlie"]),
        ({"Lucas": 16, "Sophia": 19, "Pedro": 21}, ["Pedro", "Sophia"]),
    ],
)
def test_q1(entrada, esperado):
    resultado = q1(entrada)
    assert resultado == esperado


# Casos de teste parametrizados
@pytest.mark.parametrize(
    "lista1, lista2, esperado",
    [
        ([1, 3, 5], [2, 4, 6, 8, 10], [1, 2, 3, 4, 5, 6, 8, 10]),
        ([], [2, 4, 6], [2, 4, 6]),
        ([1, 3, 5, 7], [2, 4], [1, 2, 3, 4, 5, 7]),
        ([1, 3], [2, 4, 6], [1, 2, 3, 4, 6]),
    ],
)
def test_q2(lista1, lista2, esperado):
    resultado = q2(lista1, lista2)
    assert resultado == esperado


@pytest.mark.parametrize(
    "entrada, esperado_pares, esperado_impares",
    [
        ([2, 4, 6, 8, 10, 12, 14, 0], [12, 14, 6, 8, 10], []),
        ([1, 3, 5, 7, 9, 11, 0], [], [11, 3, 5, 7, 9]),
        ([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 0], [22, 14, 16, 18, 20], []),
        (
            [2, 4, 6, 8, 10, 12, 1, 3, 5, 7, 9, 11, 0],
            [12, 4, 6, 8, 10],
            [11, 3, 5, 7, 9],
        ),
    ],
)
def test_processa_lista(entrada, esperado_pares, esperado_impares):
    resultado_pares, resultado_impares = q3(entrada)
    assert resultado_pares == esperado_pares
    assert resultado_impares == esperado_impares


@pytest.mark.parametrize(
    "entrada, esperado",
    [
        ([1.75, 1.80, 1.70, 1.65, 0], ["1.65", "1.75", "1.80", "1.70"]),
        ([1.60, 1.62, 1.58, 1.65, 0], ["1.58", "1.62", "1.65", "1.60"]),
        ([1.70, 1.68, 1.75, 1.60, 0], ["1.60", "1.70", "1.75", "1.68"]),
        ([1.80, 1.75, 1.90, 1.88, 0], ["1.75", "1.88", "1.90", "1.80"]),
        ([1.65, 1.60, 1.58, 1.70, 0], ["1.58", "1.65", "1.70", "1.60"]),
        # Adicione mais casos conforme necessário
    ],
)
def test_q2(entrada, esperado):
    resultado = q4(entrada)
    assert resultado == esperado
