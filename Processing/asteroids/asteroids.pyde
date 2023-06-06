a = 0

def setup():
    size(600,600)
    noFill()
    
def draw():
    background(0)
    translate(width/2,height/2)
    rotate(radians(a)) #rodar
    stroke(255)
    triangle(0,15,15,-15,-15,-15)

def keyPressed():
    global a
    if keyCode == LEFT:
        a -= 5
    if keyCode == RIGHT:
        a += 5