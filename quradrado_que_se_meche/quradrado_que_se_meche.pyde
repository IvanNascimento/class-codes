posx=0
posy=0
tamanho=30
vel = 5
def setup():
    size(400,400)

def draw():
    global posx,posy
    background(100)
    rect(posx,posy,tamanho,tamanho)
    
def keyPressed():
    global posx,posy
    if keyCode == RIGHT:
        posx+=vel
    elif keyCode == LEFT:
        posx-=vel
    elif keyCode == UP:
        posy -= vel
    elif keyCode == DOWN:
        posy += vel