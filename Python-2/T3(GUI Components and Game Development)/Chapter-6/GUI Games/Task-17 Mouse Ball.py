import SimpleGUICS2Pygame.simpleguics2pygame as simplegui

width = 500
height = 500
radius = 30
ball_pos = [width/2, height/2]

def draw(canvas):
    canvas.draw_circle(ball_pos, radius, 2, 'red', 'white')

def mousemove(pos):
    global ball_pos
    ball_pos = list(pos)

def click(pos):
    global ball_pos
    ball_pos = list(pos)

frame = simplegui.create_frame("HII", width, height)
frame.set_draw_handler(draw)
frame.set_mouseclick_handler(click)
frame.set_mousedrag_handler(mousemove)
frame.start()
