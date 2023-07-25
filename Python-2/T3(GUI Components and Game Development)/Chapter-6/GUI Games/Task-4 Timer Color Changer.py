import SimpleGUICS2Pygame.simpleguics2pygame as Simplegui
frame=Simplegui.create_frame("Task-4",500,500)
t=0
colors=['Violet','Indigo','Blue','Green','Yellow','Orange','Red']
def draw(canvas):
    frame.set_canvas_background(colors[t])
def timerHandler():
    global t
    t+=1
    if t==7:
        t=0
def buttonHandlerStart():
    timer.start()
    frame.add_label('Timer Started')
def buttonHandlerStop():
    frame.add_label('Timer Stopped')
    timer.stop()
frame.set_draw_handler(draw)
timer=Simplegui.create_timer(500,timerHandler) # 1000 milliseconds = 1 second
frame.add_button('Start',buttonHandlerStart)
frame.add_button('Stop',buttonHandlerStop)
frame.start()