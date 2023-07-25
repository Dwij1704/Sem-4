import SimpleGUICS2Pygame.simpleguics2pygame as Simplegui
color='Red'
def inputHandler(inp):
    print("input is",inp)
frame=Simplegui.create_frame("Task-5",500,500)
inp=frame.add_input("Enter text",inputHandler,100)
frame.start()