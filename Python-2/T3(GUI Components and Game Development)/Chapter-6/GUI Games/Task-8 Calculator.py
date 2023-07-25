import SimpleGUICS2Pygame.simpleguics2pygame as Simplegui
def inputHandlern1(text):
    global n1
    n1=int(text)
def inputHandlern2(text):
    global n2
    n2=int(text)
def add():
    global n1,n2,ans
    ans=n1+n2
def sub():
    global n1,n2,ans
    ans=n1-n2
def mul():
    global n1,n2,ans
    ans=n1*n2
def div():
    global n1,n2,ans
    ans=n1/n2
def draw(canvas):
    canvas.draw_text(str(ans),[250,250],36,'white')
frame=Simplegui.create_frame("Task-8",500,500)
ans=0
n1=0
n2=0
frame.add_input('Enter n1',inputHandlern1,100)
frame.add_input('Enter n2',inputHandlern2,100)
frame.add_button('add',add)
frame.add_button('sub',sub)
frame.add_button('mul',mul)
frame.add_button('div',div)
frame.set_draw_handler(draw)
frame.start()