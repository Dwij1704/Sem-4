import SimpleGUICS2Pygame.simpleguics2pygame as simplegui
frame=simplegui.create_frame("Task-19",500,500)
coords=[(250,250)]
def draw(canvas):
    canvas.draw_polyline(coords,5,'red')
def clickHandler(click):
    if click!=coords[-1]:
        coords.append(click)
def reset():
    global coords
    c=coords[-1]
    coords=[c]
frame.set_draw_handler(draw)
frame.add_button("Reset",reset)
frame.set_mouseclick_handler(clickHandler)
frame.start()