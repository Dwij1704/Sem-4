import SimpleGUICS2Pygame.simpleguics2pygame as Simplegui
frame=Simplegui.create_frame('Test',500,500,200) # Title, width, height, control width
def draw(canvas):
    frame.set_canvas_background('white')
    image=Simplegui.load_image('https://dwij1704.github.io/M.A.S.A-Mostly%20Aimless%20Space%20Agency/res/LOGO.png')
    canvas.draw_image(image,(image.get_width()/2,image.get_height()/2),(image.get_width(),image.get_height()),(250,250),(500,500),1.57) # image, center_source, width_height_source, center_dest, width_height_dest, rotation(radion value ex: 1.57 will rotate 90 degree)
    # Local Image:-
    # localImage=Simplegui._load_local_image('Wallpaper.png')
    # canvas.draw_image(localImage,(localImage.get_width()/2,localImage.get_height()/2),(localImage.get_width(),localImage.get_height()),(250,250),(500,500)) # image, center_source, width_height_source, center_dest, width_height_dest
frame.set_draw_handler(draw)
frame.start()