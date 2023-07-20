import random
# random.seed(10) # Seeds value for same random number every time
vars=[1,2,3,4,5,6,7,8,9,10]
print("Random Choice for vars :-",random.choice(vars)) # Random Choice from list vars
random.shuffle(vars) # Shuffle list vars
print("Shuffle for vars:-",vars) # Display  Shuffle list vars
alpha=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o']
print("Random Choice for Alpha:-",random.choice(alpha)) # Random Choice from list alpha
random.shuffle(alpha) # Shuffle list alpha
print("Shuffle for Alpha :-",alpha) # Display Shuffle list alpha
print("0.0 to 1.0 :-",random.random()) # 0.0 to 1.0
print("3 to 9 :-",random.randint(3,9)) # 3 is start, 9 is stop
print("0 to 9 :-",random.randrange(10)) # 0 to 9
print("3 to 9 :-",random.randrange(3,9)) # 3 is start, 9 is stop
print("3 to 9 (2 Step) :-",random.randrange(3,9,1)) # 3 is start, 9 is stop, 1 is step
