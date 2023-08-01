import SimpleGUICS2Pygame.simpleguics2pygame as Simplegui
frame=Simplegui.create_frame('Task-12',500,500,200)
x=500
y=500
position=[x/2,y/2]
radius=15
velocity=[-1,0]
def draw(canvas):
    position[0]+=velocity[1]
    position[1]+=velocity[0]
    canvas.draw_circle(position,radius,2,'Red','Red')
frame.set_draw_handler(draw)
frame.start()