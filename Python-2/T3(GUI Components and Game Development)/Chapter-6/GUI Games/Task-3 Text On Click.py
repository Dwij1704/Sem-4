import SimpleGUICS2Pygame.simpleguics2pygame as Simplegui
message="Welcome"
def click():
    global message
    message="Python"
def draw(canvas):
    canvas.draw_text(message,[50,100],36,'red')
frame=Simplegui.create_frame('Text On Click',500,500)
frame.add_button('Click',click)
frame.set_draw_handler(draw)
frame.start()