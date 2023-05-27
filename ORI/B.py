primeiroCabo = input()
segundoCabo = input()
ok = primeiroCabo == segundoCabo
i = 0
while i < len(primeiroCabo)-3:
  if (primeiroCabo[i] != primeiroCabo[i+2]) or (segundoCabo[i] != segundoCabo[i+2]):
    ok = False
    break
  i+=5
if(ok):
  print("Sim")
else:
  print("Não")