import SimpleGUICS2Pygame.simpleguics2pygame as Simplegui
frame=Simplegui.create_frame('Test',500,500,200) # Title, width, height, control width 
def timerHandler():
    print('Timer Ticking')
def start():
    frame.add_label('Timer Started')
    timer.start()
def stop():
    frame.add_label('Timer Stopped')
    timer.stop()
timer=Simplegui.create_timer(1000,timerHandler)
frame.add_button('Start',start)
frame.add_button('Stop',stop)
frame.start()