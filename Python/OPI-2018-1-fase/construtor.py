raw_input()
lista = raw_input().split()
lista.sort()
t = 0
nt = 0
j = 0
for i in range(len(lista)):
    c = lista.count(lista[i])
    if c > t:
        t = c

while(j < len(lista)-1):
    if lista[j] == lista[j+1]:
        del lista[j]
    else:
        j += 1
nt = len(lista)

print("%d %d"%(t, nt))
