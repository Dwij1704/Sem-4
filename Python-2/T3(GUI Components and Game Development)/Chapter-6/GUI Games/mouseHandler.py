import SimpleGUICS2Pygame.simpleguics2pygame as sg

def click(pos):
    print(pos)

def drag(pos):
    print(pos)
frame=sg.create_frame("Mouse",500,500)
frame.set_mousedrag_handler(drag)
frame.set_mouseclick_handler(click)
frame.star