# Python program to draw
# Rainbow Benzene
# using Turtle Programming
import turtle

colors = ["red", "purple", "blue", "green", "orange", "yellow"]
t = turtle.Pen()
while True:
  turtle.bgcolor("black")
  x = 0
  for x in range(360):
    t.pencolor(colors[x % 6])
    t.width(x // 100 + 1)
    t.forward(x)
    t.left(59) 

  turtle.clearscreen()
