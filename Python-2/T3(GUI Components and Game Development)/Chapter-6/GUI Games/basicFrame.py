import SimpleGUICS2Pygame.simpleguics2pygame as Simplegui
frame=Simplegui.create_frame('Test',500,500,200) # Title, width, height, control width 
# By default control width is 200
t=0
colors=['Violet','Indigo','Blue','Green','Yellow','Orange','Red']
cords=[120,400,230,450,102,349,250]
def draw(joddCanvas):
    frame.set_canvas_background(colors[t]) 
    joddCanvas.draw_point([250,250],'white') # point, color
    joddCanvas.draw_text(colors[t],[cords[t],cords[6-t]],20,colors[6-t],'sans-serif') # text, point, font_size, font_color, font_family
    joddCanvas.draw_line([cords[t]+50,cords[6-t]+50],[cords[6-t]+25,cords[t]+25],5,colors[6-t]) # start_point, end_point, line_width, line_color
    joddCanvas.draw_polyline([[440,10],[480,40],[430,90],[450,150]],5,colors[6-t]) # points, line_width, line_color
    joddCanvas.draw_polygon([[440,210],[480,240],[430,290],[450,250]],5,colors[6-t],'white') # points, line_width, line_color, fill_color
    joddCanvas.draw_polygon([[340,210],[380,240],[330,290],[350,250]],5,colors[6-t]) # points, line_width, line_color, fill_color=none
    joddCanvas.draw_circle([250,250],50,5,colors[6-t]) # center, radius, line_width, line_color
    joddCanvas.draw_circle([150,150],50,5,colors[6-t], 'yellow') # center, radius, line_width, line_color, fill_color
frame.set_draw_handler(draw)
def changeColor():
    global t
    t+=1
    if t==7:
        t=0
timer=Simplegui.create_timer(1000,changeColor)
label1=frame.add_label('First')
label1=frame.add_label('Second',100)
label1=frame.add_label('Third',50)
timer.start()
frame.start()
