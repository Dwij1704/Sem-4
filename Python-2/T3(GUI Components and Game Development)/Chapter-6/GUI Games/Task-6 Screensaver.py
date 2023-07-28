import SimpleGUICS2Pygame.simpleguics2pygame as Simplegui
import random
message="ScreenSaver"
x=250
y=250
reached=False
x=random.randrange(0,400)
y=random.randrange(0,400)
currx=0
curry=0
def timerHandler():
    global x,y,reached,currx,curry
    if curry<y:
        curry+=10
    else:
        curry-=10
    if currx<x:
        currx+=10
    else:
        currx-=10
    if currx==x or curry==y:
        x=random.randrange(0,400)
        y=random.randrange(0,400)    
def draw(canvas):
    canvas.draw_text(message,[currx,curry],20,'red')
frame=Simplegui.create_frame("Task-4",500,500)
timer=Simplegui.create_timer(100,timerHandler)
frame.set_draw_handler(draw)
timer.start()
frame.start()