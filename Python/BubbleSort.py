# Bubble Sort

import datetime, time

def Ordenar(lista):
  comp = 0
  trocas = 0
  n = len(lista)
  d = time.clock()
  for j in range(n):
    for i in range(n-1):
      comp += 1
      if(lista[i] > lista[i+1]):
        trocas += 1
        temp = lista[i]
        lista[i] = lista[i+1]
        lista[i+1] = temp
  seconds = time.clock()
  print("Lista ordenada:")
  for i in lista:
    print(i, end=" ")
  else:
    print()
  print("Time(Milliseconds): %0.0f"%(seconds*10**3))
  print("Time(Microseconds): %0.0f"%(seconds*10**6))
  print("Comparações:", comp)
  print("Trocas:", trocas)

print("Ensira a lista a ser ordenada: ")
n = input().split()
n = [int(n[i]) for i in range(len(n))]
Ordenar(n)

