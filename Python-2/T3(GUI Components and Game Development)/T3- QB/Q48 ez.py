# QB-48 Write a python program to create rock paper scissor game using random module. 
import random
def number_to_name(number):
    if number==0:
        return 'rock'
    elif number==1:
        return 'paper'
    elif number==2:
        return 'scissor'
def name_to_number(user_input):
    if user_input=='rock':
        return 0
    elif user_input=='paper':
        return 1
    elif user_input=='scissor':
        return 2
def rps(player_choice):
    global score
    print()
    print('Player chooses',player_choice)
    player_number=name_to_number(player_choice)
    computer_number=random.randrange(0,3)
    computer_choice=number_to_name(computer_number)
    print('computer chooses',computer_choice)
    difference=((player_number-computer_number)%3)
    if difference==1:
        print("Player wins!")
        score+=1
    elif difference==2:
        print("Computer wins!")
    else:
        print("tie")
n=int(input('How many times do you want to play?'))
score=0
for i in range(n):
    player_choice=input("enter your choice: ")
    rps(player_choice)
    print("Your score is ",score)