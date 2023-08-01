import SimpleGUICS2Pygame.simpleguics2pygame as Simplegui
frame=Simplegui.create_frame('Keyboard',500,500,200) # Title, width, height, control width
currKey=''
def keyDown(key):
    global currKey
    currKey=chr(key)
def keyUp(key):
    global currKey
    currKey=''
def draw(canvas):
    canvas.draw_text(currKey,[250,250],20,'blue')
frame.set_keydown_handler(keyDown)
frame.set_keyup_handler(keyUp)
frame.set_draw_handler(draw)
frame.start()