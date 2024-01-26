import random

DONE = []
PNTS = 0
print("You need to study, or you will fail.")
while True:
    print("What would you like to do?")
    if not DONE.count(1):
        print("1. Look over notes/review guide")
    if not DONE.count(2):
        print("2. Go to math tutoring")
    if not DONE.count(3):
        print("3. Work with a friend")
    print("4. Take the test")
    match input("> "):
        case "1":
            if not DONE.count(1):
                print("You go look over notes, how long do you study for?")
                while True:
                    try:
                        amtOfTime = int(input("> "))
                        if amtOfTime <= 5:
                            print("Must be a number greater than 5, try again.")
                        elif amtOfTime <= 30:
                            print("You try to study, but you don't focus very well")
                            DONE.append(1)
                            break
                        else:
                            print("you get a great study session in!")
                            PNTS += 1
                            DONE.append(1)
                            break
                    except ValueError:
                        print("NaN - Try again")
            else:
                print("You already did this")
        case "2":
            if not DONE.count(2):
                while True:
                    print("You go to math tutoring. Do you want to ask questions? (Y/n)")
                    match input("> ").upper():
                        case "Y":
                            print("By asking questions, you learn better, nice!")
                            DONE.append(2)
                            PNTS += 1
                            break
                        case "N":
                            print("By staying quiet, nobody notices you and you are still confused")
                            DONE.append(2)
                            break
                        case _:
                            print("We didn't get that, try again")
            else:
                print("You already did this.")
        case "3":
            if not DONE.count(3):
                while True:
                    print("You decided to work with a friend. Do you work with Bob or Rachel?")
                    match input("> ").upper():
                        case "BOB":
                            print("Bob is a nerd, he helps you out a lot.")
                            DONE.append(3)
                            PNTS += 1
                            break
                        case "RACHEL":
                            print("Rachel likes scrolling though TikTok and just went 'uh-huh' for every question you "
                                  "asked.")
                            DONE.append(3)
                            break
                        case _:
                            print("Please try again, Invalid Input")
            else:
                print("You already did this.")
        case "4":
            print("You enter your classroom, to your surprise, all of the students look really nervous just like you. "
                  "Your strict teacher starts handing out tests and you reach into your backpack to grab your "
                  "calculator")
            rand = random.randint(0, 5)
            if rand <= 3:
                print("that isn't there! In your rush you must have left it at home!")
                PNTS -= 1
            else:
                print("You set the calculator on your desk.")

            rand = random.randint(2, 3)
            if PNTS >= rand:
                print("You somehow manage to get A C-! Just enough to pass the class! Congratulation!")
            else:
                print("NOOOOOOOO! You got an F! You will have to retake the test.")
            break
        case _:
            print("We didn't get that, Try again.")
