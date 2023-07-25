import SimpleGUICS2Pygame.simpleguics2pygame as Simplegui
def draw(canvas):
    canvas.draw_line([50,50],[450,450],5,'blue')
    canvas.draw_line([450,50],[50,450],5,'blue')
    canvas.draw_polygon([[150,150],[350,150],[350,350],[150,350]],5,'white','white')
    canvas.draw_circle([50,50],50,5,'red')
    canvas.draw_circle([450,450],50,5,'red')
    canvas.draw_circle([50,450],50,5,'red')
    canvas.draw_circle([450,50],50,5,'red')
frame=Simplegui.create_frame("Task-5",500,500)
frame.set_draw_handler(draw)
frame.start()