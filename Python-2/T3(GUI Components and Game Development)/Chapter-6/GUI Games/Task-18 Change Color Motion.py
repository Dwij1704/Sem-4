import SimpleGUICS2Pygame.simpleguics2pygame as simplegui
import math

width = 500
height = 500
radius = 20
ball_pos = [width/2, height/2]
ball_color = 'white'

def draw(canvas):
    canvas.draw_circle(ball_pos, radius, 2, 'red', ball_color)

def distance(p, q):
    return math.sqrt((p[0] - q[0]) ** 2 + (p[1] - q[1]) ** 2)

def mousemove(pos):
    global ball_pos
    ball_pos = list(pos)

def click(pos):
    global ball_color, ball_pos
    if distance(pos, ball_pos) < radius:
        ball_color = 'red' if ball_color == 'white' else 'white'
    else:
        ball_pos = list(pos)

frame = simplegui.create_frame("HII", width, height)
frame.set_draw_handler(draw)
frame.set_mouseclick_handler(click)
frame.set_mousedrag_handler(mousemove)
frame.start()
