import SimpleGUICS2Pygame.simpleguics2pygame as Simplegui
color='White'
def inputHandler(inp):
    global color
    color=inp
def draw(canvas):
    frame.set_canvas_background(color)
frame=Simplegui.create_frame("Task-5",500,500)
inp=frame.add_input("Enter Color",inputHandler,100)
frame.set_draw_handler(draw)
frame.start()