import SimpleGUICS2Pygame.simpleguics2pygame as Simplegui
frame=Simplegui.create_frame('Sound',500,500)
sound=Simplegui._load_local_sound('Mahesh.wav')  
def play():
    sound.play()
def pause():
    sound.pause()
def rewind():
    sound.rewind()
frame.add_button('Play',play)
frame.add_button('Pause',pause)
frame.add_button('Rewind',rewind)
frame.start()