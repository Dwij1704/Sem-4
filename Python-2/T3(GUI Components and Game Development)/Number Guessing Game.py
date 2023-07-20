# Number Guessing Game
import random
def guess(x,y):
    randomNumber=random.randrange(x,y)
    trial=0
    while True:
        trial+=1
        userGuess=int(input("Enter Your Guess between "+str(x)+" and "+str(y)+": "))
        if userGuess==randomNumber:
            print("Congratulations you guessed it right in",trial,"attempts")
            break
        elif userGuess>randomNumber:
            print("Too High, guess a lower number")
        else:
            print("Too Low, guess a higher number")
guess(int(input("Enter Starting point: ")),int(input("Enter Ending Point: ")))