# QB-47 Write a program to shuffle a given deck of cards randomly. 
import random
def shuffleDeck():
    suits=["Hearts","Diamond","Clubs","Spades"]
    ranks=["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"]
    # deck=[(rank,suit) for suit in suits for rank in ranks]
    deck=[]
    for i in suits:
        for j in ranks:
            deck.append(str(j)+" of "+str(i))
    random.shuffle(deck)
    return deck
shuffledDeck=shuffleDeck()
for i in shuffledDeck:
    print(i)