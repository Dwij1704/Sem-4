import SimpleGUICS2Pygame.simpleguics2pygame as sg
sound = sg.load_sound("http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg")
flag = False
def play():
    global flag
    sound.play()
    flag = True
def pause():
    global flag
    if flag:
        sound.pause()
def rewind():
    global flag
    if flag:
        sound.rewind()
        flag = False
vol = 0
def increase():
    global vol
    vol += 0.1
    if vol > 1:
        vol = 1
    sound.set_volume(vol)
def decrease():
    global vol
    vol -= 0.1
    if vol < 0:
        vol = 0.1
    sound.set_volume(vol)
frame = sg.create_frame("Sound demo", 300, 300)
frame.add_button("Play", play)
frame.add_button("Pause", pause)
frame.add_button("Rewind", rewind)
frame.add_button("Increase volume", increase)
frame.add_button("Decrease volume", decrease)
frame.start()