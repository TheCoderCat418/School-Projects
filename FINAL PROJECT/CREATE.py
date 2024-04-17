import os
from random import randint
import signal
os.system("str")
userSelected = []
selectedNumbers = []
selectedNumbersLeft = 5
selectionsLeft = 30

def printArr(arr):
    URArray = ""
    for i in arr:
        URArray += str(i) + ", "
    t = ""
    for i in range(len(URArray)):
        if i < len(URArray)-2:
            t+=URArray[i]
    return t
def wasNumberChosen(num):
    for i in selectedNumbers:
        if(num == i):
            return True
    return False
def wasNumberAlreadyPicked(num):
    for i in userSelected:
        if i == num:
            return True
    return False
            

print("Hey there. Wanna play a game? (Y/N)")
while(True):
    inp = input("> ")
    if inp.upper() == "N":
        print("Well, goodbye!")
        os.kill(os.getpid(), signal.SIGINT)
    elif inp.upper() == "Y":
        print(f"I will guess 5 numbers 1-100, lets see how many you can find within {selectionsLeft} turns!")
        break
    else:
        print("That is not a vaild input.")

while len(selectedNumbers) < 5:
    genNum = randint(1, 100)
    if wasNumberChosen(genNum):
        continue
    else:
        selectedNumbers.append(genNum)

while selectionsLeft > 0:
    print(f"Please select your first number. You have already selected the following numbers: {printArr(userSelected)}. The are {selectedNumbersLeft} numbers still hiding. You still have {selectionsLeft} guesses left. Please select a number.")
    while(True):
        try:
            inp = input("> ")
            num = int(inp)
            if num < 1 or num > 100:
                print("Not in range")
                raise ValueError()
            if wasNumberAlreadyPicked(num):
                print("You already picked that one. Pick another!")
                continue
            if wasNumberChosen(num):
                print("You found one of the numbers!")
                selectedNumbersLeft-=1
            else:
                print("You did not find a number")
            selectionsLeft-=1
            userSelected.append(num)
            break
        except ValueError:
            print("That is not a vaild number. Try again.")
print(f"Out of guesses! The numbers were {printArr(selectedNumbers)}. You found {5-selectedNumbersLeft} of of the 5.")
print("Have a good day! Thanks for playing")