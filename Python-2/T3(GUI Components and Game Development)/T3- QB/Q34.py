import SimpleGUICS2Pygame.simpleguics2pygame as sg  
growth=0
growthInc=0.2
rad=10
def keydown(key):
    global growth
    if key==sg.KEY_MAP['up']:
        growth+=growthInc
    elif key==sg.KEY_MAP['down']:
        growth-=growthInc
def keyup(key):
    global growth
    if (key==sg.KEY_MAP['up']) or (key==sg.KEY_MAP['down']):
        growth=0
def draw(canvas):
    global  rad
    rad+=growth
    if rad<1:
        rad=1
    canvas.draw_circle((250,250),rad,1,'white')
frame=sg.create_frame('Task',500,500)
frame.set_keydown_handler(keydown)
frame.set_keyup_handler(keyup)
frame.set_draw_handler(draw)
frame.start()