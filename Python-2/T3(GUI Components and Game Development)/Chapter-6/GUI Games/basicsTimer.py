import SimpleGUICS2Pygame.simpleguics2pygame as Simplegui
# Program Structure:
# global(state)
# Helper Function
# Classes
# Define event handler
# create a frame
# register event handler
# start frame and timers

# Timer:
# create a timer
# start timer
# stop timer
# timer is running or not
# timer=Simplegui.create_timer(interval,handler), here internal is in milliseconds and handler is a function
t=0
def timerHandler():
    # Print 5 times
    global t
    while t==5:
        timer.stop()
    print('hello',t)
    t+=1
timer=Simplegui.create_timer(1000,timerHandler) # 1000 milliseconds = 1 second
# timer.start()
def timerHandler2():
    pass
timerRun=Simplegui.create_timer(1000,timerHandler2)
print(timerRun.is_running())
timerRun.start()
print(timerRun.is_running())
timerRun.stop()
print(timerRun.is_running())