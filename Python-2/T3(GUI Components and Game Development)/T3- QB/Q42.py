# Implement a guessing game program by generating a random integer between 1 and 99. Accept guesses from
#  the user until he or she guesses the number or exceeds the allowed
#  number of guesses. It should be possible to guess the number in
#  no more than 7 guesses.
#  The program should behave as follows:
#  1 If the user guesses the number, congratulate him or her and
#  stop play.
#  2 If an illegal guess is entered, say so, but count it as one guess.
#  3 If the user exceeds 7 guesses, say so and stop play.
#  4 If the guess is too low/high, say so and allow another guess.
# Number Guessing Game
import random
def guess(x,y):
    randomNumber=random.randrange(x,y)
    trial=0
    for i in range(7):
        trial+=1
        userGuess=int(input("Enter Your Guess between "+str(x)+" and "+str(y)+": "))
        if userGuess<1 or userGuess>99:
            print("Illegal Guess")
        elif userGuess==randomNumber:
            print("Congratulations you guessed it right in",trial,"attempts")
            return()
            break
        elif userGuess>randomNumber:
            print("Too High, guess a lower number")
        else:
            print("Too Low, guess a higher number")
    print("You Loose the number was",randomNumber)
guess(1,99)