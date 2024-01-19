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

# Assemble Questions
amtOfQuestions = 5
questions = []

for x in range(amtOfQuestions):
    if selectedMode == "ADD":
        muti = 1
        if selectedDifficulty == "H":
            muti = 10
        num1, num2 = random.randint(0, 10*muti), random.randint(0, 10*muti)

        questions.append({"q": "What is " + str(num1) + " + " + str(num2) + " ?", "a": num1 + num2, "s": False,
                          "o": "ADD"})

for i in range(len(questions)):
    while True:
        try:
            anw = int(input(questions[i]["q"]))
            if anw == questions[i]["a"]:
                questions[i]["s"] = True
            break
        except ValueError:
            print("Invalid Number. Try again.\n")
correct = 0
for i in range(len(questions)):
    if questions[i]["s"]:
        correct += 1
    if i == len(questions) - 1:
        print("\n\n" + str(correct / amtOfQuestions * 100) + "%")
