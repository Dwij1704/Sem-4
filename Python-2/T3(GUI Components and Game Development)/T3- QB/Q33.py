import SimpleGUICS2Pygame.simpleguics2pygame as sg
rad=5
def draw(canvas):
    canvas.draw_circle((250,250),rad,1,'white')
def handler(key):
    global rad
    if key==sg.KEY_MAP['up']:
        rad+=5
    elif key==sg.KEY_MAP['down']:
        rad-=5
        if rad<1:
            rad=5
frame=sg.create_frame('Task',500,500)
frame.set_keydown_handler(handler)
frame.set_draw_handler(draw)
frame.start()