import SimpleGUICS2Pygame.simpleguics2pygame as Simplegui
import random
frame=Simplegui.create_frame('Task-10',500,500)
mode1=[1,100,7]
mode2=[1,1000,12]
text1="Chance left:"
text2="Enter your choice"
compGuess=0
mode=0
userGuess=0
def inputHandler(inp):
    global userGuess,mode,mode2,mode1,text1,text2,compGuess
    userGuess=int(inp)
    if mode==0 and mode1[2]>0:
        compGuess=random.randrange(mode1[0],mode1[1])
        mode1[2]-=1
        if userGuess==compGuess:
            text2="You Won"
            return()
        elif userGuess>compGuess:
            text1="Chance Left: "+str(mode1[2])
            text2="Too High"
        else:
            text1="Chance Left: "+str(mode1[2])
            text2="Too Low"
    elif mode==1 and mode2[2]>0:
        compGuess=random.randrange(mode2[0],mode2[1])
        mode2[2]-=1
        if userGuess==compGuess:
            text2="You Won"
            return()
        elif userGuess>compGuess:
            text1="Chance Left: "+str(mode2[2])
            text2="Too High"
        else:
            text1="Chance Left: "+str(mode2[2])
            text2="Too Low"
    else:
        text2="You Loose"
def draw(canvas):
    global userGuess,mode,mode1,text1,text2
    canvas.draw_text(text1,[100,100],20,'red','sans-serif') # text, point, font_size, font_color, font_family
    canvas.draw_text(text2,[100,200],20,'blue','sans-serif') # text, point, font_size, font_color, font_family
    
def setMode1():
    global mode,text1,compGuess
    text1="Chance Left: "+str(mode1[2])
    compGuess=random.randrange(mode1[0],mode1[1])
    mode=0
    
def setMode2():
    global mode,text1,compGuess
    text1="Chance Left: "+str(mode2[2])
    compGuess=random.randrange(mode2[0],mode2[1])
    mode=1
frame.add_input('Enter Your Guess: ',inputHandler,100)
frame.set_draw_handler(draw)
frame.add_button("Range 1-100",setMode1)
frame.add_button("Range 1-100",setMode2)
frame.start()