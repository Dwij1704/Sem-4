# Write a python program to generate a Word Srambler game. In this game, you will be presented with a scrambled
# word, and your task is to unscramble it to find the original word. You will have 3 attempts to guess the word correctly.
# Instructions:
# The program will choose a random word from a predefined list and scramble its letters.
# You will see the scrambled word and have to guess the correct word.
# You have 3 attempts to guess the word correctly.
# Type your answer (the unscrambled word) and press Enter to submit your guess.
# If your guess is correct, you win the game and will be congratulated with the original word.
# If your guess is incorrect, you will be informed and the remaining attempts will be shown.
# The game will continue until you either guess correctly or run out of attempts.
import random
def wordScrambler():
    wordList=["python","java","c++","ruby","html","css","javascript","php","swift","kotlin"]
    randomWord=random.choice(wordList)
    randomList=list(randomWord)
    random.shuffle(randomList)
    scrambledWord="".join(randomList)
    print("Scrambled Word:",scrambledWord)
    for i in range(3):
        userGuess=input("Enter Your Guess: ")
        if userGuess==randomWord:
            print("Congratulations you guessed it right")
            return()
        else:
            print("Incorrect Guess")
            print("Attempts Left:",2-i)
    print("You Loose the word was",randomWord)
wordScrambler()