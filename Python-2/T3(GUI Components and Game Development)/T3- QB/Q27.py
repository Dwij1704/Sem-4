import SimpleGUICS2Pygame.simpleguics2pygame as sg
frame=sg.create_frame("1",500,500)
counter=0
flag=True
def draw(canvas):
    frame.set_canvas_background('red')
def timer():
    global counter
    counter+=1
def start():
    global flag,counter
    if flag:
        timer.start()
        flag=not flag
    else:
        timer.stop()
        print(counter)
        counter=0
        flag=not flag
def stop():
    timer.stop()
timer=sg.create_timer(10,timer)
frame.add_button('Start',start)
frame.add_button('Stop',stop)
frame.set_draw_handler(draw)
frame.start()