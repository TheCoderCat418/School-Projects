import random

selectedMode = ""
selectedDifficulty = "E"
continuousMode = -1
qAnswered = 0
qCorrect = 0
p2Mode: bool = False
a = False
while not a:
    diff = input("Do you want to play with a friend? (Y/n)")
    match diff.upper():
        case "Y":
            a = True
            p2Mode = True
            continuousMode = 1
        case "N":
            a = True
            p2Mode = False
        case _:
            print("Sorry we didn't get that. Please try again. \n\n")
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
        print("--- WHEN YOU ARE DONE, TYPE 'DONE' IN ANY QUESTION PROMPT ---")
    questions = []

    # Question factory
    for x in range(amtOfQuestions):
        multiplier = 1
        if selectedDifficulty == "H" or qCorrect > 20:
            multiplier = 5
        elif selectedDifficulty == "M":
            multiplier = 2
        match random.randint(0, 2):
            case 0:
                num1, num2 = random.randint(0, 10 * multiplier), random.randint(0, 10 * multiplier)
                questions.append({"q": "What is " + str(num1) + " + " + str(num2) + " ? ", "a": num1 + num2, "s": False,
                                  "o": selectedMode})
            case 1:
                num1, num2 = random.randint(0, 10 * multiplier), random.randint(0, 10 * multiplier)
                questions.append({"q": "What is " + str(num1) + " - " + str(num2) + " ? ", "a": num1 - num2, "s": False,
                                  "o": selectedMode})
            case 2:
                num1, num2 = (random.randint(0, 10 * round(multiplier - 0.3 * multiplier)),
                              random.randint(0, 10 * round(multiplier - 0.3 * multiplier)))
                questions.append({"q": "What is " + str(num1) + " * " + str(num2) + " ? ", "a": num1 * num2, "s": False,
                                  "o": selectedMode})

    # Question displayer
    is2Player = False
    qAnswered1 = 0
    qAnswered2 = 0
    qCorrect1 = 0
    qCorrect2 = 0
    for i in range(len(questions)):
        attempt = 3
        if continuousMode == -2:
            break
        while True:
            try:
                if not p2Mode:
                    # Normal mode
                    if attempt == 0:
                        print("Looks like you don't know this one. Lets move on. \n")
                        qAnswered += 1
                        break
                    anw = input(questions[i]["q"])
                    if anw.upper() == "DONE" and continuousMode == 1:
                        continuousMode = -2
                        break
                    elif int(anw) == questions[i]["a"]:
                        questions[i]["s"] = True
                        qAnswered += 1
                        break
                    else:
                        print("Not correct. Try again!")
                        attempt -= 1
                else:
                    # 2 players
                    if is2Player:
                        print("Go player 2!")
                    else:
                        print("You're up player 1")
                    if attempt == 0:
                        print("Looks like you don't know this one. Lets move on. \n")
                        if is2Player:
                            qAnswered2 += 1
                        else:
                            qAnswered1 += 1
                        break
                    anw = input(questions[i]["q"])
                    if anw.upper() == "DONE":
                        continuousMode = -2
                        break
                    elif int(anw) == questions[i]["a"]:
                        questions[i]["s"] = True
                        if is2Player:
                            qAnswered2 += 1
                            qCorrect2 += 1
                        else:
                            qAnswered1 += 1
                            qCorrect1 += 1
                        break
                    else:
                        print("Not correct. Try again!")
                        attempt -= 1

            except ValueError:
                print("Invalid Number. Try again.\n")
        is2Player = not is2Player

    # Prints the score to the user
    if p2Mode:
        print(qCorrect1, qAnswered1, qCorrect2, qAnswered2)
        print("Player 1 score: " + str(qCorrect1 / qAnswered1 * 100) + "%")
        print("Player 2 score: " + str(qCorrect2 / qAnswered2 * 100) + "%")
        if qCorrect1 / qAnswered1 * 100 == qCorrect2 / qAnswered2 * 100:
            print("Tie!")
        elif qCorrect1 / qAnswered1 * 100 > qCorrect2 / qAnswered2 * 100:
            print("Player 1 wins!")
        else:
            print("Player 2 wins!")
        break
    correct = 0
    for i in range(qAnswered):
        if questions[i]["s"]:
            correct += 1
    print("DONE! \n" + str(correct / qAnswered * 100) + "%")

    # Instant close after score is told. Used for continuousMode only.
    if continuousMode == -2 or continuousMode == 1:
        break

    # Leveling up, making it hard after 5 questions
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
