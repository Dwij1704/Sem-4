import SimpleGUICS2Pygame.simpleguics2pygame as Simplegui
import random
ranint=random.randint(1000,5000)
frame=Simplegui.create_frame('Task-12',500,500,200)
time=0
x=-100
def draw(canvas):
    global x
    canvas.draw_circle([x,100],20,5,'black','red') # center, radius, line_width, line_color
def react():
    frame.add_label(str(time),100)
def timerHandler():
    global x,time
    x=100
    finalTimer.start()
def finaltimerHandler():
    global time
    time+=0.001
frame.set_draw_handler(draw)
frame.add_button('React',react)
timer=Simplegui.create_timer(ranint,timerHandler)
finalTimer=Simplegui.create_timer(1,finaltimerHandler)
timer.start()
frame.start()