l = 50
a = 30
objetos = []

def setup():
    size(400, 400)
    frameRate(45)
    for i in range(50):
        xa = random(0,width)
        ya = 120
        objetos.append( [xa, ya, True] )

#xb = 250
#yb = 10
mostra = True
def draw():
    global xb, yb, mostra
    x = 175
    y = 200
    i = 5
    #yb + = 1
    
    background(255)
    ellipse(mouseX, mouseY, 10, 10)
    
    for o in range(len(objetos)):
        r = objetos[o]
        if (r[0] <= mouseX <= r[0] + l) and (r[1] + a >= mouseY >= r[1]):
            objetos[o][2] = False
        if r[2]:    
            rect(r[0], r[1], l, a)