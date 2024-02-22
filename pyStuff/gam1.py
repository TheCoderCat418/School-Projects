from random import shuffle
from statistics import mean
deck = []
yourHand = []
done = False
for i in range(4):
    for j in range(12):
        deck.append(j+1)
shuffle(deck)

def takeCard():
    zeCard = deck[0]
    yourHand.append(deck[0])
    deck.pop(0)
    if zeCard >= 10:
         return 10
    else:
         return zeCard
def calcTotal():
    tot = 0
    for i in yourHand:
        if i >= 10:
            tot += 10
        else:
            tot += i
    return tot


def checkPlay():
    if calcTotal() > 21:
        return False
    else:
        return True

while checkPlay() and not done:
    print("Take a card? Your current total is " + str(calcTotal()) + ". (Y/N)")
    cCard = 0
    while True:
        inpu = input("> ")
        match inpu.upper():
            case "Y":
                cCard = takeCard()
                break
            case "N":
                done = True
                break
            case _:
                print("Unknown input, please try again.")
    print("Your card had a value of " + str(cCard) + ".")

print("You have a total of " + str(len(yourHand)) + " cards, for a total value of " + str(calcTotal()))

amt = []


for z in range(1000):
    deck = []
    yourHand = []
    for i in range(4):
        for j in range(12):
            deck.append(j+1)
    shuffle(deck)

    zz = True
    while zz:
        takeCard()
        if not checkPlay():
            zz = False
    amt.append(len(yourHand)-1)

print("\n" + str(mean(amt)))