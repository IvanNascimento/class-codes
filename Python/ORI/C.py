pregadores = int(input())
linha2 = input()
linha2 = linha2.split(" ")
meias = int(linha2[0])
calcas = int(linha2[1])
blusas = int(linha2[2])
totalNecessario = (meias) + (calcas*2) + (blusas+1)
if (totalNecessario <= pregadores):
  print("Y")
else:
  print("N")