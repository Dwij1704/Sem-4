# Make Lizard, Spoke, Stone, Paper, Scissors game, assign 0 to rock, 1 to spock, 2 to paper, 3 to lizard, 4 to scissors with difference logic as below:
# if difference is 1 or 2 then user wins, if difference is 3 or 4 then computer wins, if difference is 0 then draw
import random
def name_to_number(name):
    if name=="rock":
        return 0
    elif name=="spock":
        return 1
    elif name=="paper":
        return 2
    elif name=="lizard":
        return 3
    elif name=="scissors":
        return 4
    else:
        return "Invalid Name"
def number_to_name(number):
    if number==0:
        return "rock"
    elif number==1:
        return "spock"
    elif number==2:
        return "paper"
    elif number==3:
        return "lizard"
    elif number==4:
        return "scissors"
    else:
        return "Invalid Number"
def rpsls(rounds):
    rounds=rounds
    player_score=0
    comp_score=0
    for i in range(rounds):
        print("Round",i+1)
        player_choice=input("Enter your choice from rock, spock, paper, lizard or scissors:- ")
        print("Player chooses :-",player_choice)
        player_number=name_to_number(player_choice)
        comp_number=random.randrange(5)
        comp_choice=number_to_name(comp_number)
        print("Computer chooses :-",comp_choice)
        difference=(player_number-comp_number)%5
        if difference==1 or difference==2:
            player_score+=1
            print("Player wins!")
        elif difference==3 or difference==4:
            comp_score+=1
            print("Computer wins!")
        else:
            print("Player and computer tie!")
        print()
    if player_score>comp_score:
        print("Player wins with score of",player_score,"points")
    elif player_score<comp_score:
        print("Computer wins with score of",comp_score,"points")
    else:
        print("Player and computer tie!")
        rpsls(1)
rpsls(3)