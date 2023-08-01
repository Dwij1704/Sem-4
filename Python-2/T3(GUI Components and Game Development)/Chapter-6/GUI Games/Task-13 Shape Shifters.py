import SimpleGUICS2Pygame.simpleguics2pygame as Simplegui
frame=Simplegui.create_frame('Task-12',500,500,200)
shapes=['Square','Circle','Triangle']
colors=['Red','Green','Blue','Yellow']
colorInd=0
size=[100,100]
fill=False
ind=0
def draw(canvas):
    global ind,size,fill,colorInd
    if shapes[ind]=='Square':
        if fill==False:
            canvas.draw_polygon([(250-size[0]/2,250-size[1]/2),(250+size[0]/2,250-size[1]/2),(250+size[0]/2,250+size[1]/2),(250-size[0]/2,250+size[1]/2)],1,colors[colorInd])
        else:
            canvas.draw_polygon([(250-size[0]/2,250-size[1]/2),(250+size[0]/2,250-size[1]/2),(250+size[0]/2,250+size[1]/2),(250-size[0]/2,250+size[1]/2)],1,colors[colorInd], colors[colorInd])
    elif shapes[ind]=='Circle':
        if fill==False:
            canvas.draw_circle((250,250),size[0]/2,1,colors[colorInd])
        else:
            canvas.draw_circle((250,250),size[0]/2,1,colors[colorInd], colors[colorInd])
    elif shapes[ind]=='Triangle':
        if fill==False:
            canvas.draw_polygon([(250-size[0]/2,250+size[1]/2),(250+size[0]/2,250+size[1]/2),(250,250-size[1]/2)],1,colors[colorInd])
        else:
            canvas.draw_polygon([(250-size[0]/2,250+size[1]/2),(250+size[0]/2,250+size[1]/2),(250,250-size[1]/2)],1,colors[colorInd], colors[colorInd])
def down(key):
    global ind, size, fill, colorInd
    if key==Simplegui.KEY_MAP['s']:
        ind -= 1
        if ind < 0:
            ind = 0
    elif key==Simplegui.KEY_MAP['d']:
        ind += 1
        if ind > (len(shapes) - 1):
            ind -=1
    if key==Simplegui.KEY_MAP['f']:
        fill = not fill
    if key==Simplegui.KEY_MAP['z']:
        if size[0] > 10:
            size[0] -= 10
            size[1] -= 10
    elif key==Simplegui.KEY_MAP['x']:
        size[0] += 10
        size[1] += 10
    if key==Simplegui.KEY_MAP['c']:
        colorInd -= 1
        if colorInd < 0:
            colorInd = 0
    elif key==Simplegui.KEY_MAP['v']:
        colorInd += 1
        if colorInd > (len(colors) - 1):
            colorInd -=1
frame.set_draw_handler(draw)
frame.set_keydown_handler(down)
frame.start()