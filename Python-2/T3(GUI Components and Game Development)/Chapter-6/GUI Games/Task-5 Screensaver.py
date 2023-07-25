import SimpleGUICS2Pygame.simpleguics2pygame as Simplegui
y=0
flag=0
message='Welcome'
def timerHandler():
    global y,flag
    if flag==1:
        y-=10
        if y==10:
            flag=0
    else:
        y+=10
        if y==490:
            y=500
            flag=1
def draw(canvas):
    canvas.draw_text(message,[100,y],20,'red')
frame=Simplegui.create_frame("Task-4",500,500)
timer=Simplegui.create_timer(100,timerHandler)
frame.set_draw_handler(draw)
timer.start()
frame.start()