import random
import time

# Mode
selectedMode = ""
while selectedMode == "":
    mode = input("Please select mode of operation.\n \nAvailable operations: Addition, Subtraction\n>")
    match mode.upper():
        case "ADDITION":
            selectedMode = "ADD"
        case "SUBTRACTION":
            selectedMode = "SUB"
        case _:
            selectedMode = ""
            print("We were unable to determine the operation you wanted. Please try again. \n\n")

# Difficulty
selectedDifficulty = ""
while selectedDifficulty == "":
    diff = input("Please select difficulty.\n \nAvailable difficulty: Easy, Hard\n>")
    match diff.upper():
        case "EASY":
            selectedDifficulty = "E"
        case "HARD":
            selectedDifficulty = "H"
        case _:
            print("We were unable to determine the difficulty you wanted. Please try again. \n\n")

maxQuestions = 5
currentQuestion = 0

successArray = []
for i in range(maxQuestions):
    successArray[i] = 0

while currentQuestion <= maxQuestions:
    r