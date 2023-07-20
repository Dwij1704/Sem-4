# Number Guessing Game
import random
def guess(x,y):
    randomNumber=random.randrange(x,y)
    trial=0
    # Maximum 7 attempts
    for i in range(7):
        trial+=1
        userGuess=int(input("Enter Your Guess between "+str(x)+" and "+str(y)+": "))
        if userGuess==randomNumber:
            print("Congratulations you guessed it right in",trial,"attempts")
            return()
            break
        elif userGuess>randomNumber:
            print("Too High, guess a lower number")
        else:
            print("Too Low, guess a higher number")
    print("You Loose the number was",randomNumber)
guess(int(input("Enter Starting point: ")),int(input("Enter Ending Point: ")))