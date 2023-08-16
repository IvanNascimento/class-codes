from math import pi

def qst1():
    # Descrição: 
    #   Escreva um programa que solicite ao usuário o seu nome e a sua idade, armazenando esses valores em variáveis. 
    #   Em seguida, imprima uma mensagem formatada mostrando o nome e a idade do usuário.
    nome = input('Digite seu nome: ')
    idade = input('Digite sua idade: ')
    string = 'Seu nome é {}, você tem {} anos'.format(nome.capitalize() , idade)
    print(string)
    return string
# qst1()

def qst2():
    # Descrição:
    #   Escreva um programa que solicite ao usuário dois números inteiros e armazene-os em variáveis.
    #   Em seguida, calcule e imprima a soma, subtração, multiplicação e divisão desses números.
    num1 = int(input('1° número: '))
    num2 = int(input('2° número: '))
    soma = '{} + {} = {}'.format(num1, num2, num1 + num2)
    sub = '{} - {} = {}'.format(num1, num2, num1 - num2)
    mult = '{} * {} = {}'.format(num1, num2, num1 * num2)
    divs = '{} / {} = {}'.format(num1, num2, num1 / num2)
    print('Operações: ')
    print('\t'+soma)
    print('\t'+sub)
    print('\t'+mult)
    print('\t'+divs)
    return {"Soma": soma, "Subtração": sub, "Multiplicacao": mult,"Divisao": divs}
# qst2()

def qst3():
    # Descrição:
    #   Escreva um programa que solicite ao usuário o raio de um círculo e calcule a área e o perímetro desse círculo.
    #   Imprima os resultados formatados.
    raio = float(input('informe raio do círculo: '))
    area = 'Área do círculo: π*{}**2 = {:0.2f}'.format(raio, pi*raio**2)
    perimetro = 'Perímetro do círculo: 2π*{} = {:0.2f}'.format(raio, 2*pi*raio)
    print('Resultados')
    print("\t"+area)
    print('\t'+perimetro)
    return {'Área': area, 'Perímetro': perimetro}
# qst3()

def qst4():
    # Descrição:
    #   Escreva um programa que solicite ao usuário uma temperatura em graus Celsius e converta-a para Fahrenheit.
    #   Imprima o resultado formatado.
    grau = float(input('Informe a temperatura: '))
    fahrenheit = "{:0.2f} °C = {:0.2f} °F".format(grau, grau * (9/5) + 32)
    print(fahrenheit)
    return fahrenheit
# qst4()

def qst5(moeda = 'R$'):
    # Descrição:
    #   Escreva um programa que solicite ao usuário o seu salário mensal e o número de meses trabalhados no ano.
    #   Calcule e imprima o salário anual.
    salario = float(input('informe o salário mensal: '))
    meses = int(input('Durante X meses: '))
    anual = '{m} {s:,.2f} durante {mes} meses da {m} {a:,.2f} anualmente'.format(m=moeda, s=salario, mes=meses, a=salario*meses)
    print(anual)
    return anual
# qst5()

def qst6():
    # Descrição:    
    #   Escreva um programa que solicite ao usuário um número e verifique se ele é par ou ímpar.
    #   Imprima uma mensagem informando o resultado.
    par = 'Ímpar'
    num = int(input('Informe seu número: '))
    if(num%2 == 0):
        par = 'Par'
    string = '{} é {}'.format(num, par)
    print(string)
    return string
# qst6()

def qst7():
    # Descrição:    
    #   Escreva um programa que solicite ao usuário dois valores booleanos (True ou False) e armazene-os em variáveis.
    #   Em seguida, aplique os operadores lógicos "and", "or" e "not" entre essas variáveis e imprima os resultados.
    bol1 = input('True ou False? ')
    bol2 = input('True ou False? ')
    if(bol1 == 'True'):
        bol1 = True
    else:
        bol1 = False
    if(bol2 == 'True'):
        bol2 = True
    else:
        bol2 = False
    e = '{} and {} = {}'.format(bol1, bol2, bol1 and bol2)
    ou = '{} or {} = {}'.format(bol1, bol2, bol1 or bol2)
    nao1 = 'not {} = {}'.format(bol1, not bol1)
    nao2 = 'not {} = {}'.format(bol2, not bol2)
    print('Resultados')
    print('\t'+e)
    print('\t'+ou)
    print('\t'+nao1)
    print('\t'+nao2)
    return {'And': e, 'Or': ou, 'Not1': nao1, 'Not2': nao2}
# qst7()

def qst8():
    # Descrição:    
    #   Escreva um programa que solicite ao usuário duas strings e verifique se elas são iguais.
    #   Imprima uma mensagem informando o resultado da comparação.
    string1 = input('Informe a 1° palavra: ')
    string2 = input('Informe a 2° palavra: ')
    if(string1 == string2):
        print('{} é igual a {}'.format(string1, string2))
        return True
    print('{} é diferente a {}'.format(string1, string2))
    return False
# qst8()

def qst9():
    # Descrição:    
    #   Escreva um programa que solicite ao usuário dois números e verifique se o primeiro número é maior que o segundo.
    #   Imprima uma mensagem informando o resultado da comparação.
    num1 = float(input('informe o 1° número: '))
    num2 = float(input('informe o 2° número: '))
    if(num1 > num2):
        print('{} é maior que {}'.format(num1, num2))
        return True
    print('{} é menor que {}'.format(num1, num2))
    return False
# qst9()

def qst10():
    # Descrição:    
    #   Escreva um programa que solicite ao usuário a sua idade e verifique se ele é maior de idade (idade igual ou superior a 18 anos). 
    #   Imprima uma mensagem informando o resultado.
    idade = int(input('Informe sua idade: '))
    if(idade >= 18):
        print('Usuário maior de idade')
        return True
    print('Usuário menor de idade')
    return False
# qst10()

def qst11():
    # Descrição:    
    #   Escreva um programa em Python que solicite ao usuário dois números inteiros e troque os valores das variáveis.
    #   Em seguida, imprima os valores atualizados.
    x = int(input('Informe o 1° número: '))
    y = int(input('Informe o 2° número: '))
    print('Início: X = {} e Y = {}'.format(x,y))
    __temp = x
    x = y
    y = __temp
    print('Fim: X = {} e Y = {}'.format(x,y))
    return {'X': x, 'Y': y}
# qst11()

def qst12():
    # Descrição:    
    #   Solicite ao usuário o primeiro número inteiro e armazene-o em uma variável chamada numero1.
    #   Solicite ao usuário o segundo número inteiro e armazene-o em uma variável chamada numero2.
    #   Troque os valores das variáveis numero1 e numero2 utilizando atribuição múltipla. 
    #   Imprima os valores atualizados das variáveis utilizando a função print().
    x = int(input('Informe o 1° número: '))
    y = int(input('Informe o 2° número: '))
    print('Início: X = {} e Y = {}'.format(x,y))
    x,y = y,x
    print('Fim: X = {} e Y = {}'.format(x,y))
    return {'X': x, 'Y': y}
# qst12()

def qst13():
    # Descrição:    
    #   Um foguete atinge uma velocidade constante de 1500 m/s. 
    #   Se ele leva 40 segundos para atingir essa velocidade, qual é a altitude máxima que o foguete alcançará?
    tempo = int(input('Informe quantos segundos passaram: '))
    print('1500 m/s * {} = {:,.2f} m'.format(tempo, 1500*tempo))
    return tempo*1500
# qst13()

def qst14():
    # Descrição:    
    #   Um sistema de foguete opera em Celsius, mas você precisa fornecer a temperatura em Fahrenheit. 
    #   Dada a fórmula de conversão: Fahrenheit = (Celsius * 9/5) + 32, converta uma temperatura de 25°C para Fahrenheit.
    grau = 25
    fahrenheit = "{:0.2f} °C = {:0.2f} °F".format(grau, grau * (9/5) + 32)
    print(fahrenheit)
    return(fahrenheit)
# qst14()    

def qst15():
    # Descrição:    
    #   Escreva um programa que dado um dia, mes e ano calcule o valor em termos de UNIX Epoch Time
    #   (o número de milessegundos desde 00:00 de 01 de Janeiro de 1970).
    #   a) Considere que todos os anos possuem 365 dias 
    #   b) Considere os anos bissextos
    dia = input() 
    mes = input()
    ano = input()
    
    return ''
