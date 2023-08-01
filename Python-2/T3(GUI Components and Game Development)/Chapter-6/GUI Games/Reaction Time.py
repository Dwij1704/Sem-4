import SimpleGUICS2Pygame.simpleguics2pygame as Simplegui
frame=Simplegui.create_frame('Test',500,500,200) # Title, width, height, control width 
time=0
flag=0
def timerHandler():
    global time
    time+=0.001
def draw(canvas):
    global time
    canvas.draw_text(str(time),[250,250],20,'red')
def start():
    global flag,time
    if flag==1:
        timer.stop()
        flag=2
    elif flag==2:
        time=0
        flag=0
    else:
        timer.start()
        flag=1
timer=Simplegui.create_timer(1,timerHandler)
frame.set_draw_handler(draw)
frame.add_button('Start',start)
frame.start()