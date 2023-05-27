cubos = int(raw_input())
nivel = 0
prox = 1
b = 0
while(True):
    for i in range(1, prox+1):
        b += i
    if cubos < b:
        break
    nivel += 1
    cubos -= b
    b = 0
    prox += 1
    
print(nivel)
