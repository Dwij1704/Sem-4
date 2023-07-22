import SimpleGUICS2Pygame.simpleguics2pygame as Simplegui
frame=Simplegui.create_frame('Test',500,500,200) # Title, width, height, control width 
count=1
t=-1
colors=['Violet','Indigo','Blue','Green','Yellow','Orange','Red']
def draw(canvas):
    frame.set_canvas_background(colors[t])
def buttonHandlerNext():
    global count,t
    label=frame.add_label(f' You Clicked the button {count} times')
    count+=1
    t+=1
    if t==7:
        t=0
    draw(frame)
def buttonHandlerPrev():
    global count,t
    label=frame.add_label(f'You Clicked the button {count} times')
    count+=1
    t-=1
    if t==-1:
        t=6
    draw(frame)
frame.set_draw_handler(draw)
frame.add_button('Next',buttonHandlerNext)
frame.add_button('Previous',buttonHandlerPrev)
frame.start()