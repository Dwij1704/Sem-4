# 9-Marks
import SimpleGUICS2Pygame.simpleguics2pygame as simple

WIDTH = 300
HEIGHT = 300
LINE_WIDTH = 5
board = [[None, None, None], [None, None, None], [None, None, None]]
player = "X"
winner = None
draw = False


def DrawBoard(canvas):
    canvas.draw_line((WIDTH / 3, 0), (WIDTH / 3, HEIGHT), LINE_WIDTH, "White")
    canvas.draw_line((WIDTH / 3 * 2, 0), (WIDTH / 3 * 2, HEIGHT), LINE_WIDTH, "White")
    canvas.draw_line((0, HEIGHT / 3), (WIDTH, HEIGHT / 3), LINE_WIDTH, "White")
    canvas.draw_line((0, HEIGHT / 3 * 2), (WIDTH, HEIGHT / 3 * 2), LINE_WIDTH, "White")

    for row in range(3):
        for col in range(3):
            if board[row][col] is not None:
                canvas.draw_text(board[row][col], (WIDTH / 3 * col + 35, HEIGHT / 3 * row + 60), 50, "White")
            
    if winner is not None:
        canvas.draw_text(winner + " wins!", (WIDTH / 2 - 50, HEIGHT / 2), 50, "Red")
    elif draw:
        canvas.draw_text("Draw!", (WIDTH / 2 - 50, HEIGHT / 2), 50, "Red")
        

def Click(pos):
    global board, player, winner, draw
    row = int(pos[1] // (HEIGHT / 3))
    col = int(pos[0] // (WIDTH / 3))
    if board[row][col] is None:
        board[row][col] = player
        if player == "X":
            player = "O"
        else:
            player = "X"
    winner = CheckWinner()
    if winner is None:
        draw = CheckDraw()
        

def CheckWinner():
    global board
    winner = None
    for row in range(3):
        if board[row][0] == board[row][1] == board[row][2] is not None:
            winner = board[row][0]
    for col in range(3):
        if board[0][col] == board[1][col] == board[2][col] is not None:
            winner = board[0][col]
    if board[0][0] == board[1][1] == board[2][2] is not None:
        winner = board[0][0]
    if board[0][2] == board[1][1] == board[2][0] is not None:
        winner = board[0][2]
    return winner


def CheckDraw():
    global board
    draw = True
    for row in range(3):
        for col in range(3):
            if board[row][col] is None:
                draw = False
    return draw


def Restart():
    global board, player, winner, draw
    board = [[None, None, None], [None, None, None], [None, None, None]]
    player = "X"
    winner = None
    draw = False
    
    
frame = simple.create_frame("Tic Tac Toe", WIDTH, HEIGHT)
frame.set_draw_handler(DrawBoard)
frame.set_mouseclick_handler(Click)
frame.add_button("Restart", Restart, 100)
frame.start()