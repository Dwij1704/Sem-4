import random
n=['rock','paper','scissors']
cguess=random.choice(n)
pguess=input("Enter your guess: ")
if cguess==pguess:
    print("Draw")
elif ((cguess=='rock') and (pguess=='scissors')) or ((cguess=='paper') and (pguess=='rock')) or ((cguess=='scissors') and (pguess=='paper')):
    print("Computer wins")
else:
    print("Player wins")