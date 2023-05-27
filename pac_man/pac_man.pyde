
def setup():
    global foto
    size(600,600)
    foto = loadImage("map_1.jpg")

def draw():
    image(foto, 0, 0,width,height)