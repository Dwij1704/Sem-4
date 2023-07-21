import SimpleGUICS2Pygame as Simplegui
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
# timer=simp.create_timer(interval,handler), here internal is in milliseconds and handler is a function
def timer_handler():
    print("Timer Handler called")
timer=Simplegui.create_timer(1000,timer_handler)
timer.start()