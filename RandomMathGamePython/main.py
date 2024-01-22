import math
import random
import time

# Mode
selectedMode = ""
# while selectedMode == "":
#     mode = input("Please select mode of operation.\n \nAvailable operations: Addition (add), Subtraction (sub), "
#                  "Multiplication (mutli)\n>")
#     match mode.upper():
#         case "ADDITION":
#             selectedMode = "ADD"
#         case "SUBTRACTION":
#             selectedMode = "SUB"
#         case "Multiplication":
#             selectedMode = "MULTI"
#         case "ADD":
#             selectedMode = "ADD"
#         case "SUB":
#             selectedMode = "SUB"
#         case "MULTI":
#             selectedMode = "MULTI"
#         case _:
#             selectedMode = ""
#             print("We were unable to determine the operation you wanted. Please try again. \n")

# Difficulty
selectedDifficulty = "E"
# while selectedDifficulty == "":
#     diff = input("Please select difficulty.\n \nAvailable difficulty: Easy, Hard\n>")
#     match diff.upper():
#         case "EASY":
#             selectedDifficulty = "E"
#         case "HARD":
#             selectedDifficulty = "H"
#         case _:
#             print("We were unable to determine the difficulty you wanted. Please try again. \n\n")
continuousMode = -1
while continuousMode == -1:
    diff = input("Would you like continuousMode to be enabled? This will go on until you are done. (Y/n)")
    match diff.upper():
        case "Y":
            continuousMode = 1
        case "N":
            continuousMode = 0
        case _:
            print("Sorry we didn't get that. Please try again. \n\n")

# Assemble Questions
while True:
    amtOfQuestions = 5
    if continuousMode == 1:
        amtOfQuestions = 1000
        selectedDifficulty == "M"
    questions = []

    for x in range(amtOfQuestions):
        multiplier = 1
        if selectedDifficulty == "H":
            multiplier = 5
        elif selectedDifficulty == "M":
            multiplier = 2
        match random.randint(0, 2):
            case 0:
                selectedMode = "ADD"
            case 1:
                selectedMode = "SUB"
            case 2:
                selectedMode = "MULTI"
        if selectedMode == "ADD":
            num1, num2 = random.randint(0, 10 * multiplier), random.randint(0, 10 * multiplier)
            questions.append({"q": "What is " + str(num1) + " + " + str(num2) + " ? ", "a": num1 + num2, "s": False,
                              "o": selectedMode})
        elif selectedMode == "SUB":
            num1, num2 = random.randint(0, 10 * multiplier), random.randint(0, 10 * multiplier)
            questions.append({"q": "What is " + str(num1) + " - " + str(num2) + " ? ", "a": num1 + num2, "s": False,
                              "o": selectedMode})
        elif selectedMode == "MULTI":
            num1, num2 = (random.randint(0, 10 * math.floor(multiplier - 0.3 * multiplier)),
                          random.randint(0, 10 * math.floor(multiplier - 0.3 * multiplier)))
            questions.append({"q": "What is " + str(num1) + " * " + str(num2) + " ? ", "a": num1 + num2, "s": False,
                              "o": selectedMode})

    print("--- WHEN YOU ARE DONE, TYPE 'DONE' IN ANY QUESTION PROMPT ---")
    for i in range(len(questions)):
        attempt = 3
        if continuousMode == -2:
            break
        while True:
            try:
                if attempt == 0:
                    print("Looks like you don't know this one. Lets move on. \n")
                    break
                anw = input(questions[i]["q"])
                if anw.upper() == "DONE":
                    continuousMode = -2
                    break
                elif int(anw) == questions[i]["a"]:
                    questions[i]["s"] = True
                    break
                else:
                    print("Not correct. Try again!")
                    attempt -= 1
            except ValueError:
                print("Invalid Number. Try again.\n")

    correct = 0
    for i in range(len(questions)):
        if questions[i]["s"]:
            correct += 1
        if i == len(questions) - 1:
            print("DONE! \n" + str(correct / amtOfQuestions * 100) + "%")

    if continuousMode == -2 or continuousMode == 1:
        break

    if correct / amtOfQuestions * 100 >= 80.0 and selectedDifficulty == "E":
        selectedDifficulty = "M"
        print("Moving on to medium mode!")
        continue
    elif correct / amtOfQuestions * 100 < 80.0 and selectedDifficulty == "E":
        print("Let's try this unit again.")
        continue
    if correct / amtOfQuestions * 100 == 100.0 and selectedDifficulty == "M":
        selectedDifficulty = "H"
        print("Moving on to hard mode!")
        continue
    elif correct / amtOfQuestions * 100 != 100.0 and selectedDifficulty == "M":
        print("Try again!")
        continue
    if selectedDifficulty == "H":
        print("ALL DONE! Nice work getting this far! See you soon!")
        break
