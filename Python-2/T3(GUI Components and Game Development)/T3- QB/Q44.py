# QB-44 Write a python program to demonstrate number memory game. In this game, you will be presented with a sequence of
# random numbers to memorize. After that, you will have to recall and input the numbers correctly.
# Instructions:
# The program will generate a sequence of 5 random numbers between 1 and 100.
# You will be shown the sequence of numbers for a short time to memorize them.
# When you are ready, press Enter to start recalling the numbers.
# You will be asked to input each number in the sequence one by one.
# Type the number and press Enter after each input.
# If you recall all 5 numbers correctly, display the output as "you win the game". Otherwise, "you make a mistake." and
# stop the game.
import random
import time
def generate_numbers():
    numbers = []
    for i in range(5):
        numbers.append(random.randint(1, 100))
    return numbers
def play_game():
    numbers = generate_numbers()
    print(f"Memorize these numbers: {numbers}")
    time.sleep(5)
    print("\n"*30)
    input("Press Enter when you are ready to recall the numbers.")
    for i in range(5):
        guess = int(input(f"Enter number {i+1}: "))
        if guess != numbers[i]:
            print("You made a mistake.")
            return
    print("You win the game!")
play_game()
