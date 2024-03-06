from random import shuffle

def findTotal(dea):
    tot = 0
    for i in dea:
        tot += i
    return tot



busted = 0
times = 1000
## PART 1
for z in range(times):
    deck = []
    dealer = []
    for i in range(4):
        for j in range(13):
            if(j+1 >= 10):
                deck.append(10)
            else:
                deck.append(j+1)
    shuffle(deck)

    while findTotal(dealer) <= 17:
        dealer.append(deck[0])
        deck.pop(0)
    if findTotal(dealer) >21:
        busted+=1
print("E: " + str((busted/times)*100))

## PART 2
playerwin = 0
times2 = 1000
for z in range(times):
    deck = []
    dealer = []
    hand = []
    handBust = False
    dealBust = False
    for i in range(4):
        for j in range(13):
            if(j+1 >= 10):
                deck.append(10)
            else:
                deck.append(j+1)
    shuffle(deck)

    while findTotal(dealer) <= 17:
        dealer.append(deck[0])
        deck.pop(0)
    if findTotal(dealer) >21:
        dealBust = True

    for i in range(3):
        hand.append(deck[0])
        deck.pop(0)
    if findTotal(hand) >21:
        handBust = True

    if not handBust and dealBust:
        playerwin+=1
    elif findTotal(dealer) < findTotal(hand) and not handBust:
        playerwin+=1

print("E2 " + str((playerwin/times2)*100))
