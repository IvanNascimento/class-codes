x = 0 
y = 0
vx = 7
vy = 5
r = 10
def setup():
    global x,y
    size(400,400)
    x = width/2
    y = height/2

def draw():
    global x,y,vx,vy,r
    background(255)
    ellipse(x,y,r*2,r*2)
    if y >= height - r or y <= r:
        vy *= -0.9
    if x >= width - r or x <= r:
        vx *= -0.9
    y += vy
    x += vx
    
    #vx -= 03
    vy += 0.3