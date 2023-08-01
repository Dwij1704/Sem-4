import SimpleGUICS2Pygame.simpleguics2pygame as simplegui

width = 500
height = 500
radius = 30
ball_pos = [width / 2, height / 2]
vel = [0, 0]

def draw(canvas):
    global ball_pos, vel

    # Reverse direction if ball hits the border
    if ball_pos[0] <= radius or ball_pos[0] >= width - radius:
        vel[0] = -vel[0]
    if ball_pos[1] <= radius or ball_pos[1] >= height - radius:
        vel[1] = -vel[1]

    # Update ball position
    ball_pos[0] += vel[0]
    ball_pos[1] += vel[1]

    canvas.draw_circle(ball_pos, radius, 2, 'skyblue', 'skyblue')

def keydown(key):
    global vel

    acc = 1

    if key == simplegui.KEY_MAP['left']:
        vel[0] -= acc
    elif key == simplegui.KEY_MAP['right']:
        vel[0] += acc
    elif key == simplegui.KEY_MAP['down']:
        vel[1] += acc
    elif key == simplegui.KEY_MAP['up']:
        vel[1] -= acc
    else:
        vel = [0, 0]

frame = simplegui.create_frame("HII", width, height)

frame.set_keydown_handler(keydown)

# Register event handlers
frame.set_draw_handler(draw)

# Start
frame.start()