g = int(raw_input())
m = int(raw_input())
a = 0
while(True):
    a += 1
    g = g*3
    m = m*2
    if g > m:
        break
print(a)
