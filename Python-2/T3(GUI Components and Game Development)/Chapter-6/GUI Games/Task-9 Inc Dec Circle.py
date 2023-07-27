import SimpleGUICS2Pygame.simpleguics2pygame as Simplegui
frame=Simplegui.create_frame('Task-9',500,500,200)
i=10
def draw(canvas):
    global i
    canvas.draw_circle([250,250],i,3,'white')
def increment():
    global i
    i+=10
    if i==250:
        i=10
def decrement():
    global i
    if i==10:
        i=10
    else:
        i-=10
frame.add_button('Increment',increment)
frame.add_button('decrement',decrement)
frame.set_draw_handler(draw)
frame.start()