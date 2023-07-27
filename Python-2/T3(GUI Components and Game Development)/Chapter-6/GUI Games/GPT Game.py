import SimpleGUICS2Pygame.simpleguics2pygame as Simplegui
import random

# Constants
CANVAS_WIDTH = 800
CANVAS_HEIGHT = 400
GROUND_HEIGHT = 50
DINO_WIDTH = 50
DINO_HEIGHT = 50

# Variables
dino_pos = [100, CANVAS_HEIGHT - GROUND_HEIGHT - DINO_HEIGHT]
dino_velocity = 0
gravity = 1
is_jumping = False
obstacle_width = 30
obstacle_height = 50
obstacle_pos = [CANVAS_WIDTH, CANVAS_HEIGHT - GROUND_HEIGHT - obstacle_height]
obstacle_speed = 5
score = 0
game_over = False
next_obstacle_time = 0
obstacle_interval = 100  # Adjust the interval to control obstacle occurrence frequency

def draw(canvas):
    global dino_pos, obstacle_pos, dino_velocity, is_jumping, score, game_over, obstacle_speed, next_obstacle_time

    if not game_over:
        dino_pos[1] += dino_velocity
        dino_velocity += gravity

        if dino_pos[1] >= CANVAS_HEIGHT - GROUND_HEIGHT - DINO_HEIGHT:
            dino_pos[1] = CANVAS_HEIGHT - GROUND_HEIGHT - DINO_HEIGHT
            dino_velocity = 0
            is_jumping = False

        # Update the obstacle position
        obstacle_pos[0] -= obstacle_speed

        # Check for collision with the obstacle
        if dino_pos[0] + DINO_WIDTH > obstacle_pos[0] and dino_pos[0] < obstacle_pos[0] + obstacle_width:
            if dino_pos[1] + DINO_HEIGHT > obstacle_pos[1]:
                game_over = True

        # Check if the obstacle has passed the screen
        if obstacle_pos[0] <= 0:
            obstacle_pos[0] = CANVAS_WIDTH
            score += 1
            obstacle_speed += 0.5  # Increase obstacle speed after each obstacle
            next_obstacle_time = random.randint(40, 100)  # Set the next obstacle occurrence time

        # Spawn a new obstacle after the next obstacle_time
        if next_obstacle_time > 0:
            next_obstacle_time -= 1
        else:
            obstacle_pos[1] = CANVAS_HEIGHT - GROUND_HEIGHT - obstacle_height

    # Draw the ground
    canvas.draw_line([0, CANVAS_HEIGHT - GROUND_HEIGHT], [CANVAS_WIDTH, CANVAS_HEIGHT - GROUND_HEIGHT], 4, "Gray")

    # Draw the dinosaur
    canvas.draw_polygon([
        [dino_pos[0], dino_pos[1]+45],
        [dino_pos[0] + DINO_WIDTH, dino_pos[1]+45],
        [dino_pos[0] + DINO_WIDTH / 2, dino_pos[1] - DINO_HEIGHT+45]
    ], 1, 'Black', 'White')

    # Draw the obstacle
    canvas.draw_polygon([
        [obstacle_pos[0], obstacle_pos[1]],
        [obstacle_pos[0] + obstacle_width, obstacle_pos[1]],
        [obstacle_pos[0] + obstacle_width, obstacle_pos[1] + obstacle_height],
        [obstacle_pos[0], obstacle_pos[1] + obstacle_height]
    ], 1, 'Black', 'Red')

    # Draw game over message
    if game_over:
        canvas.draw_text(f"Game Over! Press Restart to Play Again Score: {score}", (150, CANVAS_HEIGHT // 2), 24, 'Red')

def jump(key):
    global is_jumping, dino_velocity

    if not game_over and not is_jumping:
        is_jumping = True
        dino_velocity = -15  # Adjust the jump height

def restart():
    global dino_pos, dino_velocity, is_jumping, obstacle_pos, obstacle_speed, score, game_over, next_obstacle_time
    dino_pos = [100, CANVAS_HEIGHT - GROUND_HEIGHT - DINO_HEIGHT]
    dino_velocity = 0
    gravity = 1
    is_jumping = False
    obstacle_pos = [CANVAS_WIDTH, CANVAS_HEIGHT - GROUND_HEIGHT - obstacle_height]
    obstacle_speed = 5
    score = 0
    game_over = False
    next_obstacle_time = 0

# Create the frame
frame = Simplegui.create_frame("Dino Game", CANVAS_WIDTH, CANVAS_HEIGHT)
frame.set_draw_handler(draw)
frame.set_keydown_handler(jump)  # Use keydown_handler directly for jump

# Restart button
frame.add_button("Restart", restart, 100)

# Start the game
frame.start()
