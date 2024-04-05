from random import shuffle
deck = []

def newDeck():
    for i in range(4):
        for j in range(13):
            num = 0
            if j+1 >= 10:
                num = 10
            else:
                num = j+1
            deck.append(num)
    shuffle(deck)


cardArr = []
while True:
    try:
        print("How many cards would you like to take at the start?")
        inpt = input("> ")
        if int(inpt) <= 1:
            print("Number too small")
            int("crash")
        for i in range(int(inpt)):
            print("What should card "+ str(i+1) +"'s value be?")
            cInpt = input("> ")
            if(int(cInpt) >= 1 and int(cInpt) <= 13):
                cardArr.append(int(cInpt))
            else:
                print("Out of range, 1-13 pls")
                int("OFR")
        break
    except ValueError:
        print("NAN\n\n")
x = 1000
nBust = 0
for _ in range(x):
    newDeck()
    total = 0
    for i in cardArr:
        total += i
    total += deck[0]
    if(total >= 21):
        print("Bust")
    else:
        nBust+=1
        print("Saved")

print("\n\n :" + str((nBust/x)*100))

# newNBust = nBust
# newBust = x - nBust
# divInt = 1
# while divInt <= nBust:
#     if nBust % divInt == 0 and (x - nBust) % divInt == 0:
#         newNBust = nBust / divInt
#         newBust = (x-nBust) / divInt
#         divInt = 1
#     else:
#         divInt+=1
# print("Frac " + str(newNBust) + "/" + str(newBust))