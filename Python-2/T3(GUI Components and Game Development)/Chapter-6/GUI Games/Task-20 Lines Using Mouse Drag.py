import SimpleGUICS2Pygame.simpleguics2pygame as simplegui
frame=simplegui.create_frame("Task-19",500,500)
coords=[]
def draw(canvas):
    if len(coords)>0:
        canvas.draw_polyline(coords,5,'red')
def dragHandler(click):
    coords.append(click)
def reset():
    global coords
    c=coords[-1]
    coords=[c]
frame.set_draw_handler(draw)
frame.add_button("Reset",reset)
frame.set_mousedrag_handler(dragHandler)
frame.start()