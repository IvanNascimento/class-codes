r,g,b=206,9,68
raio = 50
desenha=True
posx=random(640)
posy=random(480)
tempo=0
pontos=0

def setup():
    size(640,480)

def draw():
    global r,g,b,posx,posy,raio,tempo
    background(255,155,0)
    fill(r,g,b)
    if tempo < 60:
        tempo+=1
    else:
        tempo = 0
        posx=random(width)
        posy=random(height)
    ellipse(posx, posy, raio, raio)
    textSize(14)
    text("Socore: %d" %pontos ,20,20 )
        
def mousePressed():
    global posx,posy,raio,desenha,pontos
    if dist(mouseX,mouseY,posx,posy)<raio:
        posx=random(width)
        posy=random(height)
        pontos+=1