questions = ["What language is this? ", "What club helps kids code? "]
solutions = ["python", "compscikids"]
mode = input("Easy or hard questions? ")
if mode.lower() == "easy":
    for x in range(len(questions)):
        sol = input(questions[x])
        if sol.lower() == solutions[x]:
            print("nice!")
        else:
            print("Awww. Too bad.")
elif mode.lower() == "hard":
    for x in range(len(questions)):
        sol = input(questions[x])
        if sol.lower() == solutions[x]:
            print("nice!")
        else:
            print("Awww. Too bad.")

            