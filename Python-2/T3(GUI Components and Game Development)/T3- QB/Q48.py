# Stone, Paper, Scissors Game with Rounds
import random
class Game:
    def __init__(self):
        self.rounds=0
        self.userScore=0
        self.compScore=0
        self.compInp=''
        self.userInp=''
    def game(self,rounds=3):
        self.rounds=rounds
        self.userScore=0
        self.compScore=0
        choices=['stone','paper','scissor']
        self.currRound=1
        while self.rounds>0:
            print("Round",self.currRound)
            self.compInp=random.choice(choices)
            self.userInp=input("Enter your choice from stone, paper or scissor:- ")
            self.calculate()
            self.currRound+=1
        if(self.userScore>self.compScore):
            print("User Wins with score of",self.userScore,"Points")
        elif(self.userScore<self.compScore):
            print("Computer Wins with score of",self.compScore,"Points")
        else:
            self.game(1)
    def calculate(self):
            if(self.userInp==self.compInp):
                self.rounds-=1
                print("Computer selected",self.compInp)
                print("Draw")
            elif(self.userInp=='stone' and self.compInp=='paper'):
                self.compScore+=1
                self.rounds-=1
                print("Computer selected paper")
                print("Computer Wins")
            elif(self.userInp=='stone' and self.compInp=='scissor'):
                self.userScore+=1
                self.rounds-=1
                print("Computer selected scissor")
                print("User Wins")
            elif(self.userInp=='paper' and self.compInp=='stone'):
                self.userScore+=1
                self.rounds-=1
                print("Computer selected stone")
                print("User Wins")
            elif(self.userInp=='paper' and self.compInp=='scissor'):
                self.compScore+=1
                self.rounds-=1
                print("Computer selected scissor")
                print("Computer Wins")
            elif(self.userInp=='scissor' and self.compInp=='stone'):
                self.compScore+=1
                self.rounds-=1
                print("Computer selected stone")
                print("Computer Wins")
            elif(self.userInp=='scissor' and self.compInp=='paper'):
                self.userScore+=1
                self.rounds-=1
                print("Computer selected paper")
                print("User Wins")
            else:
                print("Invalid Input")
my_game = Game()
# my_game.game(4) for 4 Rounds Game
# diff=user_comp%5
my_game.game()
