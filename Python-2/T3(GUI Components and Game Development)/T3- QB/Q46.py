# QB-46 Write a Python program for a "Guess the Number" game. In this game, the computer will generate a random number
# within a specified range, and the player has to guess the number. The computer will provide hints (too high or too low)
# after each incorrect guess to guide the player towards the correct number. Below are the tasks you need to accomplish
# for this program:
# Define a function generate_random_number(min_value, max_value) that generates a random number between the
# specified min_value and max_value, inclusive.
# Implement a function get_player_guess() that prompts the player to enter their guess for the number and returns the
# user's input as an integer.
# Create a function main() that acts as the main entry point of the program. In this function:
# Ask the user to enter the desired range (minimum and maximum values) for the random number.
# Generate a random number using the generate_random_number() function within the given range.
# Prompt the player to guess the number using the get_player_guess() function and provide hints (too high or too low)
# after each incorrect guess.
# Continue prompting the player for guesses until they correctly guess the number.
# Display a congratulatory message along with the number of attempts it took the player to guess the correct number
import random

def generate_random_number(min_value, max_value):
    return random.randint(min_value, max_value)

def get_player_guess():
    while True:
        guess = int(input("Enter your guess: "))
        return guess

print("Welcome to the Guess the Number game!")

min_value = int(input("Enter the minimum value for the range: "))
max_value = int(input("Enter the maximum value for the range: "))

target_number = generate_random_number(min_value, max_value)
print(f"A random number between {min_value} and {max_value} has been generated.")

attempts = 0
while True:
    attempts += 1
    player_guess = get_player_guess()
    
    if player_guess < target_number:
        print("Too low! Try a higher number.")
    elif player_guess > target_number:
        print("Too high! Try a lower number.")
    else:
        print(f"Congratulations! You guessed the number {target_number} in {attempts} attempts.")
        break