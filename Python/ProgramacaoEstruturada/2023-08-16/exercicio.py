from math import pi
import datetime

def qst3():
    nome = input('Digite seu nome: ')
    idade = input('Digite sua idade: ')
    string = 'Seu nome é {}, você tem {} anos'.format(nome.capitalize() , idade)
    print(string)
    return string

def qst4():
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

def qst5():
    raio = float(input('informe raio do círculo: '))
    area = 'Área do círculo: π*{}**2 = {:0.2f}'.format(raio, pi*raio**2)
    perimetro = 'Perímetro do círculo: 2π*{} = {:0.2f}'.format(raio, 2*pi*raio)
    print('Resultados')
    print("\t"+area)
    print('\t'+perimetro)
    return {'Área': area, 'Perímetro': perimetro}

def qst6():
    grau = float(input('Informe a temperatura: '))
    fahrenheit = "{:0.2f} °C = {:0.2f} °F".format(grau, grau * (9/5) + 32)
    print(fahrenheit)
    return fahrenheit

def qst7(moeda = 'R$'):
    salario = float(input('informe o salário mensal: '))
    meses = int(input('Durante X meses: '))
    anual = '{m} {s:,.2f} durante {mes} meses da {m} {a:,.2f} anualmente'.format(m=moeda, s=salario, mes=meses, a=salario*meses)
    print(anual)
    return anual

def qst8():
    par = 'Ímpar'
    num = int(input('Informe seu número: '))
    if(num%2 == 0):
        par = 'Par'
    string = '{} é {}'.format(num, par)
    print(string)
    return string

def qst9():
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

def qst10():
    string1 = input('Informe a 1° palavra: ')
    string2 = input('Informe a 2° palavra: ')
    if(string1 == string2):
        print('{} é igual a {}'.format(string1, string2))
        return True
    print('{} é diferente a {}'.format(string1, string2))
    return False

def qst11():
    num1 = float(input('informe o 1° número: '))
    num2 = float(input('informe o 2° número: '))
    if(num1 > num2):
        print('{} é maior que {}'.format(num1, num2))
        return True
    print('{} é menor que {}'.format(num1, num2))
    return False

def qst12():
    idade = int(input('Informe sua idade: '))
    if(idade >= 18):
        print('Usuário maior de idade')
        return True
    print('Usuário menor de idade')
    return False

def qst13():
    x = int(input('Informe o 1° número: '))
    y = int(input('Informe o 2° número: '))
    print('Início: X = {} e Y = {}'.format(x,y))
    x,y = y,x
    print('Fim: X = {} e Y = {}'.format(x,y))
    return {'X': x, 'Y': y}

def qst14():
    tempo = int(input('Informe quantos segundos passaram: '))
    print('1500 m/s * {} = {:,.2f} m'.format(tempo, 1500*tempo))
    return tempo*1500

def qst15():
    diain = int(input('Insira o Dia: '))
    denovo = True
    while (denovo):
        print(' --- Opções --- ')
        print('\t Janeiro - 1')
        print('\t Fevereiro - 2')
        print('\t Março - 3')
        print('\t Abril - 4')
        print('\t Maio - 5')
        print('\t Junho - 6')
        print('\t Julho - 7')
        print('\t Agosto - 8')
        print('\t Setembro - 9')
        print('\t Outubro - 10')
        print('\t Novembro - 11')
        print('\t Desembro - 12')
        print(' --- Opções --- ')
        mesin = int(input('Insira o Mês: '))
        if(mesin >= 1 and mesin <= 12):
            denovo = False
        else:
            print('Insira uma resposta válida!')
    anoin = int(input('Insira o Ano: '))    
    __temp = anoin - 1970
    bissextos = __temp // 4
    print(bissextos)
