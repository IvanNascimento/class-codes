def Texto():
  entrada = input()
  lista = []
  while entrada != "-1":
    lista.append(entrada)
    entrada = input()
  # rstrip remove /n
  index = [3 * i for i in range(round(len(lista)/3))]
  lista = [lista[i].rstrip().capitalize()+"\n" for i in index]
  lista = sorted(lista)
  return lista

def Texto2(mostrar = False):
  entrada = input()
  lista = []
  while entrada != "-1":
    lista.append(entrada)
    entrada = input()
  lista = [lista[i].rstrip().capitalize() for i in range(len(lista))]  
  lista = [lista[i] for i in range(len(lista)) if lista[i] != lista[i-1]]
  lista = sorted(lista)
  if mostrar:
    for i in lista:
      print(i)
  return lista

#number only
def number(mostrar = False):
  entrada = input()
  lista = []
  while entrada != "-1":
    lista.append(entrada)
    entrada = input()
  lista = [int(lista[i].rstrip().capitalize()) for i in range(len(lista))]  
  lista = [lista[i] for i in range(len(lista)) if lista[i] != lista[i-1]]
  lista = sorted(lista)
  if mostrar:
    for i in lista:
      print(i)
  return lista

def Arquivo(entrada, src = "Mangas"):
  lista = entrada
  file = open(r"C:\Users\Cliente\Desktop\ "+src+ ".txt","w")
  for i in lista:
    file.write(i+"\n")
  file.close()

#Arquivo(Texto2(), "Texte")
Texto2(True)
