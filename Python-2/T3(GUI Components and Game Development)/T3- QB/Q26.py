import SimpleGUICS2Pygame.simpleguics2pygame as sg
frame=sg.create_frame("Task",500,500)
rad=1
def inc():
    global rad
    rad+=5
def dec():
    global rad
    rad-=5
    if rad<1:
        rad=1
def draw(canvas):
    canvas.draw_circle((250,250),rad,1,'white')
frame.add_button('inc',inc)
frame.add_button('dec',dec)
frame.set_draw_handler(draw)
frame.start()