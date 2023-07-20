# Mystical Octosphere Game A program that can predict your future based on your lucky number
import random
def mystical_octosphere():
    print("Mystical Octosphere knows all, sees all!")
    print("Enter your question for the Mystical Octosphere.")
    input("What is your question? ")
    print("You shake the mystical octosphere.")
    print("The cloudy liquid swirls, and a reply comes into view...")
    
    # Choice Method
    answers=["Looks like a yes","Certainly yes","I think so...","Probably","Not sure, check back later","Ask again tomorrow","Don't count on it","Very doubtful"]
    print(random.choice(answers))
    
    # Range Method with if-elif-else:-
    
    # answer_number=random.randrange(0,8)
    # if answer_number==0:
    #     print("Looks like a yes")
    # elif answer_number==1:
    #     print("Certainly yes")
    # elif answer_number==2:
    #     print("I think so...")
    # elif answer_number==3:
    #     print("Probably")
    # elif answer_number==4:
    #     print("Not sure, check back later")
    # elif answer_number==5:
    #     print("Ask again tomorrow")
    # elif answer_number==6:
    #     print("Don't count on it")
    # elif answer_number==7:
    #     print("Very doubtful")
    # else:
    #     print("Error")
mystical_octosphere()
while True: 
    user_choice=input("Do you want to ask another question? (y/n) ")
    if user_choice=='y':
        mystical_octosphere()
    elif user_choice=='n':
        break
    else:
        print("Invalid Input")
        continue
