import random

deck = []
pHand = []

def createDeck():
    global deck
    #School is dumb
    #types = ["Hearts", "Clubs", "Diamonds", "Spaids"]
    for i in range(4):
        for k in range(13):
            deck.append(k)

def dealHand():
    global deck
    random.shuffle(deck)
    for i in range(3):
        pHand.append(deck[i])
    for i in range(3):
        deck.pop(0)


def checkWinner():
    global pHand
    matches = 0
    pHand.sort()
    print(pHand)
    for i in range(2):
        if pHand[i] == pHand[i+1]:
            matches+=1
    if matches == 2:
        print("3 of a kind")
    elif matches == 1:
        print("Pair.")
    else:
        print("Nope")
createDeck()
dealHand()
checkWinner()