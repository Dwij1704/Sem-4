import SimpleGUICS2Pygame.simpleguics2pygame as Simplegui
frame=Simplegui.create_frame('Test',500,500,200) # Title, width, height, control width 
def buttonHandler():
    print("Button Clicked")
frame.add_button('Click Me!',buttonHandler)
frame.start()