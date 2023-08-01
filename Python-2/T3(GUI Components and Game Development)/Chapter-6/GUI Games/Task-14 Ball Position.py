import SimpleGUICS2Pygame.simpleguics2pygame as Simplegui
frame=Simplegui.create_frame('Task-12',500,500,200)
x=300
y=300
position=[x,y]
radius=15
velocity=50
def keydown(key):
    global position,velocity
    if key==Simplegui.KEY_MAP['left']:
        position[0] -= velocity
    elif key==Simplegui.KEY_MAP['right']:
        position[0] += velocity
    elif key==Simplegui.KEY_MAP['up']:
        position[1] -= velocity
    elif key==Simplegui.KEY_MAP['down']:
        position[1] += velocity
def draw(canvas):
    canvas.draw_circle(position,radius,2,'Red','Red')
frame.set_draw_handler(draw)
frame.set_keydown_handler(keydown)
frame.start()