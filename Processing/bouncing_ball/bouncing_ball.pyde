velx = random(-3,4)
vely = random(-3,4)
x = 0
y = 0
raio = 15
bx = 0
by = 0
rl = 200
rc = 20
pontos = 0
terminou = False
comeca = False
almenta = 0
pos = []


def setup():
    global x,y,by,rl,bx
    size(500,500)
    x = width/2
    y = height/2
    bx = (width/2) - (rl/2)
    by = height - 50
    
    

def draw():
    global x,y,velx,vely,raio,by,rl,rc,bx,pontos,terminou,comeca,almenta,pos,transparencia
    background(0)
    noStroke() #tira as bordas
    fill(255)
    if terminou:
        comeca = False
        if not comeca:
            textAlign(CENTER)
            textSize(50)
            text("Game over",width/2,height/2)
            textSize(25)
            text("Pontos: %d"%pontos,width/2,(height/2)+25)
    else:
        textSize(16)
        textAlign(LEFT)
        ellipse(x,y,raio*2,raio*2)
        rect(bx,by,rl,rc)
        text("Pontos: %d" % pontos, 20,20)
    if comeca:
        y += vely
        x += velx
        
        if len(pos) == 10:
            pos = pos[1:]
        pos.append((x,y))
        
        
        dif = 0
        transparencia = 255
        for i,j in pos[::-1]:
            transparencia -= 30
            fill(255,0,0,transparencia)
            ellipse(i,j,raio*2-dif,raio*2-dif)
            dif += 1
        
        if (y >= by - raio and y <= by) and (x >= bx and x <= (bx+rl)):
            vely = -vely
            pontos += 5
            almenta += 5
        if y > (height-raio) or y < raio:
            vely = -vely
        if x > (width-raio) or x < raio:
            velx = -velx
        if y > by:
            terminou = True
        if almenta >= 10:
            velx += 2
            vely += 2
            rl -= 5
            almenta = 0
        
    else:
        if not terminou:
            textSize(50)
            textAlign(CENTER)
            text("Paused",width/2,height/2)


def mouseMoved():
    global bx
    bx = mouseX
    if bx > (width-rl):
        bx = width-rl
    if bx < 0:
        bx = 0

def mouseClicked():
    global comeca
    if comeca:
        comeca = False
    else:
        comeca = True