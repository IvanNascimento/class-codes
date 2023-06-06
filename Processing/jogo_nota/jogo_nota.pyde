l = 50
a = 30
inter = 10
objetos = []
bolas = []
j = 0
corb = " "
lanca = False
ab = 270
muda = True
raio = 10
vel = PVector.fromAngle(radians(ab))
xl = 200
yl = 300
ref = 0
sxl = True


def setup():
    global foto,linha
    size(400, 400)
    foto = loadImage("background.jpg")
    cont = 0
    i = 0
    ya = 0
    ia = 1
    for j in range(32):
        if cont == 8:
            ya = a*ia
            i = 0
            cont = 0
            ia += 1
        r = int(random(3))
        cores = ["RED","BLUE","GREEN"]
        cor = cores[r]
        xa = l*i
        objetos.append( [xa, ya, True,cor] )
        i += 1
        cont += 1
    bolas.append([PVector(200,355),True])

def draw():
    global mostra,corb,j,bola,muda,vel,foto,ref,lanca,bola,corboli,xl,ab
    image(foto,0,0)
    bola = bolas[ref][0]
    linha = PVector(bola.x,bola.y)

    for o in range(len(objetos)):
        r = objetos[o]
        if (r[0] <= (bola.x) <= r[0] + l) and (r[1] + a >= (bola.y) >= r[1]) and (corb == r[3]) and (r[2]):
            objetos[o][2] = False
            bolas[ref][1] = False
            ref += 1
            lanca = False
            muda = True
            ab = 270
            xl = 200
        if r[2]:
            if r[3] == "RED":
                fill(255,0,0)
            elif r[3] == "BLUE":
                fill(0,0,255)
            elif r[3] == "GREEN":
                fill(0,255,0)
            rect(r[0], r[1], l, a)

    if bola.y <= 0 or bola.y >= height:
        bolas[ref][1] = False
        ref += 1
        lanca = False

    if lanca:
        bola.add(vel)
                        
    if bola.x <= 0 or bola.x >= width:
        vel.x = -vel.x
        bola.add(vel)

    if not lanca:
        line(xl,yl,linha.x, linha.y)

    if muda:
        j = int(random(3))
        cores = ["RED","BLUE","GREEN"]
        corb = cores[j]
        muda = False

    if bolas[ref][1]:
        if corb == "RED":
            fill(255,0,0)
        elif corb == "BLUE":
            fill(0,0,255)
        elif corb == "GREEN":
            fill(0,255,0)        
        ellipse(bola.x, bola.y, raio, raio)

    fill(0)
    rect(width/2 -10,height - 45,20,50)
    
    if not bolas[ref][1]:
        bolas.append([PVector(200,355),True])

def keyPressed():
    global xl,lanca,ab,vel,sxl
    if key == ' ':
        lanca = True
        bolas.append([PVector(200,355),True])
    if keyCode == LEFT:
        if not lanca:
            if sxl:
                xl = xl -1*5            
            ab -= 1*5
            if ab <= 200:
                ab = 200
                sxl = False
            else:
                sxl = True
            vel = PVector.fromAngle(radians(ab))
    if keyCode == RIGHT:
        if not lanca:
            if sxl:
                xl = xl + 1*5
            ab += 1*5
            if ab >= 330:
                ab = 330
                sxl = False
            else:
                sxl = True
            vel = PVector.fromAngle(radians(ab))