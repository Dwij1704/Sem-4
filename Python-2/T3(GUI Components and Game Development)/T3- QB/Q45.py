# QB-45 Write a program Python program that generates random passwords and checks their strength based on certain criteria.
# The program will use the random module to create passwords with varying lengths and character sets. Below are the
# tasks you need to accomplish for this program:
# Define a function generate_password(length) that takes the desired password length as input and returns a random
# password of the specified length. The password should include a mix of uppercase letters, lowercase letters, digits, and
# special characters (e.g., symbols).
# Implement a function check_strength(password) that takes a password as input and evaluates its strength based on the
# following criteria:
# The password length should be at least 8 characters.
# The password should contain at least one uppercase letter, one lowercase letter, one digit, and one special character.
# The password should not contain spaces or other whitespace characters.
# Create a function main() that acts as the main entry point of the program. In this function:
# Ask the user to enter the desired password length.
# Generate a random password using the generate_password() function with the given length.
# Display the generated password to the user.
# Check the strength of the generated password using the check_strength() function.
# Display the strength result to the user, indicating whether the password is strong or needs improvement.
import random
def generate_random_password(length):
    characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$"
    password = ''.join(random.choice(characters) for _ in range(length))
    return password
def check_password_strength(password):
    length = len(password)
    has_upper = any(char.isupper() for char in password)
    has_lower = any(char.islower() for char in password)
    has_digit = any(char.isdigit() for char in password)
    has_special = any(char in "!@#$%^&*()_-+=[]\{\}|:;,.<>?/" for char in password)
    strength = 0
    if length < 8:
        strength = "Weak"
    if has_upper and has_lower and has_digit and has_special:
        strength = "Strong"
    else:
        strength = "Needs Improvement"
    return strength
password_length = 10
password = generate_random_password(int(input("Enter Password Length: ")))
password_strength = check_password_strength(password)
print("Generated Password:", password)
print("Password Strength:", password_strength)